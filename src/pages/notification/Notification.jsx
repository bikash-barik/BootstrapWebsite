import Topbar from "../../components/topbar/Header";
import Feed from "../../components/feed/Feed";
import ChartPart from "../../components/Chart/chartPart";
import Leftpart from "../../components/LeftSide/leftPart";
import Rightside from "../../components/rightbar/rightbar/rightpart";
// import "./home.css"

export default function notification() {
  return (
    <>
      <Topbar />
      
      {/* <div className="homeContainer"> */}
        
      <ChartPart />
      {/* </div> */}
    </>
  );
}
