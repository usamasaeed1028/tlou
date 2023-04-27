import { useAdminNav } from "@/store/adminNav";
import Header from "../adminDashbord/layout/header";
import LeftNavBar from "../adminDashbord/layout/lefNavBar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Layout2 = ({ children }) => {
  const { menuIsOpen } = useAdminNav();
  const [width, setWidth] = useState(1024);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (width < 1024) {
    return (
      <div className="w-full h-screen items-center justify-center flex bg-black">
        <p className="text-white  text-4xl">
          {" "}
          Please swich to a desktop to open this page{" "}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-black relative">
      {/*     <div className="fixed top-20 right-20 text-2xl text-white opacity-50 z-50">{width}</div>
       */}{" "}
      <motion.div className="w-full transition-all duration-150 ease-linear  bg-black flex xl:gap-6 gap-5  xl:pr-[3.5vw] pr-2 2xl:pr-[52px]  max- w-[1 440px] ">
        <div
          // layout transition={spring}
          style={{
            background:
              "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
            boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
            backdropFilter: "blur(28.5px)",
          }}
          className={` max-w-[262px]  rounded-[12px]  h-[100vh] sticky top-0 my -[20px] ${
            menuIsOpen ? " lg:w-[23vw]  " : "w-fit   rounded-l-none "
          }`}
        >
          <LeftNavBar />
        </div>

        <motion.div className="flex-grow flex flex-col gap-9 min-h-screen py-[34px]">
          <div
            style={{
              background:
                "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
              backdropFilter: "backdrop-filter: blur(28.5px)",
            }}
            className="h-[62px]  w-full rounded-[12px] flex justify-between items-center pl-3.5 pr-[26px]"
          >
            <Header />
          </div>

          <motion.div className="flex-grow rounded-xl   flex transition-all duration-150 ease-linear">
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Layout2;
