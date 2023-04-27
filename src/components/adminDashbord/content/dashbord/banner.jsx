import { useAdminNav } from "@/store/adminNav";
import hero from "../../../../../public/hero.png";
import Image from "next/image";


const Banner = () => {

  const {menuIsOpen}=useAdminNav()
    return (<div
        className="w-full h-[248px] rounded-xl flex  relative overflow-hidden"
        style={{
          background:
            "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
          boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
          backdropFilter: "blur(28.5px)",
        }}
      >
        <p className={`absolute text-white opacity-[0.02] font-poppins font-black lg:text-[193px]  ${menuIsOpen?'text-[130px] leading-[145%]':'text-[170px] leading-[135%]'} lg:leading-[115%] xl:leading-[130%]  tracking-[62.15px]  z-50`}>
          TLOU
        </p>
        {/* <p className={`absolute text-white opacity-[0.02] font-poppins font-black lg:text-[193px]  ${menuIsOpen?'text-[130px] leading-[145%]':'text-[170px] leading-[135%]'} lg:leading-[115%] xl:leading-[130%]  tracking-[62.15px]  z-50`}>
          TLOU
        </p> */}
        <span
          style={{
            filter: "blur(50px)",
            background: "rgba(255, 181, 59, 0.3)",
          }}
          className="w-[225px] h-[100px]   absolute  rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2   z-10"
        ></span>

        <div className="m-[27px]">
          <h1 className="font-poppins font-medium lg:text-[33px] text-xl leading-[131%] tracking-[0.15px] text-white">
            Welcome to{" "}
          </h1>
          <h1 className="font-poppins font-medium lg:text-[33px] text-xl leading-[131%] tracking-[0.15px] text-white">
            TLOU ESPORTS
          </h1>
        </div>

        <div  className="h-full aspect-bannerPhoto-7/11 relative ml-auto ">

        
        <Image
          src={hero.src}
          //width={155}
          //height={248}
          sizes="(max-width:'155px')"
          fill
          alt="hero"
          className="ml-auto bg-transparent"
        />
        </div>
      </div>  );
}
 
export default Banner;