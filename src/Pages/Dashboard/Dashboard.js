import React from "react";
import Footer from "../../components/Footer/Footer";
import "./Dashboard.scss";
import Navbar from "../../components/Navbar/Navbar";
import JoinCustomer from "../../components/JoinCustomer/JoinCustomer";
import Technology from "../../components/Technology/Technology";
import DelivarITSolution from "../../components/DelivarITSolution/DelivarITSolution";
import Services from "../../components/Services/Services";
import Offering from "../../components/Offering/Offering";
import Works from "../../components/Works/Works";
import Performance from "../../components/Performance/Performance";
import System from "../../components/System/System";
import Portfolio from "../../components/Portfolio/Portfolio";
import CompanyNeed from "../../components/CompanyNeed/CompanyNeed";
import Testmonials from "../../components/Testmonials/Testmonials";
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
