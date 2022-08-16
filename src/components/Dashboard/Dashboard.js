import Sidebar from "../Sidebar.js/Sidebar";
import Dashboardlogo from "../../assets/logo.png";
import { DashLogo, Logo } from "./Dashboard.Style";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();

  
  return (
    <div>
      <DashLogo className="dash-logo">
        <Logo src={Dashboardlogo} alt="" onClick={() => navigate("/") }/>
      </DashLogo>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
