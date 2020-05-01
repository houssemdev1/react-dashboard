import React, { useState } from "react";
import "./invoice.scss";
import TeamMembers from "../../../components/TeamMembers/TeamMembers";
import InvoiceCard from "../../../components/Invoice/Invoice";
import { Link } from "react-router-dom";
function Invoice(props) {
  props.path("payment");
  console.log("invoice props =>", props);
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
      <div className="col-md-9  invoice-container">
        <div className="projects-current-title current-title primary-title">Invoices</div>
        <div className=" payment-container container-padding">
          <div className="d-flex justify-content-between">
            <div>
              <img
                className="payment-smala-icon"
                src={require("../../../assets/images/smala-icon.svg")}
                alt=""
              />
              <div className="payment-icon-title">Invoices</div>
              <div className="primary-subtitle">485740</div>
            </div>

            <div className="payment-date">26/09/2019</div>
          </div>
          <hr />
          <div className="row payment-row">
            <div className="secondary-title">LBS Project</div>
          </div>

          <div className="row payment-row">
            <div className="col-md-3 pl-0">
              <div className="payment-grid-title">Responsible</div>
            </div>
            <div className="col-md-3 pl-0">
              <div className="payment-grid-title">Team</div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>
          <div className="row payment-row">
            <div className="col-md-3 pl-0">
              <div>
                {" "}
                <div className="stark-ellipse">
                  <div className="stark-label">{invoice.project.admin}</div>
                </div>{" "}
              </div>
            </div>
            <div className="col-md-3 pl-0">
              <div>
                <TeamMembers teamPictures={invoice.project.persons} />
              </div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>

          <hr />
          <div className="row payment-invoice-row  ">
            <div className="col-md-3 pl-0">
              <div className="payment-grid-title">DESCRIPTION</div>
            </div>
            <div className="col-md-3 d-flex justify-content-end ">
              <div className="payment-grid-title">DAYS</div>
            </div>
            <div className="col-md-3 d-flex justify-content-end">
              <div className="payment-grid-title">PRICE</div>{" "}
            </div>
            <div className="col-md-3 d-flex justify-content-end">
              <div className="payment-grid-title">TOTAL</div>
            </div>
          </div>

          {invoice.tasks.map((task, index) => {
            return (
              <div className="row payment-row">
                <div className="col-md-3 pl-0 primary-subtitle">
                  <div className="primary-subtitle">{task.description} </div>
                </div>
                <div className="col-md-3 d-flex justify-content-end">
                  <div className="primary-subtitle">{task.days}</div>
                </div>
                <div className="col-md-3 d-flex justify-content-end ">
                  <div className="primary-subtitle">{task.price}</div>
                </div>
                <div className="col-md-3 d-flex justify-content-end ">
                  <div className="primary-subtitle">
                    {task.days * task.price}
                  </div>
                </div>
              </div>
            );
          })}
          <hr />
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-end">
              <div className="payment-grid-title payment-total-price">
                TOTAL
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <div className="primary-subtitle">00.000 €</div>{" "}
            </div>
          </div>
          <div className=" invoice-buttons-row d-flex justify-content-end ">
         
            <Link
              to={"/payment"}
              className=" invoice-cancel-btn"
            >
          
              
              <div className="invoice-btn-label invoice-cancel-btn-label">cancel </div>
           
            </Link>
            <Link
              to={"/payment/invoice/5/informations"}
              className=" invoice-pay-btn"
            >
              <div className="invoice-btn-label create-btn-label">payment</div>
            </Link>
          </div>
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

export default Invoice;
