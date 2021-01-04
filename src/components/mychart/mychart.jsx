import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const MyChart = () => {
  const [categories, setCategories] = useState([
    "January",
    "February",
    "March",
  ]);
  const [data, setData] = useState([80, 50, 30]);
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "radar",
    },
    title: {
      text: "Basic Radar Chart",
    },
    xaxis: {
      categories: categories,
    },
  });
  const [series, setSeries] = useState([
    {
      name: "Series 1",
      data: data,
    },
  ]);

  const func1 = () => {
    setCategories([...categories, "new"]);
    setData([...data, 40]);
  };

  useEffect(() => {
    setOptions((options) => ({
      ...options,
      xaxis: { categories: categories },
    }));
    setSeries([{ name: "Series 1", data: data }]);
  }, [categories, data]);

  return (
    <div>
      <h1>Dynamic Radar Chart</h1>
      <Chart options={options} series={series} type="radar" width="500" />
      <button onClick={func1}>add</button>
    </div>
  );
};

export default MyChart;
