import { useAdminNav } from "@/store/adminNav";
import Header from "./header";
import LeftNavBar from "./lefNavBar";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const { menuIsOpen } = useAdminNav();

  return (
    <motion.div className="w-full transition-all duration-150 ease-linear min-h-screen bg-black flex xl:gap-6 gap-5 pt-[34px] xl:pr-[3.5vw] pr-2 2xl:pr-[52px] pb-[30px] ">
      <div
        // layout transition={spring}
        style={{
          background:
            "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
          boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
          backdropFilter: "blur(28.5px)",
        }}
        className={` max-w-[282px]  rounded-[12px]   ${
          menuIsOpen ? " lg:w-[23vw]" : "w-fit rounded-l-none   "
        }`}
      >
        <LeftNavBar />
      </div>

      <motion.div className="flex-grow flex flex-col gap-9  ">
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

        <motion.div className="flex-grow  flex transition-all duration-150 ease-linear">
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Layout;
