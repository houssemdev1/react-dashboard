import React from "react";
import "../Invoice/invoice.scss";
function Invoice(props) {
  return (
    <div
      className={
        props.color === "red"
          ? "payment-notification-red-container"
          : "payment-notification-yellow-container"
      }
    >
      <div className="payment-invoice-number">
        Invoice Number #{props.infos.number}
      </div>
      <div className="d-flex">
        <div className="col-5 pl-0">
          <div className=" payment-invoice-price">{props.infos.amount}</div>
          <div className=" payment-invoice-amount">Amount </div>
        </div>
        <div className="col-7 pl-0">
          <div className=" payment-invoice-date">{props.infos.date}</div>
          <div className=" payment-invoice-amount">Date </div>
        </div>
      </div>
      <hr />
      <div className="payment-invoice-footer">Website Redesign</div>
    </div>
  );
}
export default Invoice;
