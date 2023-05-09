const Table = ({ data, config, keyFn }) => {
  return (
    <table className="table-auto border-spacing-2 w-full rounded ">
      <thead>
        <tr className="border-b-2">
          {config.map((column) => {
            return (
              <th className=" bg-slate-600 text-white" key={column.label}>
                {column.sortValue ? column.header() : column.label}
                {/* {column.sortValue && (
                  <button className="bg-black rounded p-1 hover:bg-white hover:text-black">
                    ^
                  </button>
                )} */}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData) => {
          return (
            <tr key={keyFn(rowData)} className="border-4">
              {config.map((column) => {
                return <td key={column.label}>{column.render(rowData)}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
