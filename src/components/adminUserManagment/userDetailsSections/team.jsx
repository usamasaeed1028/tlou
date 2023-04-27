import Image from "next/image";
import teamAvatar from "../../../../public/teamAvatar.png";
import teamAvatar2 from "../../../../public/teamAvatar2.png";
import teamAvatar3 from "../../../../public/teamAvatar3.png";
import teamAvatar4 from "../../../../public/teamAvatar4.png";

import leader from "../../../../public/leader.png";
import co_leader from "../../../../public/co_leader.png";
import captain from "../../../../public/captain.png";
import member from "../../../../public/member.png";

import { useState } from "react";
import { useUserManagmentInternalState } from "@/store/userManagement";
import { useAdminNav } from "@/store/adminNav";

const teamMembers = [
  {
    name: "Shan Mohammed",
    role: "Leader",
    avatar: leader,
  },
  {
    name: "Jason Roy",
    role: "Co_Leader",
    avatar: co_leader,
  },
  {
    name: "Ben Stoke",
    role: "Captain",
    avatar: captain,
  },
  {
    name: "Will Smeed",
    role: "Member",
    avatar: member,
  },
];

const Team = () => {

  return (
    <div className="w-full  flex flex-col gap-8 pt-5 ">
      <TeamOverView />

      <TeamsInvites />
    </div>
  );
};

const TeamsInvites = () => {
  const {menuIsOpen}=useAdminNav()
  return (
    <div
      style={{
        background:
          "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
        boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
        backdropFilter: "backdrop-filter: blur(28.5px)",
      }}
      className="rounded-xl w-full h-fit flex flex-col gap-5 flex-grow pt-[15px] pb-[25px]  font-inter text-white"
    >
      <h2 className="font-semibold text-[22px] px-[22px] ">Team Invites</h2>

      <div className={`scrollbar-hide overflow-x-scroll mx-auto min-[1295px]:w-full ${menuIsOpen?'max-[1150px]:w-[45vw] max-[1080px]:w-[45vw] max-[1200px]:w-[50vw] max-[1295px]:w-[20vw]':'max-[1150px]:w-[61vw] max-[1080px]:w-[60vw] max-[1200px]:w-[60vw] max-[1250px]:w-[62vw]'}`}>
        <table className="min-w-[675px] w-full ">
          <thead>
            <tr className="text-left ">
              <th className="py-4  px-4 ">Team Name</th>
              <th className="py-4  px-4 ">Sender Name</th>
              <th className="py-4  px-4 ">Send Date & Time</th>
              <th className="py-4  px-4  text-center">Actions</th>
            </tr>
          </thead>
          <tbody>

          <tr className="">
            

            <td className="py-4  px-4  flex gap-4">
              <div className="w-[43px] h-[43px]  aspect-square relative">
                <Image
                  src={teamAvatar3.src}
                  fill
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                  alt="team avatar"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-sm font-medium">PEZ Team</p>
                <p className="text-xs text-[#cecee0]">ID: 8350930</p>
              </div>
            </td>
            <td className="py-4  px-4">
              <p className="text-sm font-medium">Meshal Brother</p>
              <p className="text-xs text-[#cecee0]">ID: 8350930</p>
            </td>
            <td className="py-4  px-4">
              <p className="text-xs">Mar,20,2023 11;30AM</p>
            </td>
            <td className="py-4  px-4 ">
              <div className="flex gap-[9px] w-full  justify-center">
                <button className="px-3 w-20 h-8 py-[7px] text-xs font-medium bg-[#2CB916] rounded-[27px]">
                  Approverd
                </button>
                <button className="px-3 w-20 h-8 py-[7px] text-xs font-medium bg-[#D41212] rounded-[27px]">
                  Cancel
                </button>
              </div>
            </td>
          </tr>

          <tr className="">
            

            <td className="py-4  px-4  flex gap-4">
              <div className="w-[43px] h-[43px]  aspect-square relative">
                <Image
                  src={teamAvatar4.src}
                  fill
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                  alt="team avatar"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-sm font-medium">PEZ Team</p>
                <p className="text-xs text-[#cecee0]">ID: 8350930</p>
              </div>
            </td>
            <td className="py-4  px-4">
              <p className="text-sm font-medium">Meshal Brother</p>
              <p className="text-xs text-[#cecee0]">ID: 8350930</p>
            </td>
            <td className="py-4  px-4">
              <p className="text-xs">Mar,20,2023 11;30AM</p>
            </td>
            <td className="py-4  px-4 ">
              <div className="flex gap-[9px] w-full  justify-center">
                <button className="px-3 w-20 h-8 py-[7px] text-xs font-medium bg-[#2CB916] rounded-[27px]">
                  Approverd
                </button>
                <button className="px-3 w-20 h-8 py-[7px] text-xs font-medium bg-[#D41212] rounded-[27px]">
                  Cancel
                </button>
              </div>
            </td>
          </tr>

          <tr className="">
            

            <td className="py-4  px-4  flex gap-4">
              <div className="w-[43px] h-[43px]  aspect-square relative">
                <Image
                  src={teamAvatar.src}
                  fill
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                  alt="team avatar"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-sm font-medium">PEZ Team</p>
                <p className="text-xs text-[#cecee0]">ID: 8350930</p>
              </div>
            </td>
            <td className="py-4  px-4">
              <p className="text-sm font-medium">Meshal Brother</p>
              <p className="text-xs text-[#cecee0]">ID: 8350930</p>
            </td>
            <td className="py-4  px-4">
              <p className="text-xs">Mar,20,2023 11;30AM</p>
            </td>
            <td className="py-4  px-4 ">
              <div className="flex gap-[9px] w-full  justify-center">
                <button className="px-3 w-20 h-8 py-[7px] text-xs font-medium bg-[#2CB916] rounded-[27px]">
                  Approverd
                </button>
                <button className="px-3 w-20 h-8 py-[7px] text-xs font-medium bg-[#D41212] rounded-[27px]">
                  Cancel
                </button>
              </div>
            </td>
          </tr>

          <tr className="">
            

            <td className="py-4  px-4  flex gap-4">
              <div className="w-[43px] h-[43px]  aspect-square relative">
                <Image
                  src={teamAvatar.src}
                  fill
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                  alt="team avatar"
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-sm font-medium">PEZ Team</p>
                <p className="text-xs text-[#cecee0]">ID: 8350930</p>
              </div>
            </td>
            <td className="py-4  px-4">
              <p className="text-sm font-medium">Meshal Brother</p>
              <p className="text-xs text-[#cecee0]">ID: 8350930</p>
            </td>
            <td className="py-4  px-4">
              <p className="text-xs">Mar,20,2023 11;30AM</p>
            </td>
            <td className="py-4  px-4 ">
              <div className="flex gap-[9px] w-full  justify-center">
                <button className="px-3 w-20 h-8 py-[7px] text-xs font-medium bg-[#2CB916] rounded-[27px]">
                  Approverd
                </button>
                <button className="px-3 w-20 h-8 py-[7px] text-xs font-medium bg-[#D41212] rounded-[27px]">
                  Cancel
                </button>
              </div>
            </td>
          </tr>

         
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TeamOverView = () => {
  const { isEditing } = useUserManagmentInternalState();
  const [teamName, setTeamName] = useState("~ Team Gladiator ~");
  const [teamId, setTeamId] = useState("560395091");
  const [teamMembersState, setTeamMembersState] = useState(teamMembers);

  const handleTeamMembersChange = (target, value, index) => {
    /* setTeamMembersState(prevState => {
      // Object.assign would also work
      return {...prevState,};
    }); */
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
        boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
        backdropFilter: "backdrop-filter: blur(28.5px)",
      }}
      className="w-[311px] h-[420px] relative rounded-xl mx-auto pl-[12px] pr-[27px]"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="absolute top-3 right-3 hover:cursor-pointer"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
          fill="#EAEAFF"
          fill-opacity="0.54"
        />
      </svg>
      <div className="w-full relative flex h-[31.5%] pl-1">
        <div className="w-full h-[70px] flex gap-4 my-auto">
          <div className="h-full aspect-square p-0.5  rounded-full border border-[#C76BF0]">
            <div className="w-full h-full relative  ">
              <Image
                src={teamAvatar2.src}
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                alt="team avatar"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="w-full h-full  ">
            <p
              className={`w-full h-7  bg-transparent text-white font-inter font-semibold text-lg `}
            >{teamName}</p>
            <div className="w-full flex gap-0.5 text-sm font-inter text-[#cecee0]">
              <p  className="h-7 pt-[1px] flex items-center">
                ID:
              </p>
              <p
                className={`w-full h-7  bg-transparent  flex items-center  `}
              >{teamId}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col gap-4 h-[68.5%] border-t border-t-[#ADADAD] border-opacity-[22%] pt-6 pl-2">
        {teamMembersState.map((item, index) => {
          return (
            <div key={index} className=" flex gap-[22px]  h-12 ">
              <div className="h-full aspect-square relative">
                <Image
                  src={item.avatar}
                  fill
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                  alt="member avatar"
                  className="rounded-full"
                />
              </div>

              <div className="flex-grow flex flex-col ">
                <div>
                
                  <p
                    
                    className={`w-full text-sm h-6 font-inter font-medium text-white  bg-transparent  flex items-center  `}
                  
                  >{item.name}</p>
                </div>

                <div>
                  
                  <p
                   
                    className={`w-full h-6 text-xs font-inter font-normal  bg-transparent  flex items-center  ${
                      item.role == "Leader" ? "text-[#ffb53b]" : "text-white"
                    } `}
                
                    
                  >{item.role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Team;
