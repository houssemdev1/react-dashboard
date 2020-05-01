import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Tabset, Tab } from "react-rainbow-components";
import Details from "../../components/details-components/Details/Details";
import Development from "../../components/details-components/Development/Development";
import Design from "../../components/details-components/Design/Design";
import Gestion from "../../components/details-components/Gestion/Gestion";
import "./Details.scss";
const DetailsPage = props => {
  const [state, setState] = useState(
    props.location.pathname.slice(
      props.location.pathname.indexOf("details") + 8
    )
  );
  const selected = state;
  /* useEffect(() => {
    setState(selected);
  }, [props]); */
  const updatePath = selected => {
    setState(selected);
    props.location.pathname =
      props.location.pathname.replace(
        props.location.pathname.slice(
          props.location.pathname.indexOf("details") + 7
        ),
        ""
      ) +
      "/" +
      selected;
  };
  const getTabContent = () => {
    if (selected === "development") {
      return (
        <div
          aria-labelledby="development"
          id="developmentTab"
          className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3"
        >
          <Development />
        </div>
      );
    } else if (selected === "design") {
      return (
        <div
          aria-labelledby="design"
          id="designTab"
          className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3"
        >
          <Design />
        </div>
      );
    } else if (selected === "gestion") {
      return (
        <div
          aria-labelledby="gestion"
          id="gestionTab"
          className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3"
        >
          <Gestion />
        </div>
      );
    }
    return (
      <div
        aria-labelledby="details"
        id="detailsTab"
        className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center rainbow-color_gray-3"
      >
        <Details />
      </div>
    );
  };

  return (
    <div className="details-container details-page">
      <Tabset
        id="details-tabset"
        activeTabName={
          selected === "development" ||
          selected === "design" ||
          selected === "gestion"
            ? selected
            : "details"
        }
      >
        <Link onClick={() => updatePath("  ")}>
          <Tab
            label="Details"
            name="details"
            id="details"
            ariaControls="detailsTab"
          />
        </Link>
        <Link onClick={() => updatePath("development")}>
          <Tab
            label="Development"
            name="development"
            id="development"
            ariaControls="developmentTab"
          />
        </Link>
        <Link onClick={() => updatePath("design")}>
          <Tab
            label="Design"
            name="design"
            id="design"
            ariaControls="designTab"
          />
        </Link>
        <Link onClick={() => updatePath("gestion")}>
          <Tab
            label="Gestion Bugs"
            name="gestion"
            id="gestion"
            ariaControls="gestionTab"
          />
        </Link>
      </Tabset>
      {getTabContent()}
    </div>
  );
};
export default withRouter(DetailsPage);
