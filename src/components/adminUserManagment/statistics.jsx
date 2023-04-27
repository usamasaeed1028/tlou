import { useUserManagmentInternalState } from "@/store/userManagement";
import { useState } from "react";

const Statistics = () => {
  const { setSelectedUser, selectedUser, setIsEditing, isEditing } =
    useUserManagmentInternalState();
  console.log(selectedUser);
  const handleGamesChange = (event) => {
    const { name, value } = event.target;
    const newGames = selectedUser.games;
    newGames[name] = value;
    setSelectedUser({ ...selectedUser, newGames });
    /* setSelectedUser(prevState => {
      
      return {...prevState, oldSocials};
    }) */
  };

  return (
    <div className="w-full flex  overflow-hidden relative gap-2 xl:gap-6   pt-6">
      <ITem type="total" />
      <ITem type="wins" />
      <ITem type="losses" />
    </div>
  );
};

const ITem = ({ type, number }) => {
  const icons =
    type == "total" ? (
      <svg
        //  width="43"
        // height="31"
        className="xl:w-12 xl:h-8 w-8 h-6"
        viewBox="0 0 43 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0673 0.1875C9.94345 0.1875 8.14423 1.15984 6.91923 2.54103C5.6927 3.92222 4.94545 5.66631 4.46617 7.46094L0.270542 23.144C-0.600739 26.3994 1.34548 29.7804 4.59785 30.6532C6.28989 31.108 7.8977 30.5246 8.98795 29.6886C10.0782 28.851 10.8806 27.8327 11.7074 27.0058L17.0423 21.6618H25.9573L31.2937 27.0058C32.119 27.8327 32.9168 28.851 34.0086 29.6886C35.0988 30.5246 36.7066 31.108 38.3987 30.6532C39.9653 30.2263 41.2997 29.1974 42.1108 27.7907C42.922 26.3841 43.1442 24.7138 42.729 23.144L38.5334 7.46094C38.0541 5.66631 37.3038 3.92375 36.0788 2.54103C34.8523 1.15984 33.0531 0.1875 30.9277 0.1875H12.0673ZM14.551 6.36303C15.4039 6.37834 16.0822 7.07353 16.0669 7.91878V9.42859H17.5767C17.7808 9.4251 17.9835 9.46257 18.1729 9.53878C18.3622 9.615 18.5344 9.72841 18.6792 9.87232C18.8239 10.0162 18.9384 10.1877 19.0157 10.3766C19.093 10.5655 19.1317 10.768 19.1294 10.9721C19.1141 11.825 18.422 12.4987 17.5767 12.488H16.0669V13.9978C16.0975 16.0696 12.9753 16.0696 13.0044 13.9978V12.488H11.4946C9.42435 12.5187 9.42435 9.3995 11.4946 9.42859H13.0044V7.91878C13.0011 7.71435 13.0388 7.51133 13.1153 7.32169C13.1917 7.13206 13.3054 6.95966 13.4495 6.81466C13.5937 6.66965 13.7654 6.55499 13.9546 6.47742C14.1437 6.39985 14.3465 6.36096 14.551 6.36303ZM28.3629 6.36303C30.8818 6.36303 32.9566 8.43787 32.9566 10.9568C32.9566 13.4757 30.8818 15.5505 28.3629 15.5505C25.844 15.5505 23.7691 13.4757 23.7691 10.9568C23.7691 8.43787 25.844 6.36303 28.3629 6.36303Z"
          fill="#7289DA"
        />
      </svg>
    ) : type == "wins" ? (
      <svg
        //  width="26"
        // height="41"
        className="xl:w-12 xl:h-8 w-8 h-6"
        viewBox="0 0 26 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.79884 0V38.4375H0V41H18.1973V38.4375H10.3985V17.9375H24.6963C24.9176 17.9373 25.1352 17.8814 25.3284 17.7751C25.5217 17.6687 25.6842 17.5156 25.8006 17.33C25.9169 17.1445 25.9833 16.9327 25.9934 16.7148C26.0035 16.4969 25.9571 16.2801 25.8584 16.0848L23.5525 11.5312L25.861 6.98281C25.961 6.78719 26.0084 6.56955 25.9988 6.3507C25.9891 6.13185 25.9227 5.91908 25.8059 5.73273C25.6891 5.54638 25.5258 5.39267 25.3315 5.28627C25.1372 5.17987 24.9186 5.12435 24.6963 5.125H10.3985V0H7.79884Z"
          fill="#2CB916"
        />
      </svg>
    ) : (
      <svg
        // width="42"
        // height="36"

        className="xl:w-12 xl:h-8 w-8 h-6"
        viewBox="0 0 42 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6769 25.3685C14.2979 25.3685 13.9125 25.2208 13.6234 24.9317C13.0388 24.3471 13.0388 23.4092 13.6234 22.8246L25.3728 11.0752C25.9574 10.4906 26.8953 10.4906 27.4799 11.0752C28.0645 11.6597 28.0645 12.5976 27.4799 13.1822L15.7304 24.9317C15.4414 25.2208 15.0623 25.3685 14.6769 25.3685Z"
          fill="#D41212"
        />
        <path
          d="M26.4328 25.3681C26.0538 25.3681 25.6683 25.2204 25.3793 24.9313L13.6234 13.1754C13.0388 12.5908 13.0388 11.6529 13.6234 11.0683C14.208 10.4837 15.1459 10.4837 15.7304 11.0683L27.4799 22.8178C28.0645 23.4024 28.0645 24.3403 27.4799 24.9248C27.1908 25.2204 26.8118 25.3681 26.4328 25.3681Z"
          fill="#D41212"
        />
        <path
          d="M30.0883 36H11.0219C10.4888 36 10.0005 35.7173 9.73073 35.2548L0.197537 18.7452C-0.0658458 18.2827 -0.0658458 17.7173 0.197537 17.2548L9.73073 0.745188C9.86108 0.518106 10.0492 0.329556 10.276 0.198679C10.5027 0.067802 10.7601 -0.000741758 11.0219 6.05402e-06H30.0883C30.6215 6.05402e-06 31.1097 0.282661 31.3795 0.745188L40.9127 17.2548C41.1761 17.7173 41.1761 18.2827 40.9127 18.7452L31.3795 35.2548C31.1097 35.7173 30.6215 36 30.0883 36ZM11.8828 33.0257H29.2275L37.8999 18L29.2275 2.97431H11.8828L3.21038 18L11.8828 33.0257Z"
          fill="#D41212"
        />
      </svg>
    );

  const bg =
    type == "total"
      ? "rgba(114,137,218,0.2)"
      : type == "wins"
      ? "rgba(44,185,22,0.2)"
      : "rgba(212,18,18,0.2)";

  const { setSelectedUser, selectedUser, setIsEditing, isEditing } =
    useUserManagmentInternalState();
  console.log(selectedUser);
  const handleGamesChange = (event) => {
    const { name, value } = event.target;
    const newGames = selectedUser.games;
    newGames[name] = value;
    setSelectedUser({ ...selectedUser, newGames });
    /* setSelectedUser(prevState => {
      
      return {...prevState, oldSocials};
    }) */
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(124, 124, 124, 0.13) 1.46%, rgba(164, 164, 164, 0.0962) 100%)",
        boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
        backdropFilter: "blur(28.5px)",
        aspectRatio: 7 / 3,
      }}
      className="w-full  flex rounded-xl items-center xl:pl-[15px]  gap-2 xl:gap-4 pl-2 max-h-[109px] "
    >
      <div
        className={`w-[60px]  aspect-square  rounded-[14px] flex items-center justify-center ${
          type == "total"
            ? "bg-[rgba(114,137,218,0.2)]"
            : type == "wins"
            ? "bg-[rgba(44,185,22,0.2)]"
            : "bg-[rgba(212,18,18,0.2)]"
        }  `}
      >
        {icons}
      </div>
      <div className="w-full  flex flex-col items-start justify-center ">
        <div>
          <input
            onChange={handleGamesChange}
            name={type}
            className={`w-20 h-7 xl:text-[24px]  text-base font-bold text-white  bg-transparent  ${
              isEditing ? "shadow-inputModification  rounded-md" : ""
            }`}
            value={selectedUser.games[type]}
            disabled={!isEditing}
          />
        </div>
        <div>
          <p className="text-xs xl:text-sm 2xl:text-lg text-[#e7e3fc] font-normal ">
            Total{" "}
            {type == "total" ? "Matches" : type == "wins" ? "Wins" : "Losses"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
