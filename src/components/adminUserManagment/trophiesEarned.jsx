import bronzeTrophy from "../../../public/bronzeTrophy.png";
import silverTrophy from "../../../public/silverTrophy.png";
import goldTrophy from "../../../public/goldTrophy.png";
import Image from "next/image";
import { useUserManagmentInternalState } from "@/store/userManagement";

const TrophiesEarned = () => {

  const {setSelectedUser, selectedUser, setIsEditing, isEditing } =useUserManagmentInternalState();
  console.log(selectedUser)
  const handleTrophiesChange=(event)=>{
    const { name, value } = event.target;
      const newTrophies=selectedUser.trophies
      newTrophies[name]=value
      setSelectedUser({...selectedUser,newTrophies})
      /* setSelectedUser(prevState => {
      
      return {...prevState, oldSocials};
    }) */
  }
  return (
    <div
      style={{
        background:
          "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
        boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
        backdropFilter: "backdrop-filter: blur(28.5px)",
      }}
      className="w-full flex flex-col gap-9 rounded-xl  pt-6 pb-9 px-8 font-inter font-semibold text-white"
    >
      <h2 className="text-[22px]">Trophies Earned</h2>
      <div className="w-full flex gap-3 xl:gap-6 justify-between h-full">
    {/*     <div
          style={{
            boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
            backdropFilter: "blur(28.5px)",
          }}
          className="flex flex-col  justify-between items-center w-1/3 h-full py-6 rounded-xl"
        >
        <div className="text-base flex justify-center items-center text-center text-[#EAA86E] bg-[#E9A86E] bg-opacity-20 w-[113px] h-7 rounded-[5px]">

        <input
              onChange={handleTrophiesChange}
              name="bronz"
              className={`w-full h-7 text-center  bg-transparent pl-2 ${isEditing ? "shadow-inputModification  rounded-md" : ""}`}
              value={selectedUser.trophies.bronz}
              disabled={!isEditing}
            />
        </div>
          <span className="relative w-[93px] h-[112px]">
            <Image
              src={bronzeTrophy.src}
              fill
              sizes="93px"
              alt="bronze trophy"
            />
          </span>

          <p className="text-xl">Bronze</p>
        </div>

        <div
          style={{
            boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
            backdropFilter: "blur(28.5px)",
          }}
          className="flex flex-col justify-between items-center w-1/3 h-full py-6 rounded-xl"
        >
          <div className="text-base text-center text-[#ffffff] bg-[#ffffff] bg-opacity-20 w-[113px] h-7 rounded-[5px]">
          <input
              onChange={handleTrophiesChange}
              name="silver"
              className={`w-full h-7 text-center  bg-transparent pl-2 ${isEditing ? "shadow-inputModification  rounded-md" : ""}`}
              value={selectedUser.trophies.silver}
              disabled={!isEditing}
            />
          </div>
          <span className="relative w-[93px] h-[112px]">
            <Image
              src={silverTrophy.src}
              fill
              sizes="93px"
              alt="bronze trophy"
            />
          </span>

          <p className="text-xl">Silver</p>
        </div>

        <div
          style={{
            boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
            backdropFilter: "blur(28.5px)",
          }}
          className="flex flex-col justify-between items-center w-1/3 h-full py-6 rounded-xl"
        >
          <div className="text-base text-center text-[#fff37e] bg-[#fff37e] bg-opacity-20 w-[113px] h-7 rounded-[5px]">
          <input
              onChange={handleTrophiesChange}
              name="gold"
              className={`w-full h-7 text-center  bg-transparent pl-2 ${isEditing ? "shadow-inputModification  rounded-md" : ""}`}
              value={selectedUser.trophies.gold}
              disabled={!isEditing}
            />
          </div>
          <span className="relative w-[93px] h-[112px]">
            <Image src={goldTrophy.src} fill sizes="93px" alt="bronze trophy" />
          </span>

          <p className="text-xl">Gold</p>
        </div> */}
        <Item type='bronz'/>
        <Item type='silver'/>
        <Item type='gold'/>
      </div>
    </div>
  );
};



const Item=({type})=>{
  const {setSelectedUser, selectedUser, setIsEditing, isEditing } =useUserManagmentInternalState();
  console.log(selectedUser)
  const handleTrophiesChange=(event)=>{
    const { name, value } = event.target;
    console.log(name)
      const newTrophies=selectedUser.trophies
      newTrophies[name]=value
      setSelectedUser({...selectedUser,newTrophies})
      /* setSelectedUser(prevState => {
      
      return {...prevState, oldSocials};
    }) */
  }
  return  <div
  style={{
    boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
    backdropFilter: "blur(28.5px)",
  }}
  className="flex flex-col justify-between items-center w-1/3 h-[224px] 2xl:h-[260px] xl:py-6 py-3 rounded-xl"
>
  <div className={`text-base text-center  bg-opacity-20 w-[113px] h-7 rounded-[5px]  ${type=='bronz'?'text-[#EAA86E] bg-[#E9A86E]':type=='silver'?'text-[#ffffff] bg-[#ffffff]':'text-[#fff37e] bg-[#fff37e]'} `}>
  <input
      onChange={handleTrophiesChange}
      name={type}
      className={`w-full h-7 text-center xl:text-base text-sm bg-transparent pl-2 ${isEditing ? "shadow-inputModification  rounded-md" : ""}`}
      value={selectedUser.trophies[type]}
      disabled={!isEditing}
    />
  </div>
  <span className="relative w-[86px] h-[102px] ">
    <Image
      src={type=='bronz'?bronzeTrophy.src:type=='silver'?silverTrophy.src:goldTrophy.src}
      fill
      sizes="93px"
      alt="trophy"
    />
  </span>

  <p className="xl:text-xl text-base capitalize">{type}</p>
</div>
}

export default TrophiesEarned;
