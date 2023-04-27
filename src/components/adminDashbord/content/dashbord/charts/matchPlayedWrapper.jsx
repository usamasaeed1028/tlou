import { useAdminNav } from "@/store/adminNav";
import { MatchPlayedChart } from "./matchPlayedChart";
import { useEffect } from "react";

const MatchPlayed = () => {
  return (
    <div className="overflow-hidden   w-full h-full flex flex-col rounded-xl">
      <p className="pl-5 pt-3 font-inter font-bold text-base leading-[160%] tracking-[0.15px] text-[#eaeaff] opacity-[87%]">
        Matches Played
      </p>
      <p className=" pl-5 text-[42px] font-inter font-bold leading-[123.5%] tracking-[0.25px] text-[#EAEAFF] opacity-[87%]">
        200
      </p>
      <div className="  my-auto  flex-grow">
        <div className="   aspect-banner+usersByCountry&&MatchPlayedCharts-11/4  flex  ">
          <MatchPlayedChart />
        </div>
      </div>

      <svg
        width="28"
        className="absolute top-5 right-3 hover:cursor-pointer"
        height="25"
        viewBox="0 0 28 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 8.33333C15.2833 8.33333 16.3333 7.39583 16.3333 6.25C16.3333 5.10416 15.2833 4.16666 14 4.16666C12.7167 4.16666 11.6667 5.10416 11.6667 6.25C11.6667 7.39583 12.7167 8.33333 14 8.33333ZM14 10.4167C12.7167 10.4167 11.6667 11.3542 11.6667 12.5C11.6667 13.6458 12.7167 14.5833 14 14.5833C15.2833 14.5833 16.3333 13.6458 16.3333 12.5C16.3333 11.3542 15.2833 10.4167 14 10.4167ZM14 16.6667C12.7167 16.6667 11.6667 17.6042 11.6667 18.75C11.6667 19.8958 12.7167 20.8333 14 20.8333C15.2833 20.8333 16.3333 19.8958 16.3333 18.75C16.3333 17.6042 15.2833 16.6667 14 16.6667Z"
          fill="#EAEAFF"
          fillOpacity="0.54"
        />
      </svg>
    </div>
  );
};

export default MatchPlayed;
