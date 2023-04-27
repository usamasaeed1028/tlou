import whiteBadge from "../../../public/whiteBadge.png";
import redBadge from "../../../public/redBadge.png";
import blueBadge from "../../../public/blueBadge.png";
import Image from "next/image";
import { useAdminNav } from "@/store/adminNav";

const BadgesEarned = () => {

  const {menuIsOpen}=useAdminNav()
  return (
    <div
      style={{
        background:
          "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
        boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
        backdropFilter: "backdrop-filter: blur(28.5px)",
      }}
      className="w-full flex flex-col gap-6 rounded-xl  pt-6 pb-9 px-8 font-inter font-semibold text-white"
    >
      <h2 className="text-[22px]">Badges Earned</h2>

      <div className="w-full h-full flex flex-col gap-6 ">
        <div className="  flex justify-between xl:gap-6 gap-2 h-1/2 ">
          <div
            style={{
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
              backdropFilter: "blur(28.5px)",
            }}
            className="flex  items-center gap-[15px] py-4 xl:pl-[21px] pl-1 w-1/3 rounded-xl"
          >
            <span
              style={{
                aspectRatio: 4 / 6,
              }}
              className="relative   h-full "
            >
              <Image src={whiteBadge.src} fill alt="badge" />
            </span>
            <div className="text-white  font-inter pt-2 h-full  ">
              <p className={`font-semibold ${menuIsOpen?'xl:text-xl text-xs':'xl:text-xl text-md'} `}>Titam</p>
              <p className="font-normal text-[10px]">Mar, 23 , 2023</p>
            </div>



          </div>
          <div
            style={{
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
              backdropFilter: "blur(28.5px)",
            }}
            className="flex  items-center gap-[15px] py-4 xl:pl-[21px] pl-1 w-1/3 rounded-xl"
          >
            <span
              style={{
                aspectRatio: 4 / 6,
              }}
              className="relative   h-full "
            >
              <Image src={redBadge.src} fill alt="badge" />
            </span>
            <div className="text-white  font-inter pt-2 h-full  ">
              <p className={`font-semibold ${menuIsOpen?'xl:text-xl text-xs':'xl:text-xl text-md'} `}>Titam</p>
              <p className="font-normal text-[10px]">Mar, 23 , 2023</p>
            </div>



          </div>
          <div
            style={{
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
              backdropFilter: "blur(28.5px)",
            }}
            className="flex  items-center gap-[15px] py-4 xl:pl-[21px] pl-1 w-1/3 rounded-xl"
          >
            <span
              style={{
                aspectRatio: 4 / 6,
              }}
              className="relative   h-full "
            >
              <Image src={blueBadge.src} fill alt="badge" />
            </span>
            <div className="text-white  font-inter pt-2 h-full  ">
              <p className={`font-semibold ${menuIsOpen?'xl:text-xl text-xs':'xl:text-xl text-md'} `}>Titam</p>
              <p className="font-normal text-[10px]">Mar, 23 , 2023</p>
            </div>



          </div>
          

        </div>


        <div className="  flex justify-between xl:gap-6 gap-2 h-1/2 ">
          <div
            style={{
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
              backdropFilter: "blur(28.5px)",
            }}
            className="flex  items-center gap-[15px] py-4 xl:pl-[21px] pl-1 w-1/3 rounded-xl"
          >
            <span
              style={{
                aspectRatio: 4 / 6,
              }}
              className="relative   h-full "
            >
              <Image src={whiteBadge.src} fill alt="badge" />
            </span>
            <div className="text-white  font-inter pt-2 h-full  ">
              <p className={`font-semibold ${menuIsOpen?'xl:text-xl text-xs':'xl:text-xl text-md'} `}>Titam</p>
              <p className="font-normal text-[10px]">Mar, 23 , 2023</p>
            </div>



          </div>
          <div
            style={{
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
              backdropFilter: "blur(28.5px)",
            }}
            className="flex  items-center gap-[15px] py-4 xl:pl-[21px] pl-1 w-1/3 rounded-xl"
          >
            <span
              style={{
                aspectRatio: 4 / 6,
              }}
              className="relative   h-full "
            >
              <Image src={redBadge.src} fill alt="badge" />
            </span>
            <div className="text-white  font-inter pt-2 h-full  ">
              <p className={`font-semibold ${menuIsOpen?'xl:text-xl text-xs':'xl:text-xl text-md'} `}>Titam</p>
              <p className="font-normal text-[10px]">Mar, 23 , 2023</p>
            </div>



          </div>
          <div
            style={{
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
              backdropFilter: "blur(28.5px)",
            }}
            className="flex  items-center gap-[15px] py-4 xl:pl-[21px] pl-1 w-1/3 rounded-xl"
          >
            <span
              style={{
                aspectRatio: 4 / 6,
              }}
              className="relative   h-full "
            >
              <Image src={blueBadge.src} fill alt="badge" />
            </span>
            <div className="text-white  font-inter pt-2 h-full  ">
              <p className={`font-semibold ${menuIsOpen?'xl:text-xl text-xs':'xl:text-xl text-md'} `}>Titam</p>
              <p className="font-normal text-[10px]">Mar, 23 , 2023</p>
            </div>



          </div>
          

        </div>




      

        
       
       
      </div>
    </div>
  );
};

export default BadgesEarned;
