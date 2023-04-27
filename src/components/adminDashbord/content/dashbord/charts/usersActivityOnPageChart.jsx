import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  width:500,
  height:500,
  aspectRatio: 2.2,
  maintainAspectRatio: true,

  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },

  indexAxis: "y",
  scales: {
    x: {
      ticks: {
        color: "rgba(231,227,252,0.38)",
      },
      grid: {
        color: "white ",
      },
      border: {
        width: 2,
        dash: [6, 6],
      },
    },
    y: {
      ticks: {
        color: "rgba(234,234,255,0.87)",
      },
    },
  },
};

const labels = [
  "Leaderboard",
  "Home",
  "Ladders",
  "Tournaments",
  "Hall of Fame",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [24165, 12850, 8375, 6500, 4320],
      backgroundColor: [
        "rgba(120, 126, 255, 1)",
        "rgba(131,229,66,1)",
        "rgba(253,190,66,1)",
        "rgba(64,205,250,1)",
        "rgba(255,98,95,1)",
      ],
      borderRadius: 10,
    },
  ],
};

export function UsersActivityOnPageChart() {
  const [w, setW] = useState(0);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
      chart.setWidth(window.innerWidth); // set the width of the chart canvas
    }
  }, [chart]);




  const innerBarText = {
    afterDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        data,
        chartArea: { left },
        scales: { x, y },
      } = chart;
      ctx.save();
      data.datasets[0].data.forEach((dataPoint, index) => {
        const font = `bold ${window.innerWidth * 0.01}px inter`;
        ctx.font = font;
        ctx.fillStyle = "white";
        ctx.fillText(
          data.datasets[0].data[index],
          left + 10,
          y.getPixelForValue(index) + 5
        );
      });
    },
  };

  return (
    <div className="max-w-[1440px] ">
      <Bar

        options={options}
        data={data}
        plugins={[innerBarText]}
        className="w-[80%] "
        getChart={setChart} // set the chart object

      />
      ;
    </div>
  );
}
