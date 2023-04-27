import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  aspectRatio: 3.5,
  maintainAspectRatio: true,
  responsive: true,

  plugins: {
    legend: {
      display: false,
      position: "bottom",
    },
    Tooltip: {
      enabled: false,
    },
  },
};

export const data = {
  labels: ["USA", "India", "Canada", "Japan", "France"],
  datasets: [
    {
      label: "",
      data: [10, 10, 10, 10, 10],
      backgroundColor: [
        "rgb(253, 181, 40, 0.9)",
        "rgb(253, 181, 40, 0.7)",
        "rgb(253, 181, 40, 0.5)",
        "rgb(253, 181, 40, 0.3)",
        "rgb(253, 181, 40, 0.1)",
      ],

      borderWidth: 0,
      cutout: "85%",
      circumference: 270,
      rotation: 225,
    },
  ],
};

const UsersByCountryChart = () => {
  const gaugetext = {
    id: "gaugetext",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        data,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;
      let tex1Size = 0;
      let tex2Size = 0;

      if (chart.width < 220) {
        (tex1Size = 10), (tex2Size = 5);
      } else {
        tex1Size = 20;
        tex2Size = 10;
      }
      const xCenter = chart.getDatasetMeta(0).data[0].x;
      const yCenter = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.fillStyle = "rgba(234,234,255,0.87)";
      // ctx.font= 'bold 15px inter'
      ctx.font = `bold ${tex1Size}px inter`;
      ctx.textAlign = "center";
      ctx.fillText("89K", xCenter, yCenter);

      ctx.fillStyle = "white";
      //  ctx.font= 'bold 10px inter'
      ctx.font = `bold ${tex2Size}px inter`;

      ctx.textAlign = "center";
      ctx.fillText("2022", xCenter, yCenter + tex1Size);
    },
  };

  return (
    <div className="  flex flex-col    h-full mx-auto">
      <Doughnut
        data={data}
        options={options}
        plugins={[gaugetext]}
        className="my-auto w-2/3"
      />
      <div className=" w-2/3 flex  flex-wrap items-center justify-center aspect-foughnutChartNewLgend-24/4 mx-auto ">
        {data.labels.map((item, index) => {
          return (
            <div
              key={index}
              className="flex py-2 items-center justify-center gap-2 w-1/3"
            >
              <span
                style={{ background: data.datasets[0].backgroundColor[index] }}
                className={`h-2 w-2 rounded-full  `}
              ></span>
              <p className="text-[#EAEAFF] 2xl:text-lg lg:text-xs text-[8px]">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersByCountryChart;

/* 
<div className='  mx-auto pb-1 flex flex-wrap items-center justify-center '>
            {data.labels.map((item,index)=>{
              
              return <div key={index} className='flex py-2 items-center justify-center gap-2 w-1/3'>
                  <span style={{background:data.datasets[0].backgroundColor[index]}} className={`h-2 w-2 rounded-full  `}></span>
                  <p className='text-[#EAEAFF] 2xl:text-lg text-xs'>{item }</p>
              </div>
            })}
      </div>
*/
