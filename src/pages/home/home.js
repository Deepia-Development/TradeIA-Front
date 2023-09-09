import React, { useEffect, useState } from "react";
import LineChart from "../../components/shared/Charts/LineChart";
import BasicTable from "../../components/shared/Tables/BasicTable";
import { getData } from "../../services/Currency";
import { Loadder } from "../../components/shared/loadders/Loadder";

function Home() {
  const [data, setData] = useState([]);

  const getPreditcions = async () => {
    const response = await getData();
    setData(response);
    // console.log(response, "response on page");
  };
  useEffect(() => {
    getPreditcions();
    // console.log(data, "data on page");
  }, []);

  return (
    <>
      {data?.length > 0 ? (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <LineChart data={data} />
              </div>
              <div className="row mt-4">
                <BasicTable data={data} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex fullH">
          <div className="m-auto">{Loadder}</div>
        </div>
      )}
    </>
  );
}

export default Home;
