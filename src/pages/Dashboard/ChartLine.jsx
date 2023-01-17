import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function ChartLine() {
  ChartJS.register();

  const chartRef = useRef(null);
  const [data, setData] = useState({ datasets: [] });

  const { data: dashboardData } = useSelector((state) => state.dashboard);
  const { dailyProductivity: dailyProductivityData } = dashboardData;

  const labels = useMemo(() => {
    const days = dailyProductivityData.map((item) => {
      const date = new Date(item._id);
      date.setDate(date.getDate() + 1);

      return date.getDate();
    });

    return days;
  }, [dailyProductivityData]);

  const options = {
    elements: {
      line: {
        fill: true,
        borderWidth: 3,
        tension: 0.4,
      },
      point: {
        hoverRadius: 5,
        radius: 0,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    const dataFormatted = dailyProductivityData.map((item) => item.count);

    const chart = chartRef.current;
    const gradientColor = chart.ctx.createLinearGradient(0, 0, 0, 420);
    gradientColor.addColorStop(0, "rgba(1, 145, 253, 0.44)");
    gradientColor.addColorStop(0.76, "rgba(1, 145, 253, 0.01)");

    const chartData = {
      labels: labels,
      datasets: [
        {
          data: dataFormatted,
          backgroundColor: gradientColor,
          borderColor: "rgb(1, 145, 253)",
        },
      ],
    };

    setData(chartData);
  }, [labels, dailyProductivityData]);

  return <Chart ref={chartRef} type="line" data={data} options={options} />;
}

export default ChartLine;
