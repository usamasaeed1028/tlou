import Image from "next/image";
import userOverViewProfilePicture from "../../../public/userOverViewProfilePicture.png";
import twitterIcon from "../../../public/twitterIcon.png";
import discordIcon from "../../../public/discordIcon.png";
import youtubeIcon from "../../../public/youtubeIcon.png";
import twitchIcon from "../../../public/twitchIcon.png";

import moment from "moment-timezone";

import MOCK_DATA from "./MOCK_DATA.json";
import { useState } from "react";
import {
  useUserManagmentInternalState,
  
} from "@/store/userManagement";



const UserOverView = () => {
  const { selectedUser,setIsEditing,isEditing, } = useUserManagmentInternalState();
  const [selectedUSerDetails, setSelectedUSerDetails] = useState(selectedUser);
  // console.log(selectedUSerDetails)

  /*     const timeZone = selectedUSerDetails.time_zone;
const offset = moment.tz(timeZone).format('Z'); */
  const utcOffset = `(UTC${moment
    .tz(selectedUSerDetails.time_zone)
    .format("Z")})`;
  console.log(utcOffset);

  const handleChange=(event)=>{
    const { name, value } = event.target;
    setSelectedUSerDetails({...selectedUSerDetails,[name]: value})
  }

  return (
    <div className="w-full h-full  py-[20px] flex flex-col  font-inter text-[#CECEE0]">
      <div className="w-full h-[240px] justify-evenly  flex flex-col">
        <div className="w-full h-full gap-1 flex flex-col items-center ">
          <div
            style={{ border: "1px solid #FFB53B" }}
            className="w-[111px] p-[3px]  aspect-square  rounded-full flex "
          >
            <div className="w-full relative h-full  m-auto rounded-full">
              <Image
                src={userOverViewProfilePicture.src}
                fill
                sizes=""
                alt="user profile picture"
                className="rounded-full "
              />
            </div>
          </div>
          <div className="my-auto flex flex-col gap-[8px]  text-center font-inter">
              <p className="font-semibold  text-[22px] text-white">
              {selectedUSerDetails.user_name}
            </p> 
            
            <span className="flex text-xs gap-[6px] w-fit  mx-auto">
              <p className="font-normal  ">Time Zone:</p>
              <p className=" font-medium text-white">{utcOffset}.</p>
            </span>
          </div>
        </div>
      </div>
      <div className="  py-5">
        <h2 className="text-white pl-7 mb-[10px]">Details</h2>
        <table className="w-full  border-t    leading-[150%] tracking-[0.15px] text-xs ">
          <tbody>
            <tr>
              <th className=" font-normal text-start px-7 py-4 ">Name:</th>
              <th className="font-medium text-start text-white">Jason Roy</th>
              {/* <th className="font-medium text-start text-white">Jason Roy</th> */}
            </tr>
            <tr>
              <th className=" font-normal text-start px-7 py-4 ">User Name:</th>
              <th className="font-medium text-start text-white">@jasonroyp</th>
            </tr>
            <tr>
              <th className=" font-normal text-start px-7 py-4 ">Status:</th>
              <th className="font-medium text-start text-white">
                <button className="w-[73px] flex items-center pl-[7px] gap-[7px] h-[23px] text-[#2CB916] bg-[#2CB916] bg-opacity-20 rounded-[5px]">
                  <span className="w-[9px] h-[9px] rounded-full bg-[#2CB916]"></span>{" "}
                  <p>Active</p>{" "}
                </button>
              </th>
            </tr>
            <tr>
              <th className=" font-normal text-start px-7 py-4 ">Country:</th>
              <th className="font-medium text-start text-white">
                United Kingdom
              </th>
            </tr>
            <tr>
              <th className=" font-normal text-start px-7 py-4 ">Email ID:</th>
              <th className="font-medium text-start text-white">
                uxwithawais@gmail.com
              </th>
            </tr>
            <tr>
              <th className=" font-normal text-start px-7 py-4 ">PSN ID:</th>
              <th className="font-medium text-start text-white">FD404840</th>
            </tr>
            <tr>
              <th className=" font-normal text-start px-7 py-4 ">
                Rgd IP Address:
              </th>
              <th className="font-medium text-start text-white">
                66.249.64.97
              </th>
            </tr>
            <tr>
              <th className=" font-normal text-start px-7 py-4 ">
                ALL IP Addresses:
              </th>
              <th className="font-medium text-start  underline text-[#FFB53B] hover:cursor-pointer">
                View All IP Adresses
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex-grow  flex flex-col gap-5 pl-7 py-[18px]">
        <h2 className="  text-lg">Socials</h2>
        <div className="flex flex-col gap-7 w-full  font-inter font-normal">
          <div className="w-full  flex gap-6 items-center">
            <div className="w-9 h-9 relative rounded-full ">
              <Image
                src={twitterIcon.src}
                fill
                alt="social media icon  "
                className="rounded-full"
              />
            </div>
            <p>Twitter.com/imrankhanPTI</p>
          </div>

          <div className="w-full  flex gap-6 items-center">
            <div className="w-9 h-9 relative rounded-full ">
              <Image
                src={discordIcon.src}
                fill
                alt="social media icon "
                className="rounded-full"
              />
            </div>
            <p>Twitter.com/imrankhanPTI</p>
          </div>

          <div className="w-full  flex gap-6 items-center">
            <div className="w-9 h-9 relative  ">
              <Image
                src={twitchIcon.src}
                fill
                alt="social media icon  "
                className="rounded-full"
              />
            </div>
            <p>Twitter.com/imrankhanPTI</p>
          </div>

          <div className="w-full  flex gap-6 items-center">
            <div className="w-9 h-9 relative  ">
              <Image
                src={youtubeIcon.src}
                fill
                alt="social media icon  "
                className="rounded-full"
              />
            </div>
            <p>Twitter.com/imrankhanPTI</p>
          </div>
        </div>
      </div>
      <div className="flex  text-base font-medium justify-evenly leading-[150%] tracking-[0.15px]">
        <button
          onClick={()=>{setIsEditing(true)}}
          className=" px-[50px] py-[7px]   rounded-[9px] text-white bg-[#FFB53B]"
        >
          Edit
        </button>
        <button className=" px-[30px] py-[6px]   rounded-[9px] text-[#FF0A0A] border border-[#FF0A0A]  ">
          Suspend
        </button>
      </div>
    </div>
  );
};

export default UserOverView;
