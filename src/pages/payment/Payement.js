import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../payment/Payement.scss";

import InvoiceCard from "../../components/Invoice/Invoice";
function Payement(props) {
  props.path("payment");

  const newInvoices=[
    {
      number: "485740",
      amount:999,
      date:"26/09/2019",
      name:"website redesign",
      color:"red"
    },
    {
      number: "485740",
      amount:999,
      date:"26/09/2019",
      name:"website redesign",
      color:"yellow"
    }
    ]
  const [invoices, setInvoices] = useState([
    {
      number: "485740",
      project: {
        name: "LBS Project",
        admin: "Ned Stark",
        persons: [
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/yellow-oval.svg")
        ]
      },
      date: "26/09/2019",
      amount: "999 €",
      status: "pay"
    },
    {
      number: "485740",
      project: {
        name: "LBS Project",
        admin: "Ned Stark",
        persons: [
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/yellow-oval.svg")
        ]
      },
      date: "26/09/2019",
      amount: "999 €",
      status: "pay"
    },
    {
      number: "485740",
      project: {
        name: "LBS Project",
        admin: "Ned Stark",
        persons: [
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/yellow-oval.svg")
        ]
      },
      date: "26/09/2019",
      amount: "999 €",
      status: "paid"
    },
    {
      number: "485740",
      project: {
        name: "LBS Project",
        admin: "Ned Stark",
        persons: [
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/yellow-oval.svg")
        ]
      },
      date: "26/09/2019",
      amount: "999 €",
      status: "pay"
    },
    {
      number: "485740",
      project: {
        name: "LBS Project",
        admin: "Ned Stark",
        persons: [
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/yellow-oval.svg")
        ]
      },
      date: "26/09/2019",
      amount: "999 €",
      status: " paid"
    },
    {
      number: "485740",
      project: {
        name: "LBS Project",
        admin: "Ned Stark",
        persons: [
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/yellow-oval.svg")
        ]
      },
      date: "26/09/2019",
      amount: "999 €",
      status: " paid"
    },
    {
      number: "485740",
      project: {
        name: "LBS Project",
        admin: "Ned Stark",
        persons: [
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/person-picture.svg"),
          require("../../assets/images/yellow-oval.svg")
        ]
      },
      date: "26/09/2019",
      amount: "999 €",
      status: " paid"
    }
  ]);
  const getInvoice = id => {
    props.history.push("/payment/invoice/" + id);
  };

  return (
    <div className="row payment">
      <div className="col-md-9  ">
        <div className="projects-current-title primary-title">Invoices</div>
        <div className="row invoice-list-header">
          <div className="col-9 d-flex justify-content-between">
            <div className=" payment-invoice-amount">Invoices number</div>
            <div className=" payment-invoice-amount invoice-custom-label">
              Project{" "}
            </div>
            <div className=" payment-invoice-amount">Date</div>
            <div className=" payment-invoice-amount">Amount</div>
          </div>
          <div className="col-3 ">
            <div className=" payment-invoice-amount invoice-align-label">
              Status
            </div>
          </div>
        </div>
        {invoices.map((invoice, index) => {
          return (
            <div className="row invoice-list-row">
              <div className="col-9 d-flex justify-content-between">
                <div className=" invoice-list-items">{invoice.number}</div>
                <div className=" invoice-list-items">
                  {invoice.project.name}{" "}
                </div>
                <div className=" invoice-list-items">{invoice.date}</div>
                <div className=" invoice-list-items">{invoice.amount}</div>
              </div>
              <div className="col-3 invoice-list-items d-flex justify-content-end">
                <Link
                  to={"/payment/invoice/" + index}
                  disabled={invoice.status === "paid"}
                  className={
                    invoice.status === "pay"
                      ? "invoice-list-pay-btn "
                      : "invoice-list-paid-btn"
                  }
                >
                  <div className="invoice-payment-btn  create-btn-label">
                    {invoice.status}
                  </div>
                </Link>

                <button className="invoice-ellipse-btn">
                  <img
                    src={require("../../assets/images/vertical-ellipses.svg")}
                    alt=""
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ******************notification column*************  */}
      <div className="col-md-3 notification-column">
        <div className=" payment-notification-title notification-title">
          New Invoices
        </div>
        {newInvoices.map((invoice, index) => {
            return (
  <InvoiceCard infos={invoice} color={invoice.color} /> 
              )  })}
      </div>
    </div>
  
  );
}

export default Payement;
