import navBarUserProfileIcon from "../../../../public/navBarUserProfileIcon.png";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="h-16 w-full rounded-[12px] relative  flex justify-between items-center pl-3.5 pr-[26px]">
    

      <div className="h-full w-fit flex items-center ml-auto gap-[26px]">
        {/*  <svg
          className="hover:cursor-pointer"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9425 16.3258L11.1908 13.6067L11.2233 13.5742C13.1083 11.4725 14.4517 9.05666 15.2425 6.49999H18.4167V4.33332H10.8333V2.16666H8.66668V4.33332H1.08334V6.48916H13.1842C12.4583 8.57999 11.31 10.5625 9.75001 12.2958C8.74251 11.18 7.90834 9.95582 7.24751 8.66666H5.08084C5.87168 10.4325 6.95501 12.1008 8.30918 13.6067L2.79501 19.045L4.33334 20.5833L9.75001 15.1667L13.1192 18.5358L13.9425 16.3258ZM20.0417 10.8333H17.875L13 23.8333H15.1667L16.38 20.5833H21.5258L22.75 23.8333H24.9167L20.0417 10.8333ZM17.2033 18.4167L18.9583 13.7258L20.7133 18.4167H17.2033Z"
            fill="#EAEAFF"
            fillOpacity="0.87"
          />
        </svg>

        <svg
          className="hover:cursor-pointer"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.13944 3.20722C7.90944 4.025 7.79445 4.88111 7.79445 5.75C7.79445 10.9633 12.0367 15.2056 17.25 15.2056C18.1189 15.2056 18.975 15.0906 19.7928 14.8606C18.4639 18.1317 15.2439 20.4444 11.5 20.4444C6.56778 20.4444 2.55556 16.4322 2.55556 11.5C2.55556 7.75611 4.86833 4.53611 8.13944 3.20722ZM11.5 0C5.14944 0 0 5.14944 0 11.5C0 17.8506 5.14944 23 11.5 23C17.8506 23 23 17.8506 23 11.5C23 10.9122 22.9489 10.3244 22.8722 9.76222C21.62 11.5128 19.5756 12.65 17.25 12.65C13.4422 12.65 10.35 9.55778 10.35 5.75C10.35 3.43722 11.4872 1.38 13.2378 0.127778C12.6756 0.051111 12.0878 0 11.5 0Z"
            fill="#EAEAFF"
            fillOpacity="0.87"
          />
        </svg>
 */}
        <svg
          className="hover:cursor-pointer"
          width="18"
          height="23"
          viewBox="0 0 18 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 22.4563C10.2375 22.4563 11.25 21.4491 11.25 20.2182H6.75C6.75 21.4491 7.7625 22.4563 9 22.4563ZM15.75 15.742V10.1467C15.75 6.71123 13.9162 3.83528 10.6875 3.07432V2.31337C10.6875 1.38456 9.93375 0.634796 9 0.634796C8.06625 0.634796 7.3125 1.38456 7.3125 2.31337V3.07432C4.095 3.83528 2.25 6.70004 2.25 10.1467V15.742L0 17.9801V19.0991H18V17.9801L15.75 15.742ZM13.5 16.861H4.5V10.1467C4.5 7.37147 6.19875 5.11099 9 5.11099C11.8013 5.11099 13.5 7.37147 13.5 10.1467V16.861Z"
            fill="#EAEAFF"
            fillOpacity="0.87"
          />
        </svg>
        <Image
          src={navBarUserProfileIcon}
          width={32}
          height={32}
          alt="userIcon"
          className="hover:cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Header;