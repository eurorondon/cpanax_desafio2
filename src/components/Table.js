import React from "react";
import "react-base-table/styles.css";
import Table, { Column } from "react-base-table";
import Loader from "./Loader";

const Table1 = ({ url, users, setUsers, setUrl, loading }) => {
  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <Loader className="" id="" />
      </div>
    );
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <Table
        key={"index"}
        data={users}
        width={600}
        height={550}
        // expandColumnKey={"name"}
        // estimatedRowHeight={40}
        // rowRenderer={rowRenderer}
      >
        <Column
          key="firstName"
          dataKey="firstName"
          title="Nombre"
          width={100}
          sortable
        />

        <Column
          key="lastName"
          dataKey="lastName"
          title="Apellido"
          width={100}
          sortable
        />
        <Column key="age" dataKey="age" title="Edad" width={50} sortable />
        <Column
          key="username"
          dataKey="username"
          title="Username"
          width={100}
          sortable
        />

        <Column key="ip" dataKey="ip" title="ip" width={100} sortable />
        <Column
          key="image"
          dataKey="image"
          title="Imagen"
          width={100}
          sortable
        />
        {/* <Column key="children" dataKey="children" title="ROE 1 yr Fwd" width={100} sortable /> */}
      </Table>
    </div>
  );
};

export default Table1;
