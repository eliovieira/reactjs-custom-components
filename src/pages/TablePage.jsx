import SortableTable from "../components/SortableTable";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
    { name: "Grape", color: "bg-purple-500", score: 2 },
  ];

  //   const handleClick = (order) => {
  //     let x = null;
  //     if (order === "asc") {
  //       x = data.sort((a, b) => (a.score > b.score ? 1 : -1));
  //       order = "desc";
  //     } else {
  //       x = data.sort((a, b) => (a.score < b.score ? 1 : -1));
  //       order = "asc";
  //     }
  //     setData([...x]);
  //   };

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit?.name,
      sortValue: (fruit) => fruit?.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-2 m-3 ${fruit?.color}`} />,
    },
    {
      label: "Score",
      render: (fruit) => fruit?.score,
      sortValue: (fruit) => fruit?.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  //   const data2 = [
  //     { name: "Truck", price: 15000, discount: 0.1, img: "truck.png" },
  //     { name: "Car", price: 7000, discount: 0.15, img: "car.png" },
  //     { name: "Boat", price: 35000, discount: 0.02, img: "boat.png" },
  //   ];
  return <SortableTable data={data} config={config} keyFn={keyFn} />;
};

export default TablePage;
