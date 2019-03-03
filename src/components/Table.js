import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { FaSort } from "react-icons/fa";

const Table = props => {
  const HeaderCell = (name, text) => {
    return (
      <th onClick={event => props.onSort(event, name)}>
        {text}
        {props.sortField === name ? (
          <button className="btn btn-light btn-sm">
            {props.sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />}
          </button>
        ) : (
          <button className="btn btn-light btn-sm">
            <FaSort />
          </button>
        )}
      </th>
    );
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          {HeaderCell("username", "Name")}
          {HeaderCell("email", "Email")}
          <th>Task</th>
          {HeaderCell("status", "Status")}
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {props.data.length > 0 ? (
          props.data.map((item, index) => {
            return (
              <tr key={item.id + item.email}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.text}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    disabled={props.disabled}
                    onClick={() => props.editTask(item)}
                    type="button"
                    className="btn btn-outline-info"
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>
              <p> The list is empty </p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
