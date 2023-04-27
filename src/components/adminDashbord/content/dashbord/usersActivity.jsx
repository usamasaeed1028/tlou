import Image from 'next/image';
import user from '../../../../../public/user.png'


const UsersActivity = () => {
    return (   <div
        className="  ml-auto z-20 relative w-full h-full rounded-xl pt-[34px]  xl:px-6 lg:px-2 px-1 flex-flex-col gap-[30px]"
        style={{
          background:
            "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
          boxShadow:
            "box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
          backdropFilter: "blur(28.5px)",
        }}
      >
        <h1 className="text-white font-inter font-bold text-xl">
          Active Users
        </h1>
        <div
          className="mt-[30px]  mx-auto pt-[15px] flex flex-col relative z-50 w-full max-w-[289px] h-[137px] rounded-xl  "
          style={{
            background:
              "linear-gradient(180deg, rgba(124, 124, 124, 0.13) 1.46%, rgba(164, 164, 164, 0.0962) 100%)",
            boxShadow:
              "box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
            backdropFilter: "backdrop-filter: blur(28.5px)",
          }}
         
        >
          <div className="xl:px-12  flex xl:justify-between justify-evenly ">
            <div className="flex justify-center items-center w-[50px] aspect-square bg-[#72E128] bg-opacity-[13%] rounded-[14px]">
              {" "}
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.75 6.00354L19.04 8.27496L14.16 13.1154L10.16 9.14781L2.75 16.5076L4.16 17.9062L10.16 11.9548L14.16 15.9224L20.46 9.68343L22.75 11.9548V6.00354H16.75Z"
                  fill="#72E128"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center w-[50px] aspect-square bg-[#D41212] bg-opacity-[13%] rounded-[14px]">
              <svg
                width="25"
                height="24"
                viewBox="0 0 21 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.25 11.9063L16.54 9.63486L11.66 4.79447L7.66 8.762L0.25 1.40222L1.66 0.00366211L7.66 5.95497L11.66 1.98743L17.96 8.22639L20.25 5.95497V11.9063H14.25Z"
                  fill="#D41212"
                />
              </svg>
            </div>
          </div>

        
          <div className="w-full flex flex-col h-full  mt-auto   relative  mx-auto   ">
          <div  className="w-[85%] h-[5px] absolute top-[100%] right-1/2  left-1/2 -translate-x-[50%] mx-auto  rounded-b-xl -z-50" style={{background:'linear-gradient(180deg, rgba(124, 124, 124, 0.05) 1.46%, rgba(164, 164, 164, 0.037) 100%)', boxShadow:'box-shadow: inset 0px 0px 1px rgba(255, 255, 255, 0.31)',backdropFilter:'blur(28.5px)'}}></div>
          
          <div className="w-full h-full flex  justify-evenly   mx-auto pt-2 xl:px-8 px-1">
              <div className="text-center ">
                  <h3 className="xl:text-[14px] lgtext-xs text-[8px]   text-[#e7e3fc] font-inter font-normal opacity-[68%]">Online Users</h3>
                  <p className="font-roboto font-semibold text-[#eaeaff] leading-[150%] tracking-[0.15px] text-[16px] opacity-[87%]">70%</p>
              </div>

              <div className="text-center ">
                  <h3 className="xl:text-[14px] lgtext-xs text-[8px]  text-[#e7e3fc] font-inter font-normal opacity-[68%]">Offline Users</h3>
                  <p className="font-roboto font-semibold text-[#eaeaff] leading-[150%] tracking-[0.15px] text-[16px] opacity-[87%]">30%</p>
              </div>
          </div>
          </div>




        </div>





              <div className="mt-9 w-full   mx-auto">
                 <div className="flex gap-4 items-center">
                  <span className="lg:w-[14px] aspect-square w-3  rounded-full bg-[#72E128]"></span>
                  <h2 className=" text-white opacity-50 font-inter font-medium xl:text-[18px] lg:text-sm text-xs leading-[150%] tracking-[0.15px]">Active Users - 41</h2>
                 </div>
                 <div className="mt-7 gap-5 flex flex-col">
                      <User/>
                      <User/>
                      <User/>

                      <p className="mt-[10px] underline font-inter text-[19px] font-medium leading-[150%] tracking-[0.15px] text-[#FFB53B] hover:cursor-pointer">View All</p>
                 </div>
              </div>



              <div className="mt-9 w-full   mx-auto">
                 <div className="flex gap-4 items-center">
                  <span className="lg:w-[14px] aspect-square w-3 rounded-full bg-[#D41212]"></span>
                  <h2 className=" text-white opacity-50 font-inter font-medium xl:text-[18px] lg:text-sm text-xs leading-[150%] tracking-[0.15px]">Offline Users - 02</h2>
                 </div>
                 <div className="mt-7 gap-5 flex flex-col">
                      <User/>
                      <User/>

                      <p className="mt-[10px] underline  font-inter text-[19px] font-medium leading-[150%] tracking-[0.15px] text-[#FFB53B] hover:cursor-pointer">View All</p>
                 </div>
              </div>
      </div>);
}
 
const User=()=>{

    return (
        <div className="flex xl:gap-[25px] lg:gap-3 gap-3 hover:cursor-pointer">
              <div className='xl:w-[58px]  xl:h-[58px] lg:w-[40px] lg:h-[40px]   w-8 h-8  relative  '>

            <Image src={user.src} fill sizes='maxWidth(58px)' alt='usericon' className="rounded-full" /> 
              </div>
            <div className="text-white flex flex-col  justify-evenly">
                    <p className="font-inter font-medium  xl:text-base text-sm  leading-[150%] tracking-[0.15px]">John Wick</p>
                    <p className="font-inter font-normal opacity-50 xl:text-[13px] text-[11px]  leading-[150%] tracking-[0.15px]">@johnwick3321</p>
                    
            </div>
        </div>
    )
}
export default UsersActivity;