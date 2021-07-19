// import Topbar from "../../components/topbar/Topbar";
import Topbar from "../../components/topbar/Header";
import Feed from "../../components/feed/Feed";
import Leftpart from "../../components/LeftSide/leftPart";
import Rightside from "../../components/rightbar/rightbar/rightpart";
import ProfileEdit from "../../components/ProfilePart/ProfileEdit";
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      {/* <ProfileEdit /> */}
      <div className="homeContainer">
        <Leftpart />
        <Feed/>
        <Rightside />
      </div>
    </>
  );
}
