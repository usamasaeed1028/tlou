import BadgesEarned from "../badgesEarned";
import Statistics from "../statistics";
import TrophiesEarned from "../trophiesEarned";

const GeneralStatistics = () => {
    return (  <div className="w-full h-full flex flex-col gap-6  ">
    <div className="max-w-full">
      <Statistics />
    </div>
      <div className="w-full flex flex-col gap-6 h-full ">
        <div
        style={{aspectRatio:25/12}}
         className="w-full ">
          <TrophiesEarned />
        </div>
        <div
        style={{aspectRatio:25/12}}
         className="w-full ">
          <BadgesEarned />
        </div>

        {/* <TrophiesEarned/>
      <BadgesEarned/> */}
      </div>
    </div> );
}
 
export default GeneralStatistics;