import { useState } from "react";
import BadgesEarned from "./badgesEarned";
import Statistics from "./statistics";
import TrophiesEarned from "./trophiesEarned";
import UserOverView from "./userOverView";
import { useUserManagmentInternalState } from "@/store/userManagement";
import GeneralStatistics from "./userDetailsSections/Generalstatistics";
import Team from "./userDetailsSections/team";
import Penality from "./userDetailsSections/penality";

const UserDetails = () => {
  const [section, setSection] = useState("Statistics");

  return (
    <div className="w-full min-h-full lg:gap-4 xl:gap-8  flex">
      <div
        style={{
          background:
            "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
          boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
          backdropFilter: "backdrop-filter: blur(28.5px)",
        }}
        className="w-[30%]  min-w-[310px] rounded-xl "
      >
        <UserOverView />
      </div>
      <div className=" flex-grow flex flex-col ">
        <div className="w-full h-[42px]    flex flex-col">
          <div className="text-[#CECEE0] h-full font-inter   font-medium text-base flex ">
            <p  onClick={()=>{setSection('Statistics')}} className={`border-b hover:cursor-pointer  w-1/4 text-center ${section=='Statistics'?'border-b-[#ffb53b] text-[#ffb53b]':''}  `}>
              Statistics
            </p>
            <p  onClick={()=>{setSection('Team')}} className={`border-b hover:cursor-pointer  w-1/4 text-center ${section=='Team'?'border-b-[#ffb53b] text-[#ffb53b]':''}  `}>Team</p>
            <p  onClick={()=>{setSection('Penality')}} className={`border-b hover:cursor-pointer  w-1/4 text-center ${section=='Penality'?'border-b-[#ffb53b] text-[#ffb53b]':''}  `}>Penality</p>
            <p  onClick={()=>{setSection('User Audit')}} className={`border-b hover:cursor-pointer  w-1/4 text-center ${section=='User Audit'?'border-b-[#ffb53b] text-[#ffb53b]':''}  `}>User Audit</p>
          </div>
        </div>

      {section=='Statistics'&& <GeneralStatistics/>}
      {section=='Team'&& <Team/>}
      {section=='Penality'&& <Penality/>}
      </div>
    </div>
  );
};

export default UserDetails;
