import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./../App.scss";
import Dashboard from "../pages/dashboard/Dashboard";
import Payment from "../pages/payment/Payement";
import Planning from "../pages/planning/Planning";
import Projects from "../pages/project/Projects";
import Reports from "../pages/reports/Reports";
import Header from "../components/Header/Header";
import Sidbar from "../components/Sidebar/Sidbar";
import Details from "../pages/Details/Details";
import Invoice from "../pages/payment/invoice/Invoice";
import PaymentInformations from "../pages/payment/payment-informations/payment-informations";
const Routes = props => {
  console.log("===>", props);
  const [url, setUrl] = useState("");

  const setActiveItem= urlData => {
    setUrl(urlData);
  };
  return (
    <Router>
      <Header activeLink={url} />
      <div className="container-fluid">
        <div className="d-flex">
          <div className="sidebar-container">
            <Sidbar activeLink={url} />
          </div>
          <div className="col pl-0 pr-0">
            <div className=" pages-container">
              <div>
                {props.location.pathname === "/" ? (
                  <Redirect from="/" to="dashboard" />
                ) : null}
              </div>
              <Route path="/dashboard">
                <Dashboard path={setActiveItem} />
              </Route>
              <Route exact path="/payment">
                <Payment path={setActiveItem} />
              </Route>
              <Route path="/planning">
                <Planning path={setActiveItem} />
              </Route>
              <Route exact path="/projects">
                <Projects path={setActiveItem} />
              </Route>
              <Route path="/reports">
                <Reports path={setActiveItem} />
              </Route>

              <Switch>
                <Route path="/projects/:id/details" component={Details} />
                <Route exact path="/payment/invoice/:id">
                  <Invoice path={setActiveItem} />
                </Route>
                <Route path="/payment/invoice/:id/informations">
                  <PaymentInformations path={setActiveItem} />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default Routes;
