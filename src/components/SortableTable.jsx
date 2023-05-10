import Table from "./Table";

import useSort from "../hooks/use-sort";

import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

const SortableTable = (props) => {
  const { config, data } = props;
  const { setSortColumn, sortedData, sortBy, sortOrder } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <div
          className="flex items-center justify-center cursor-pointer hover:bg-slate-700"
          onClick={() => setSortColumn(column.label)}
        >
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </div>
      ),
    };
  });

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
