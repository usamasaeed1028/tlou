import Banner from "./banner";
import MatchPlayed from "./charts/matchPlayedWrapper";
import UserActivityOnPage from "./charts/usersActivityOnPageWrapper";
import UsersByCountryWrapper from "./charts/usersByCountryWrapper";
import UsersActivity from "./usersActivity";

const Dashbord = () => {
  return (
    <div className="w-full  h- full flex xl:gap-[3.1vw] gap-5 2xl:gap-[45px]">
      <div className={`h-f ull w-full max-w- [684px]  flex flex-col  gap-9`}>
        {/* hero banner */}
        <div className="w-full relative overflow-hidden">
          <Banner />
        </div>

        {/* users by country && match played charts */}
        <div className="w-full aspect-banner+usersByCountry&&Mat chPlayedCharts-11/4 flex gap-8 ">
          <div
            className="w-1/2 rounded-xl "
            style={{
              background:
                "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
              backdropFilter: "blur(28.5px)",
            }}
          >
            <UsersByCountryWrapper />
          </div>
          <div
            className="w-1/2 rounded-xl"
            style={{
              background:
                "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
              boxShadow: "inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
              backdropFilter: "blur(28.5px)",
            }}
          >
            <MatchPlayed />
          </div>
        </div>

        {/* Users Active on a Page chart */}
        <div className="w-full aspect-UsersActiveOnAPageChart-25/13  ">
          <UserActivityOnPage />
        </div>
      </div>

      <div
        className="w-[25vw] 2xl:w-[35.65vw] max-w-[355px] ml-auto rounded-xl  "
        style={{
          background:
            "linear-gradient(97.77deg, rgba(30, 30, 30, 0.69) 1.14%, rgba(30, 30, 30, 0.5) 100%)",
          boxShadow: "box-shadow: inset 0px 0px 3px rgba(255, 255, 255, 0.31)",
          backdropFilter: "blur(28.5px)",
        }}
      >
        <UsersActivity />
      </div>
    </div>
  );
};

export default Dashbord;
