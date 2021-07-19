import Topbar from "../../components/topbar/Header";
import ProfilePart from "../../components/ProfilePart/ProfilePart";
import Leftpart from "../../components/LeftSide/leftPart";
import Rightside from "../../components/rightbar/rightbar/rightpart";
import "./connection.css";

export default function Connection() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftpart />
        <ProfilePart />
        <Rightside />
      </div>
    </>
  );
}
