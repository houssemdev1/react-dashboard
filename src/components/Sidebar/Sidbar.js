import React from "react";
import "./../Sidebar/Sidbar.scss";
import Sidebar from "react-rainbow-components/components/Sidebar";
import DashboardIcon from "../header-icons/Dashboard-icon";
import ProjectIcon from "../header-icons/Project-icon";
import PaymentIcon from "../header-icons/Payment-icon";
import ReportsIcon from "../header-icons/Reports-icon";
import PlanningIcon from "../header-icons/Planning-icon";
import { Link } from "react-router-dom";

class Sidbar extends React.Component {
  constructor(props) {
    super(props);
  
  }
  handleOnSelect = (e, selectedItem) => {
    return this.setState({ selectedItem });
  };

  render() {
    let selectedItem = this.props.activeLink;

    return (
      <Sidebar
        className="sidbar"
        selectedItem={selectedItem}
        onSelect={this.handleOnSelect}
        id="sidebar-1"
      >
        <Link to={"/dashboard"}>
          <DashboardIcon activeItem={selectedItem} />
        </Link>
        <Link to={"/projects"}>
          <ProjectIcon activeItem={selectedItem} />
        </Link>
        <Link to={"/payment"}>
          <PaymentIcon activeItem={selectedItem} />
        </Link>
        <Link to={"/reports"}>
          <ReportsIcon activeItem={selectedItem} />
        </Link>
        <Link to={"/planning"}>
          <PlanningIcon activeItem={selectedItem} />
        </Link>{" "}
      </Sidebar>
    );
  }
}

export default Sidbar;
