import { useState } from "react";
import Table from "./Table";

import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    if ((sortBy !== null) & (sortBy !== label)) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (!sortOrder) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <div
          className="flex items-center justify-center cursor-pointer hover:bg-slate-700"
          onClick={() => handleClick(column.label)}
        >
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      ),
    };
  });

  // only sort data if sortorder & sortby are not null
  // make a copy of the "data" prop
  // find the correct sortvalue function and use it for sorting

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div className="flex flex-col items-center">
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return <GoArrowSmallUp />;
  } else if (sortOrder === "desc") {
    return <GoArrowSmallDown />;
  }
};

export default SortableTable;
