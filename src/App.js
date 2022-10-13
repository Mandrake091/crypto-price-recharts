import React, { useEffect, useState } from "react";
import Chart from "./components/Chart";
import "./App.css";

//i need a useEffect function for call the apis every 60s

// api 'https://api.coindesk.com/v1/bpi/currentprice.json'

export default function App() {
  const [btc, setBtc] = useState([]);

  function getApi() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((r) => r.json())
      .then((body) => {
        setBtc((btc) => [
          ...btc,
          { t: body.time.updatedISO, value: body.bpi.EUR.rate_float },
        ]);
      });
  }
  console.log(btc);

  useEffect(() => {
    getApi();
    setInterval(() => {
      getApi();
    }, 60000);
  }, []);

  return (
    <div className="App">
      <h1>ciao</h1>
      <h5>Questa è un'app per il tracking di Btc</h5>
      {
        // btc.map(el => {
        //   return (
        //   <div>
        //     <p>{el.t}</p>
        //     <p>{el.value}</p>
        //   </div>
        //   )
        // })
      }

      <Chart props={btc} />
    </div>
  );
}
