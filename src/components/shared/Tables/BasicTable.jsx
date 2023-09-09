import React from "react";

const BasicTable = ({ data }) => {
  // console.log(data, "data on table");
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tiempo</th>
            <th scope="col">Predicciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => {
              // console.log(element, "element talbe");
            return (
              <tr key={index+1}>
                <th scope="row">{index}</th>
                <td>{element.time}</td>
                <td>{element.predicciones}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BasicTable;
