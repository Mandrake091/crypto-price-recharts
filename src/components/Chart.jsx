import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function Chart(props) {


  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <LineChart
        width={800}
        height={300}
        data={props.props}
        margin={{ top: 5, right: 20, bottom: 5, left: 40 }}
      >
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="6 6" />
        <XAxis dataKey="t" />
        <YAxis domain={['dataMin', 'dataMax']}/>
      </LineChart>
    </div>
  );
}

export default Chart