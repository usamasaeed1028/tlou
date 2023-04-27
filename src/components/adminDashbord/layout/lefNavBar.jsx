import Image from "next/image";
import logo from "../../../../public/logo.png";
import line from "../../../../public/sidebarLine.png";
import { useAdminNav } from "@/store/adminNav";
import { useUserManagmentInternalState } from "@/store/userManagement";
const LeftNavBar = () => {
  const {  menuIsOpen, toggleMenu, currentItem, setCurrentItem } = useAdminNav();
  const { setUserManagmentCurrentItem, setIsEditing } =
    useUserManagmentInternalState();
  return (
    <div className=" w-full flex flex-col h-screen pt-10 pl-2">
      <div className="flex  justify-evenly items-center">
        {menuIsOpen && (
          <div className="mx-auto relative 2xl:[130px] lg:w-[125px] md:w-[100px] aspect-logo-14/5">
            <Image
              src={logo.src}
              //width={135}
              // height={48}
              alt="logo"
              fill
              sizes="(max-width: 125px)"
              className="bg-transparent "
            />
          </div>
        )}
    
        <svg
          onClick={() => {
            toggleMenu();
          }}
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          className={`hover:cursor-pointer ml-auto lg:mr-6 mr-4 transition-transform duration-150 ease-in-out ${
            menuIsOpen ? "" : "rotate-180 "
          }`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5451 1.04794C9.85881 0.367239 8.74614 0.367239 8.05987 1.04794L0.514782 8.53179C-0.171594 9.2126 -0.171594 10.3164 0.514782 10.9972L8.05987 18.4811C8.74614 19.1618 9.85881 19.1618 10.5451 18.4811C11.2313 17.8004 11.2313 16.6967 10.5451 16.016L5.48521 10.9972C4.79883 10.3164 4.79883 9.2126 5.48521 8.53179L10.5451 3.51298C11.2313 2.83228 11.2313 1.72864 10.5451 1.04794Z"
            fill="#FFB53B"
          />
          <path
            d="M16.8477 1.04794L9.30262 8.53179C8.61625 9.2126 8.61625 10.3164 9.30262 10.9972L16.8477 18.4811C17.534 19.1618 18.6466 19.1618 19.3329 18.4811C20.0192 17.8004 20.0192 16.6967 19.3329 16.016L14.273 10.9972C13.5867 10.3164 13.5867 9.2126 14.273 8.53179L19.3329 3.51298C20.0192 2.83228 20.0192 1.72864 19.3329 1.04794C18.6466 0.367239 17.534 0.367239 16.8477 1.04794Z"
            fill="#FFB53B"
            fillOpacity="0.5"
          />
        </svg>
      </div>
      {menuIsOpen && (
          <div className="mt-[40px]">
            <Image src={line} alt="img" />
          </div>
        )}

      {menuIsOpen && (
        <div className="mt-[52px] w-full  flex flex-col gap-y-[20px]">
          <div
            onClick={() => {
              setCurrentItem("Dashboard");
            }}
            className={`transition-colors duration-250 ease-in-out w-full  relative hover:cursor-pointer h-[54px]  bg-opacity-20  pl-[10%] md:pl-3  ${
              currentItem == "Dashboard"
                ? "text-[#FFB53B] bg-[#B98532] "
                : "text-white"
            } `}
          >
            {currentItem == "Dashboard" && (
              <svg
                width="8"
                height="54"
                className="absolute -left-1"
                viewBox="0 0 8 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4V50"
                  stroke="#FFB53B"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            )}

            <div className="w-full h-full flex items-center xl:gap-2 gap-1 pl-[10px] ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className=""
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69V5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
                  fill={currentItem == "Dashboard" ? "#FFB53B" : "white"}
                />
              </svg>
              <p className=" font-inter leading-[150%] tracking-[0.15px] xl:text-lg lg:text-base text-xs">
                Dashboard
              </p>
            </div>
          </div>

          <div
            onClick={() => {
              setCurrentItem("User Management");
              setUserManagmentCurrentItem("index");
              setIsEditing(false);
            }}
            className={`transition-colors duration-250 ease-in-out w-full  relative hover:cursor-pointer h-[54px]  bg-opacity-20   pl-[10%] md:pl-3 ${
              currentItem == "User Management"
                ? "text-[#FFB53B] bg-[#B98532] "
                : "text-white"
            } `}
          >
            {currentItem == "User Management" && (
              <svg
                width="8"
                height="54"
                className="absolute -left-1"
                viewBox="0 0 8 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4V50"
                  stroke="#FFB53B"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            )}

            <div className="w-full h-full flex items-center xl:gap-2 gap-1 pl-[10px] ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className=""
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.55032 8.50166C4.01034 8.50166 3.48249 8.34284 3.03351 8.04528C2.58453 7.74771 2.2346 7.32478 2.02795 6.82995C1.82131 6.33512 1.76725 5.79062 1.87259 5.26532C1.97794 4.74001 2.23796 4.25748 2.61979 3.87876C3.00161 3.50003 3.48808 3.24211 4.01769 3.13762C4.54729 3.03313 5.09624 3.08676 5.59512 3.29173C6.094 3.49669 6.5204 3.84379 6.82039 4.28912C7.12039 4.73446 7.28051 5.25803 7.28051 5.79363C7.27891 6.51135 6.99075 7.19923 6.47909 7.70674C5.96743 8.21425 5.27392 8.50007 4.55032 8.50166ZM4.55032 4.28916C4.25033 4.28916 3.95708 4.3774 3.70765 4.54271C3.45822 4.70802 3.26381 4.94299 3.14901 5.21789C3.03421 5.4928 3.00417 5.7953 3.06269 6.08713C3.12122 6.37897 3.26568 6.64704 3.4778 6.85744C3.68993 7.06785 3.96019 7.21113 4.25441 7.26918C4.54864 7.32723 4.85361 7.29744 5.13077 7.18357C5.40792 7.0697 5.64481 6.87687 5.81147 6.62946C5.97814 6.38206 6.0671 6.09118 6.0671 5.79363C6.0671 5.59606 6.02786 5.40042 5.95164 5.21789C5.87541 5.03536 5.76369 4.86951 5.62284 4.72981C5.482 4.59011 5.31479 4.47929 5.13077 4.40368C4.94674 4.32808 4.74951 4.28916 4.55032 4.28916ZM11.2241 6.69631C10.5641 6.69631 9.91899 6.50219 9.37024 6.1385C8.82149 5.77481 8.39379 5.25789 8.14123 4.6531C7.88867 4.04831 7.82259 3.38281 7.95134 2.74077C8.0801 2.09873 8.39791 1.50897 8.86458 1.04609C9.33125 0.583199 9.92583 0.267969 10.5731 0.140259C11.2204 0.0125487 11.8914 0.0780943 12.5011 0.328607C13.1108 0.579119 13.632 1.00335 13.9987 1.54764C14.3653 2.09194 14.561 2.73186 14.561 3.38648C14.5594 4.26381 14.2073 5.10476 13.5819 5.72512C12.9565 6.34549 12.1086 6.69472 11.2241 6.69631ZM11.2241 1.28023C10.8041 1.28023 10.3936 1.40376 10.0444 1.6352C9.69518 1.86664 9.423 2.19559 9.26228 2.58046C9.10156 2.96532 9.05951 3.38882 9.14144 3.79739C9.22338 4.20597 9.42562 4.58126 9.7226 4.87583C10.0196 5.17039 10.3979 5.37099 10.8099 5.45226C11.2218 5.53353 11.6487 5.49182 12.0367 5.33241C12.4248 5.17299 12.7564 4.90303 12.9897 4.55665C13.2231 4.21028 13.3476 3.80306 13.3476 3.38648C13.3476 2.82787 13.1239 2.29214 12.7257 1.89714C12.3274 1.50214 11.7873 1.28023 11.2241 1.28023ZM16.3812 16.3249H6.0671C5.90619 16.3249 5.75187 16.2615 5.63809 16.1486C5.52431 16.0358 5.46039 15.8827 5.46039 15.7231C5.46039 15.5635 5.52431 15.4104 5.63809 15.2976C5.75187 15.1847 5.90619 15.1213 6.0671 15.1213H15.7744V11.7633C15.7728 10.886 15.4208 10.0451 14.7953 9.4247C14.1699 8.80433 13.3221 8.45511 12.4375 8.45352H10.0107C9.36833 8.45621 8.74039 8.64275 8.20229 8.99075C7.66418 9.33875 7.23878 9.83341 6.97716 10.4153C6.94786 10.4922 6.903 10.5623 6.84536 10.6212C6.78772 10.6802 6.71851 10.7269 6.642 10.7584C6.56549 10.7898 6.48329 10.8054 6.40047 10.8041C6.31766 10.8029 6.23598 10.7848 6.16047 10.7511C6.08495 10.7174 6.0172 10.6686 5.9614 10.6079C5.90559 10.5472 5.8629 10.4758 5.83596 10.3981C5.80903 10.3205 5.79841 10.2381 5.80477 10.1562C5.81113 10.0743 5.83434 9.99456 5.87295 9.92188C6.22986 9.126 6.81191 8.44993 7.54852 7.97566C8.28513 7.50139 9.14465 7.2493 10.0228 7.24995H12.4497C13.6565 7.24995 14.8139 7.72547 15.6672 8.57189C16.5206 9.41832 17 10.5663 17 11.7633V15.7231C17 15.8031 16.9839 15.8824 16.9527 15.9562C16.9214 16.03 16.8757 16.0969 16.818 16.1529C16.7604 16.209 16.6921 16.253 16.6171 16.2826C16.542 16.3121 16.4618 16.3265 16.3812 16.3249Z"
                  fill={currentItem == "User Management" ? "#FFB53B" : "white"}
                />
                <path
                  d="M8.49393 16.3249H0.606709C0.4458 16.3249 0.291481 16.2615 0.177701 16.1487C0.063921 16.0358 0 15.8828 0 15.7232V13.6169C0 12.4199 0.479407 11.2719 1.33276 10.4255C2.18611 9.57903 3.3435 9.10352 4.55032 9.10352C5.75714 9.10352 6.91453 9.57903 7.76788 10.4255C8.62123 11.2719 9.10064 12.4199 9.10064 13.6169V15.7232C9.10064 15.8828 9.03672 16.0358 8.92294 16.1487C8.80916 16.2615 8.65484 16.3249 8.49393 16.3249ZM1.21342 15.1214H7.88722V13.6169C7.88722 12.7391 7.53566 11.8972 6.90987 11.2765C6.28408 10.6558 5.43532 10.3071 4.55032 10.3071C3.66532 10.3071 2.81656 10.6558 2.19077 11.2765C1.56498 11.8972 1.21342 12.7391 1.21342 13.6169V15.1214Z"
                  fill={currentItem == "User Management" ? "#FFB53B" : "white"}
                />
                <path
                  d="M3.03353 14.5195C2.87262 14.5195 2.7183 14.4561 2.60452 14.3432C2.49074 14.2304 2.42682 14.0773 2.42682 13.9177V12.7141C2.42682 12.5545 2.49074 12.4015 2.60452 12.2886C2.7183 12.1758 2.87262 12.1124 3.03353 12.1124C3.19444 12.1124 3.34876 12.1758 3.46254 12.2886C3.57632 12.4015 3.64024 12.5545 3.64024 12.7141V13.9177C3.64024 14.0773 3.57632 14.2304 3.46254 14.3432C3.34876 14.4561 3.19444 14.5195 3.03353 14.5195ZM13.9543 14.4292C13.7934 14.4292 13.6391 14.3658 13.5253 14.253C13.4115 14.1401 13.3476 13.9871 13.3476 13.8275V12.6239C13.3476 12.4643 13.4115 12.3112 13.5253 12.1984C13.6391 12.0855 13.7934 12.0221 13.9543 12.0221C14.1152 12.0221 14.2695 12.0855 14.3833 12.1984C14.4971 12.3112 14.561 12.4643 14.561 12.6239V13.8275C14.561 13.9871 14.4971 14.1401 14.3833 14.253C14.2695 14.3658 14.1152 14.4292 13.9543 14.4292Z"
                  fill={currentItem == "User Management" ? "#FFB53B" : "white"}
                />
              </svg>

              <p className=" font-inter leading-[150%] tracking-[0.15px] xl:text-lg lg:text-base text-xs ">
                User Management
              </p>
            </div>
          </div>

          <div
            onClick={() => {
              setCurrentItem("Admin Management");
            }}
            className={`transition-colors duration-250 ease-in-out w-full  relative hover:cursor-pointer h-[54px]  bg-opacity-20  pl-[10%] md:pl-3 ${
              currentItem == "Admin Management"
                ? "text-[#FFB53B] bg-[#B98532] "
                : "text-white"
            } `}
          >
            {currentItem == "Admin Management" && (
              <svg
                width="8"
                height="54"
                className="absolute -left-1"
                viewBox="0 0 8 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4V50"
                  stroke="#FFB53B"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            )}

            <div className="w-full h-full flex items-center xl:gap-2 gap-1 pl-[10px] ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className=""
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z"
                  fill={currentItem == "Admin Management" ? "#FFB53B" : "white"}
                />
              </svg>

              <p className=" font-inter leading-[150%] tracking-[0.15px] xl:text-[16px] lg:text-sm text-xs">
                Admin Management
              </p>
            </div>
          </div>

          <div
            onClick={() => {
              setCurrentItem("Bans Management");
            }}
            className={`transition-colors duration-250 ease-in-out w-full  relative hover:cursor-pointer h-[54px]  bg-opacity-20  pl-[10%] md:pl-3 ${
              currentItem == "Bans Management"
                ? "text-[#FFB53B] bg-[#B98532] "
                : "text-white"
            } `}
          >
            {currentItem == "Bans Management" && (
              <svg
                width="8"
                height="54"
                className="absolute -left-1"
                viewBox="0 0 8 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4V50"
                  stroke="#FFB53B"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            )}

            <div className="w-full h-full flex items-center xl:gap-2 gap-1 pl-[10px] ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className=""
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 0.104492C7.62108 0.104492 5.78435 0.657136 4.22209 1.69254C2.65982 2.72794 1.44218 4.1996 0.723149 5.92141C0.0041162 7.64322 -0.184015 9.53785 0.182544 11.3657C0.549104 13.1936 1.45389 14.8726 2.78249 16.1904C4.11109 17.5082 5.80383 18.4057 7.64665 18.7692C9.48946 19.1328 11.3996 18.9462 13.1355 18.233C14.8714 17.5198 16.3551 16.3121 17.399 14.7625C18.4428 13.2129 19 11.3911 19 9.5274C19 8.28996 18.7543 7.06465 18.2769 5.92141C17.7994 4.77817 17.0997 3.73939 16.2175 2.8644C15.3354 1.9894 14.2881 1.29531 13.1355 0.821768C11.9829 0.348223 10.7476 0.104492 9.5 0.104492ZM9.5 17.0657C7.48436 17.0657 5.55127 16.2715 4.12599 14.8578C2.70072 13.4441 1.9 11.5267 1.9 9.5274C1.89791 7.85327 2.46337 6.22707 3.5055 4.91017L14.155 15.4732C12.8273 16.5069 11.1878 17.0678 9.5 17.0657ZM15.4945 14.1446L4.845 3.58154C6.17267 2.54787 7.81218 1.98699 9.5 1.98907C11.5156 1.98907 13.4487 2.78329 14.874 4.197C16.2993 5.61071 17.1 7.52811 17.1 9.5274C17.1021 11.2015 16.5366 12.8277 15.4945 14.1446Z"
                  fill={currentItem == "Bans Management" ? "#FFB53B" : "white"}
                />
              </svg>

              <p className=" font-inter leading-[150%] tracking-[0.15px] xl:text-[17px] lg:text-sm text-xs">
                Bans Management
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftNavBar;
