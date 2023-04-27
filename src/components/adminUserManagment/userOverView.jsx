import Image from "next/image";
import userOverViewProfilePicture from "../../../public/userOverViewProfilePicture.png";
import twitterIcon from "../../../public/twitterIcon.png";
import discordIcon from "../../../public/discordIcon.png";
import youtubeIcon from "../../../public/youtubeIcon.png";
import twitchIcon from "../../../public/twitchIcon.png";

import moment from "moment-timezone";

import MOCK_DATA from "./MOCK_DATA3.json";
import { useState } from "react";
import { useUserManagmentInternalState } from "@/store/userManagement";
import { isWeekend } from "date-fns";
import { AllTimeZones } from "./allTimesZones";

const UserOverView = () => {
  const { setSelectedUser, selectedUser, setIsEditing, isEditing } =
    useUserManagmentInternalState();

  
  

  const utcOffset = `(UTC${moment.tz(selectedUser.time_zone).format("Z")})`;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  const handleTimeZoneChange=(newTimeZone)=>{

    setSelectedUser({ ...selectedUser, time_zone:newTimeZone });
  }

  const handleSocialChange = (event) => {
    const { name, value } = event.target;
    const newSocials = selectedUser.socials;
    newSocials[name] = value;
    setSelectedUser({ ...selectedUser, newSocials });
    
  };

  return (
    <div className="w-full h-full  py-[20px] flex flex-col  font-inter text-[#CECEE0]">
      <div className="w-full h-[240px] justify-evenly  flex flex-col">
        <div className="w-full h-full gap-1 flex flex-col items-center ">
          <div
            style={{ border: "1px solid #FFB53B" }}
            className="w-[111px] p-[3px]  aspect-square  rounded-full flex "
          >
            <div className="w-full relative h-full  m-auto rounded-full">
              {!isEditing && (
                <Image
                  src={userOverViewProfilePicture.src}
                  fill
                  sizes=""
                  alt="user profile picture"
                  className="rounded-full "
                />
              )}
              {isEditing && (
                <div class="flex items-center justify-center w-full h-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-full rounded-full border-2 border-gray-300 border-dashed  cursor-pointer bg-[#1E1E1E]"
                  >
                    <div class="flex flex-col items-center justify-center m-auto">
                      <svg
                        aria-hidden="true"
                        class="w-10 h-10  text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              )}
            </div>
          </div>
          <div className="my-auto flex flex-col xl:gap-2 gap-1 w-full  text-center font-inter">
            <p className="font-semibold  text-[22px] text-white">
              {selectedUser.name}
            </p>

            {<span className="flex text-xs gap-[6px] w-fit  mx-auto ">
              <p className="font-normal  ">Time Zone:</p>
              <p className=" font-medium text-white">{utcOffset}.</p>
            </span>}

           {isEditing&&<div className="w-full h-10   flex justify-evenly">
                    <AllTimeZones handleTimeZoneChange={handleTimeZoneChange}/>
           </div>}
          </div>
        </div>
      </div>
      <div className=" flex flex-col border-t  py-5">
        <h2 className="text-white  pl-7 mb-[10px]">Details</h2>
        <div className="flex-grow   flex leading-[150%] tracking-[0.15px] text-xs ">
          <div className=" w-1/2  xl:pl-7 pl-4   flex flex-col gap-4">
            {[
              "Name",
              "User Name",
              "Status",
              "Country",
              "Email ID",
              "PSN ID",
              "Rgd IP Address",
              "ALL IP Addresses",
            ].map((item, index) => {
              return (
                <div className="  flex items-center pt-0.5 h-7" key={index}>
                  <p>{item}:</p>
                </div>
              );
            })}
          </div>

          <div className=" w-1/2  xl:pr-6 pr-2  pl-2  flex flex-col gap-4 ">
            <input
              // style={{background:'linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)',boxShadow:'inset 0px 0px 3px rgba(255, 255, 255, 0.31)',backdropFilter:'blur(28.5px)'}}

              onChange={handleChange}
              name="name"
              className={`w-full h-7  bg-transparent  ${
                isEditing ? "shadow-inputModification  rounded-md  pl-2" : ""
              }`}
              value={selectedUser.name}
              disabled={!isEditing}
            />
            <input
              onChange={handleChange}
              name="user_name"
              className={`w-full h-7  bg-transparent  ${
                isEditing ? "shadow-inputModification  rounded-md pl-2" : ""
              }`}
              value={selectedUser.user_name}
              disabled={!isEditing}
            />
            <div>
              {!isEditing && (
                <span
                  className={`w-[73px] h-7  flex items-center pl-[7px] gap-[7px]   bg-opacity-20 rounded-[5px] ${
                    selectedUser.status == "active"
                      ? "text-[#2CB916] bg-[#2CB916]"
                      : "text-[#D41212] bg-[#D41212]"
                  } `}
                >
                  <span
                    className={`w-[9px] h-[9px] rounded-full ${
                      selectedUser.status == "active"
                        ? "bg-[#2CB916]"
                        : "bg-[#D41212]"
                    }  `}
                  ></span>{" "}
                  <p>{selectedUser.status}</p>
                </span>
              )}
              {isEditing && (
                <select
                  style={{
                    background:
                      "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
                    boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
                    backdropFilter: "backdrop-filter: blur(28.5px)",
                  }}
                  value={selectedUser.status}
                  onChange={handleChange}
                  name="status"
                  className=" shadow-inputModification  mx-auto  text-xs rounded-lg h-7   block w-full pl-2 bg-black  dark:placeholder-gray-400 dark:text-white  focus:border-blue-500"
                >
                  <option className="2xl:text-base hover:cursor-pointer bg-[#1E1E1E]" value="active">
                    active
                  </option>
                  <option
                    className="2xl:text-base hover:cursor-pointer bg-[#1E1E1E]"
                    value="inactive"
                  >
                    inactive
                  </option>
                </select>
              )}
            </div>

            <input
              onChange={handleChange}
              name="country"
              className={`w-full  h-7 bg-transparent  ${
                isEditing ? "shadow-inputModification  rounded-md pl-2" : ""
              }`}
              value={selectedUser.country}
              disabled={!isEditing}
            />
            <input
              onChange={handleChange}
              name="email"
              className={`w-full  h-7 bg-transparent  ${
                isEditing ? "shadow-inputModification  rounded-md pl-2" : ""
              }`}
              value={selectedUser.email}
              disabled={!isEditing}
            />
            <input
              onChange={handleChange}
              name="psn_id"
              className={`w-full  h-7 bg-transparent  ${
                isEditing ? "shadow-inputModification  rounded-md pl-2" : ""
              }`}
              value={selectedUser.psn_id}
              disabled={!isEditing}
            />
            <input
              onChange={handleChange}
              name="ip_adress"
              className={`w-full  h-7 bg-transparent  ${
                isEditing ? "shadow-inputModification  rounded-md pl-2" : ""
              }`}
              value={selectedUser.ip_adress}
              disabled={!isEditing}
            />
            <div className="flex h-7  items-center">
              <p className="font-medium   text-start  underline text-[#FFB53B] hover:cursor-pointer">
                View All IP Adresses
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="  flex flex-col gap-5 pl-7 text-sm py-[18px]">
        <h2 className="  text-lg">Socials</h2>
        <div className="flex flex-col gap-7 w-full  font-inter font-normal pr-6">
          <div className="w-full  flex gap-6 items-center">
            <div className="w-9 h-9  relative rounded-full ">
              <Image
                src={twitterIcon.src}
                fill
                alt="social media icon  "
                className="rounded-full"
              />
            </div>
            <div className="w-2/3 h-9">
              <input
                onChange={handleSocialChange}
                name="twitter"
                className={`w-full  h-7  bg-transparent pl-2 ${
                  isEditing ? "shadow-inputModification  rounded-md" : ""
                }`}
                value={selectedUser.socials.twitter}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="w-full  flex gap-6 items-center">
            <div className="w-9 h-9 flex  relative rounded-full ">
              <Image
                src={discordIcon.src}
                fill
                alt="social media icon "
                className="rounded-full "
              />
            </div>
            <div className="w-2/3 h-9">
              <input
                onChange={handleSocialChange}
                name="discord"
                className={`w-full  h-7  bg-transparent pl-2 ${
                  isEditing ? "shadow-inputModification  rounded-md" : ""
                }`}
                value={selectedUser.socials.discord}
                disabled={!isEditing}
              />
            </div>
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
            <div className="w-2/3 h-9">
              <input
                onChange={handleSocialChange}
                name="youtube"
                className={`w-full  h-7  bg-transparent pl-2 ${
                  isEditing ? "shadow-inputModification  rounded-md" : ""
                }`}
                value={selectedUser.socials.youtube}
                disabled={!isEditing}
              />
            </div>
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
            <div className="w-2/3 h-9">
              <input
                onChange={handleSocialChange}
                name="twitch"
                className={`w-full  h-7  bg-transparent pl-2 ${
                  isEditing ? "shadow-inputModification  rounded-md" : ""
                }`}
                value={selectedUser.socials.twitch}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  text-base font-medium justify-evenly leading-[150%] tracking-[0.15px]">
        <button
          onClick={() => {
            setIsEditing(!isEditing);
          }}
          className={`px-[50px] py-[7px]   rounded-[9px] text-white ${
            isEditing ? "bg-[#FF0A0A]" : "bg-[#FFB53B]"
          } `}
        >
          {!isEditing ? "Edit" : "Cancel"}
        </button>
        {isEditing && (
          <button
            onClick={() => {
              setIsEditing(false);
            }}
            className=" px-[50px] py-[6px]   rounded-[9px] text-white  bg-[#2CB916]  "
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default UserOverView;
