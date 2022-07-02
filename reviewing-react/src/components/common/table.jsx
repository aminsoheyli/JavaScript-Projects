import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data, pageInfo }) => {
  return (
    <table className="table table-striped">
      <caption>List of movies</caption>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody pageInfo={pageInfo} data={data} columns={columns} />
    </table>
  );
};

export default Table;
