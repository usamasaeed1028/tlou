import BadgesEarned from "../badgesEarned";
import Statistics from "../statistics";
import TrophiesEarned from "../trophiesEarned";

const GeneralStatistics = () => {
  return (
    <div className="w-full h-ful l flex flex-col gap-6  ">
      <div className="max-w-full">
        <Statistics />
      </div>
      <div className="w-full flex flex-col gap-6 h-fu ll ">
        <div className="w-full ">
          <TrophiesEarned />
        </div>
        <div className="w-full ">
          <BadgesEarned />
        </div>

        {/* <TrophiesEarned/>
      <BadgesEarned/> */}
      </div>
    </div>
  );
};

export default GeneralStatistics;
