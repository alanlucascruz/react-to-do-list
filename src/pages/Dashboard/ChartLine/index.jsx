import { Chart } from "react-chartjs-2";
import { useEffect, useMemo, useRef, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";

function ChartLine() {
  ChartJS.register();

  const chartRef = useRef(null);
  const [data, setData] = useState({ datasets: [] });

  const labels = useMemo(
    () => [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    []
  );

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
    const chart = chartRef.current;

    const gradientColor = chart.ctx.createLinearGradient(0, 0, 0, 420);
    gradientColor.addColorStop(0, "rgba(1, 145, 253, 0.44)");
    gradientColor.addColorStop(0.76, "rgba(1, 145, 253, 0.01)");

    const chartData = {
      labels: labels,
      datasets: [
        {
          data: [7, 9, 14, 16, 12, 19, 21, 25, 27, 23, 20, 17, 19, 25, 31],
          backgroundColor: gradientColor,
          borderColor: "rgb(1, 145, 253)",
        },
      ],
    };

    setData(chartData);
  }, [labels]);

  return <Chart ref={chartRef} type="line" data={data} options={options} />;
}

export default ChartLine;
