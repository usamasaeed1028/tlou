const SearchBar = ({ globalFilter, setGlobalFilter }) => {
  return (
    <div className="h-10 w-[375px]  ">
      <form className="w-full h-full bg-[#0D0D0D] relative rounded-[8px]">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium  sr-only "
        >
          Search
        </label>

        <div className="absolute inset-y-0  left-0 flex items-center pl-3 pointer-events-none">
          <svg
            width="17"
            height="18"
            className=""
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1498 11.2155H11.3819L11.1098 10.9552C12.0623 9.85615 12.6358 8.42929 12.6358 6.8771C12.6358 3.41599 9.80732 0.610474 6.3179 0.610474C2.82847 0.610474 0 3.41599 0 6.8771C0 10.3382 2.82847 13.1437 6.3179 13.1437C7.88279 13.1437 9.32133 12.5749 10.4294 11.6301L10.6918 11.9V12.6617L15.5517 17.4725L17 16.036L12.1498 11.2155ZM6.3179 11.2155C3.89766 11.2155 1.94397 9.2777 1.94397 6.8771C1.94397 4.4765 3.89766 2.53867 6.3179 2.53867C8.73814 2.53867 10.6918 4.4765 10.6918 6.8771C10.6918 9.2777 8.73814 11.2155 6.3179 11.2155Z"
              fill="#EAEAFF"
              fillOpacity="0.5"
            />
          </svg>
        </div>

        <input
          value={globalFilter || ""}
          onChange={(e) => {
            setGlobalFilter(e.target.value);
          }}
          id="default-search"
          className="block w-full h-full pl-[45px] text-sm bg-transparent text-[#CFCFE2]   rounded-lg placeholder:text-[#CFCFE2] placeholder:font-roboto placeholder:font-normal placeholder:text-xs "
          placeholder="Search"
        />

        <div className="absolute inset-y-0 right-3.5 flex items-center pl-3 hover:cursor-pointer">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.833333 4.70812H0.951667C1.13356 5.40689 1.54838 6.02649 2.1306 6.46903C2.71281 6.91156 3.42923 7.15181 4.16667 7.15181C4.9041 7.15181 5.62052 6.91156 6.20274 6.46903C6.78495 6.02649 7.19977 5.40689 7.38167 4.70812H24.1667C24.3877 4.70812 24.5996 4.62227 24.7559 4.46946C24.9122 4.31666 25 4.1094 25 3.8933C25 3.6772 24.9122 3.46995 24.7559 3.31714C24.5996 3.16433 24.3877 3.07849 24.1667 3.07849H7.38167C7.19977 2.37971 6.78495 1.76011 6.20274 1.31758C5.62052 0.875041 4.9041 0.634796 4.16667 0.634796C3.42923 0.634796 2.71281 0.875041 2.1306 1.31758C1.54838 1.76011 1.13356 2.37971 0.951667 3.07849H0.833333C0.61232 3.07849 0.400358 3.16433 0.244078 3.31714C0.0877973 3.46995 0 3.6772 0 3.8933C0 4.1094 0.0877973 4.31666 0.244078 4.46946C0.400358 4.62227 0.61232 4.70812 0.833333 4.70812ZM4.16667 2.26367C4.4963 2.26367 4.81853 2.35924 5.09262 2.53831C5.3667 2.71738 5.58032 2.97189 5.70647 3.26967C5.83261 3.56744 5.86562 3.89511 5.80131 4.21123C5.737 4.52735 5.57827 4.81772 5.34518 5.04563C5.11209 5.27354 4.81512 5.42874 4.49182 5.49162C4.16852 5.5545 3.8334 5.52223 3.52886 5.39889C3.22432 5.27554 2.96402 5.06667 2.78088 4.79868C2.59775 4.53069 2.5 4.21561 2.5 3.8933C2.5 3.4611 2.67559 3.04659 2.98816 2.74098C3.30072 2.43536 3.72464 2.26367 4.16667 2.26367ZM24.1667 11.2267H24.0483C23.8664 10.5279 23.4516 9.90828 22.8694 9.46575C22.2872 9.02321 21.5708 8.78297 20.8333 8.78297C20.0959 8.78297 19.3795 9.02321 18.7973 9.46575C18.215 9.90828 17.8002 10.5279 17.6183 11.2267H0.833333C0.61232 11.2267 0.400358 11.3125 0.244078 11.4653C0.0877973 11.6181 0 11.8254 0 12.0415C0 12.2576 0.0877973 12.4648 0.244078 12.6176C0.400358 12.7704 0.61232 12.8563 0.833333 12.8563H17.6183C17.8002 13.5551 18.215 14.1747 18.7973 14.6172C19.3795 15.0597 20.0959 15.3 20.8333 15.3C21.5708 15.3 22.2872 15.0597 22.8694 14.6172C23.4516 14.1747 23.8664 13.5551 24.0483 12.8563H24.1667C24.3877 12.8563 24.5996 12.7704 24.7559 12.6176C24.9122 12.4648 25 12.2576 25 12.0415C25 11.8254 24.9122 11.6181 24.7559 11.4653C24.5996 11.3125 24.3877 11.2267 24.1667 11.2267ZM20.8333 13.6711C20.5037 13.6711 20.1815 13.5755 19.9074 13.3965C19.6333 13.2174 19.4197 12.9629 19.2935 12.6651C19.1674 12.3673 19.1344 12.0397 19.1987 11.7235C19.263 11.4074 19.4217 11.1171 19.6548 10.8891C19.8879 10.6612 20.1849 10.506 20.5082 10.4432C20.8315 10.3803 21.1666 10.4125 21.4711 10.5359C21.7757 10.6592 22.036 10.8681 22.2191 11.1361C22.4023 11.4041 22.5 11.7192 22.5 12.0415C22.5 12.4737 22.3244 12.8882 22.0118 13.1938C21.6993 13.4994 21.2754 13.6711 20.8333 13.6711ZM24.1667 19.3748H15.715C15.5331 18.6761 15.1183 18.0565 14.5361 17.6139C13.9539 17.1714 13.2374 16.9311 12.5 16.9311C11.7626 16.9311 11.0461 17.1714 10.4639 17.6139C9.88171 18.0565 9.46689 18.6761 9.285 19.3748H0.833333C0.61232 19.3748 0.400358 19.4607 0.244078 19.6135C0.0877973 19.7663 0 19.9735 0 20.1896C0 20.4057 0.0877973 20.613 0.244078 20.7658C0.400358 20.9186 0.61232 21.0045 0.833333 21.0045H9.285C9.46689 21.7032 9.88171 22.3228 10.4639 22.7654C11.0461 23.2079 11.7626 23.4481 12.5 23.4481C13.2374 23.4481 13.9539 23.2079 14.5361 22.7654C15.1183 22.3228 15.5331 21.7032 15.715 21.0045H24.1667C24.3877 21.0045 24.5996 20.9186 24.7559 20.7658C24.9122 20.613 25 20.4057 25 20.1896C25 19.9735 24.9122 19.7663 24.7559 19.6135C24.5996 19.4607 24.3877 19.3748 24.1667 19.3748ZM12.5 21.8193C12.1704 21.8193 11.8481 21.7237 11.574 21.5446C11.3 21.3656 11.0863 21.1111 10.9602 20.8133C10.8341 20.5155 10.801 20.1878 10.8654 19.8717C10.9297 19.5556 11.0884 19.2652 11.3215 19.0373C11.5546 18.8094 11.8515 18.6542 12.1748 18.5913C12.4982 18.5284 12.8333 18.5607 13.1378 18.6841C13.4423 18.8074 13.7026 19.0163 13.8858 19.2843C14.0689 19.5523 14.1667 19.8673 14.1667 20.1896C14.1667 20.6218 13.9911 21.0364 13.6785 21.342C13.366 21.6476 12.942 21.8193 12.5 21.8193Z"
              fill="#CECEE0"
            />
          </svg>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;