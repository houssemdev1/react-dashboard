import React, { useState } from "react";
import InvoiceCard from "../../../components/Invoice/Invoice";
import "../payment-informations/payment-informations.scss";
import { Tab, Tabset } from "react-rainbow-components";
import { Link } from "react-router-dom";
function PaymentInformations(props) {
  props.path("payment");
  console.log("invoice props =>", props);
  const [state, setState] = useState("paybal");
  const selected = state;
  const newInvoices = [
    {
      number: "485740",
      amount: 999,
      date: "26/09/2019",
      name: "website redesign",
      color: "red"
    },
    {
      number: "485740",
      amount: 999,
      date: "26/09/2019",
      name: "website redesign",
      color: "yellow"
    }
  ];
  const handleOnSelect = (event, selected) => {
    setState(selected);
  };
  const [invoice, setInvoice] = useState({
    number: "485740",
    project: {
      name: "LBS Project",
      admin: "Ned Stark",
      persons: [
        require("../../../assets/images/person-picture.svg"),
        require("../../../assets/images/person-picture.svg"),
        require("../../../assets/images/yellow-oval.svg")
      ]
    },
    date: "26/09/2019",
    amount: "999 €",
    status: "",
    tasks: [
      {
        description: " Website redesign",
        days: 15,
        price: 0.0
      },
      {
        description: " Website redesign",
        days: 15,
        price: 0.0
      },
      {
        description: " Website redesign",
        days: 15,
        price: 0.0
      }
    ]
  });
  return (
    <div className="row payment">
      <div className="col-md-9 projects-container ">
        <div className="projects-current-title current-title primary-title">
          Payment information
        </div>

        {/* informations container  */}

        <div className="payment-informations-container">
          <div className="payment-informations-title">
            Choose a payment method{" "}
          </div>
          <Tabset
            id="tabset-1"
            onSelect={handleOnSelect}
            activeTabName={selected}
            className="payment-informations-tabset"
          >
            <Tab
              label={
                <img
                  src={require("../../../assets/images/paypal-picture.svg")}
                  alt=""
                />
              }
              name="paybal"
              id="primary"
              ariaControls="primaryTab"
            />

            <Tab
              label={
                <img
                  className="payment-informations-stripe-icon"
                  src={require("../../../assets/images/stripe-icon.svg")}
                  alt=""
                />
              }
              name="stripe"
              id="recents"
              ariaControls="recentsTab"
            />
          </Tabset>
          {selected === "paybal" ? (
            <form>
              <div class="form-group">
                <div className="payment-informations-label">Name of owner</div>
                <input
                  type="name"
                  class="payment-informations-input form-control"
                  placeholder="Name of owner"
                />
              </div>
              <div class="form-group">
                <div className="payment-informations-label">Card number</div>
                <input
                  type="password"
                  class="payment-informations-input form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="d-flex">
                <div className="col pl-0">
                  <div className="payment-informations-label">Expiration</div>
                  <input
                    type="password"
                    class="payment-informations-input form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="col pr-0">
                  <div className="payment-informations-label">CVV</div>
                  <input
                    type="password"
                    class="payment-informations-input  form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="d-flex juststify-content-between">
                <Link to={"/payment/invoice/"+5} className=" payment-informations-cancel-btn">
                  <div className="invoice-btn-label invoice-cancel-btn-label">
                    cancel
                  </div>
                </Link>
                <button className="payment-informations-btn invoice-pay-btn">
                  <div className=" create-btn-label">payment</div>
                </button>
              </div>
            </form>
          ) : (
            <div>no forms </div>
          )}
        </div>
      </div>
      {/* ******************notification column*************  */}
      <div className="col-md-3 notification-column">
        <div className=" payment-notification-title notification-title">
          New Invoices
        </div>
        {newInvoices.map((invoice, index) => {
          return <InvoiceCard infos={invoice} color={invoice.color} />;
        })}
      </div>
    </div>
  );
}

export default PaymentInformations;
