import React, { useState } from "react";
import "./Header.scss";
import { Modal } from "react-rainbow-components";
import smalaLogo from "../../assets/images/smala-icon.svg";
import profilIcon from "../../assets/images/profil-icon.svg";
import searchIcon from "../../assets/images/search-icon.png";
import plusIcon from "../../assets/images/plus-icon.svg";
import { Input, Button, DatePicker } from "react-rainbow-components/components";
function Header(props) {
  const [modalShow, setModalShow] = useState(false);
  const [state, setState] = useState({ isOpen: false });
  const handleOnClick = () => {
    return setState({ isOpen: true });
  };

  const handleOnClose = () => {
    return setState({ isOpen: false });
  };
  return (
    <div className="container-fluid header-component">
      <div className="row">
        <div className="col-md-9 ">
          <div class="d-flex flex-container">
            <div class=" p-2">
              <div className="smala-icon">
                <img src={smalaLogo} alt="Logo" />
              </div>
            </div>
            <div class=" p-2">
              <div className="normal-title page-title">{props.activeLink}</div>
            </div>

            <div class="ml-auto p-2 ">
              {" "}
              <div className="page-title">
                <Button
                  type="button"
                  variant="neutral"
                  className="rainbow-m-around_medium "
                  onClick={handleOnClick}
                >
                  <div className="btn-label">
                    <img src={plusIcon} className="btn-icon" alt="" />
                    Ajouter projet
                  </div>
                </Button>

                <Modal
                  className="modal-class"
                  id="modal-1"
                  isOpen={state.isOpen}
                  onRequestClose={handleOnClose}
                >
                  <div className="row input-row " style={{ marginTop: "15px" }}>
                    <Input
                      placeholder="Enter a project name"
                      type="text"
                      className="rainbow-p-around_medium add-project-input "
                    />
                  </div>
                  <div className="row input-row " style={{ marginTop: "20px" }}>
                    <Input
                      placeholder="Description"
                      type="text"
                      className="rainbow-p-around_medium add-project-input"
                    />
                  </div>
                  <div className="row ">
                    <div className="col-6 mt">
                      <DatePicker
                        className="add-project-input"
                        value={state.date}
                        placeholder="Set start date"
                        onChange={value => setState({ date: value })}
                      />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-6 mt">
                      <DatePicker
                        className="add-project-input"
                        value={state.date}
                        placeholder="Set end date"
                        onChange={value => setState({ date: value })}
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-end mt">
                    <button className="btn create-btn">
                      <div className="create-btn-label"> Create a Project</div>
                    </button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 flex-container ">
          <div className="d-flex justify-content-between header-right-items ">
            <Input
              className="rainbow-p-around_medium"
              placeholder="Search"
              icon={
                <img
                  src={searchIcon}
                  className="rainbow-color_gray-3"
                  alt="searchIcon"
                />
              }
            />
            <img src={profilIcon} alt="profilIcon" className="profile-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
