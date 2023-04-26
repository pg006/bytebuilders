import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./Dashboard.scss";
import Navbar from "../../Components/Navbar/Navbar";
import JoinCustomer from "../../Components/JoinCustomer/JoinCustomer";
import Technology from "../../Components/Technology/Technology";
import DelivarITSolution from "../../Components/DelivarITSolution/DelivarITSolution";
import Services from "../../Components/Services/Services";
import Offering from "../../Components/Offering/Offering";
import Testmonials from "../../Components/Testmonials/Testmonials";
import Works from "../../Components/Works/Works";
import Performance from "../../Components/Performance/Performance";
import System from "../../Components/System/System";
import Portfolio from "../../Components/Portfolio/Portfolio";
import CompanyNeed from "../../Components/CompanyNeed/CompanyNeed";
const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="dashboard-main-div">
        <Navbar isDelete="true" />
        <JoinCustomer />
        <Technology />
        <DelivarITSolution />
        <Services />
        <Offering />
        <Works />
        <Testmonials />
        <Performance />
        <System />
        <Portfolio />
        <CompanyNeed />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
