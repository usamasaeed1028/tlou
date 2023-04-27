import { UsersActivityOnPageChart } from "./usersActivityOnPageChart";

const UserActivityOnPage = () => {
  return (
    <div className=" w-full lg:pt-4 aspect-video flex flex-col gap-4 lg:p-6">
      <div className="flex">
        <p className="text-lg font-inter text-[#EAEAFF] opacity-[87%]">
          Users Active on a Page
        </p>
        <svg
          className="ml-auto w-6 xl:w-8 2xl:w-10 aspect-square hover:cursor-pointer "
          viewBox="0 0 28 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 8.33333C15.2833 8.33333 16.3333 7.39583 16.3333 6.25C16.3333 5.10416 15.2833 4.16666 14 4.16666C12.7167 4.16666 11.6667 5.10416 11.6667 6.25C11.6667 7.39583 12.7167 8.33333 14 8.33333ZM14 10.4167C12.7167 10.4167 11.6667 11.3542 11.6667 12.5C11.6667 13.6458 12.7167 14.5833 14 14.5833C15.2833 14.5833 16.3333 13.6458 16.3333 12.5C16.3333 11.3542 15.2833 10.4167 14 10.4167ZM14 16.6667C12.7167 16.6667 11.6667 17.6042 11.6667 18.75C11.6667 19.8958 12.7167 20.8333 14 20.8333C15.2833 20.8333 16.3333 19.8958 16.3333 18.75C16.3333 17.6042 15.2833 16.6667 14 16.6667Z"
            fill="#EAEAFF"
            fillOpacity="0.54"
          />
        </svg>
      </div>
      <div className="w-[85%] xl:w -[100%]    ">
        <UsersActivityOnPageChart />
      </div>
    </div>
  );
};

export default UserActivityOnPage;
