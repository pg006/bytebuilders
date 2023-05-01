import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Nav, Modal, Row, Col, Dropdown, Badge, Navbar } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import U1 from "../../assets/images/UserImages/U1.jpg";
import U2 from "../../assets/images/UserImages/U2.jpg";
import U3 from "../../assets/images/UserImages/U3.jpg";
import U4 from "../../assets/images/UserImages/U4.jpg";
import U9 from "../../assets/images/UserImages/U9.jpg";
import logo from "../../assets/images/Logo/logo.png";
import logo3 from "../../assets/images/Logo/logo3.png";
import { CountryData, MyShoppingCartData } from "../../Data/DataDashboard/Mock";
const SideMenuIcon = () => {
  //leftsidemenu
  document.querySelector(".app")?.classList.toggle("sidenav-toggled");
};

// Darkmode
const DarkMode = () => {
  document.querySelector(".app")?.classList.toggle("dark-mode");
};

// FullScreen
var elem = document.documentElement;
var i = true;
const Fullscreen = (vale) => {
  switch (vale) {
    case true:
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
      i = false;
      break;
    case false:
      document.exitFullscreen();
      i = true;
      break;
    default:
  }
};

// SwitcherMenu

const SidSwitcherIcon = () => {
  //leftsidemenu
  document.querySelector(".demo_changer")?.classList.toggle("active");
  let Rightside = document.querySelector(".demo_changer");
  Rightside.style.right = "0px";
};

const RightSideBar = () => {
  //leftsidemenu

  //rightsidebar
  document.querySelector(".sidebar-right")?.classList.toggle("sidebar-open");
  //swichermainright
};
const Header = () => {
  document.querySelector(".main-content")?.addEventListener("click", () => {
    console.log("search-result");
    document.querySelector(".search-result")?.classList.add("d-none");
  });

  // For CountrySelector Modal
  const [show, setShow] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("English");

  return (
    <div className={styles.Header}>
      <div className="header sticky app-header header1">
        <div className="container-fluid main-container">
          <div className="d-flex">
            <Link
              aria-label="Hide Sidebar"
              className="app-sidebar__toggle"
              data-bs-toggle="sidebar"
              to="#"
              onClick={() => SideMenuIcon()}
            />
            <Link
              className="logo-horizontal "
              to={`${process.env.PUBLIC_URL}/Dashboard`}
            >
              <img
                src={logo}
                className="header-brand-img desktop-logo"
                alt="logo"
              />
              <img
                src={logo3}
                className="header-brand-img light-logo1"
                alt="logo"
              />
            </Link>

            <Navbar className="d-flex order-lg-2 ms-auto header-right-icons">
              <Navbar.Toggle className="d-lg-none ms-auto header2">
                <span className="navbar-toggler-icon fe fe-more-vertical"></span>
              </Navbar.Toggle>

              <div className="responsive-navbar p-0">
                <Navbar.Collapse className="" id="navbarSupportedContent-4">
                  <div className="d-flex order-lg-2">
                    {/* Country Select Modal */}

                    <div className="d-flex country">
                      <Link
                        to="#"
                        onClick={() => {
                          setShow(true);
                        }}
                        className="nav-link icon text-center"
                      >
                        <i className="fe fe-globe"></i>
                        <span className="fs-16 ms-2 d-none d-xl-block">
                          {selectedCountry}
                        </span>
                      </Link>
                      <Modal
                        className="modal fade"
                        show={show}
                        onHide={() => {
                          setShow(false);
                        }}
                        centered
                      >
                        <Modal.Header>
                          <Modal.Title as="h6">Choose Country</Modal.Title>
                          <span
                            className="d-flex ms-auto"
                            onClick={() => {
                              setShow(false);
                            }}
                          >
                            <i className="fe fe-x ms-auto"></i>
                          </span>
                        </Modal.Header>
                        <Modal.Body>
                          <Row as="ul" className="p-3">
                            {CountryData.map((val, index) => {
                              return (
                                <Col
                                  lg={6}
                                  as="li"
                                  className="mb-2"
                                  key={index}
                                  onClick={() => {
                                    setSelectedCountry(val.name);
                                    setShow(false);
                                  }}
                                >
                                  <Link
                                    to="#"
                                    className={"btn btn-country btn-lg btn-block " + (selectedCountry === val.name ? "active" : "")}
                                  >
                                    <span className="country-selector">
                                      <img
                                        alt=""
                                        src={val.flag}
                                        className="me-3 language"
                                      />
                                    </span>
                                    {val.name}
                                  </Link>
                                </Col>
                              );
                            })}
                          </Row>
                        </Modal.Body>
                      </Modal>
                    </div>

                    {/* Dark Mode */}

                    <div className="dropdown  d-flex">
                      <Nav.Link
                        className="nav-link icon theme-layout nav-link-bg layout-setting"
                        onClick={() => DarkMode()}
                      >
                        <span className="dark-layout">
                          <i className="fe fe-moon"></i>
                        </span>
                        <span className="light-layout">
                          <i className="fe fe-sun"></i>
                        </span>
                      </Nav.Link>
                    </div>

                    {/* <!-- Shopping-Cart Theme-Layout --> */}

                    <Dropdown className="d-flex shopping-cart">
                      <Dropdown.Toggle
                        variant=""
                        className="nav-link icon text-center no-caret"
                      >
                        <i className="fe fe-shopping-cart"></i>
                        <span className="badge bg-secondary header-badge">
                          8
                        </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading border-bottom">
                          <div className="d-flex">
                            <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">
                              My Shopping Cart
                            </h6>
                            <div className="ms-auto">
                              <Badge
                                bg="danger-transparent"
                                className="header-badge text-danger fs-14"
                              >
                                Hurry Up!
                              </Badge>
                            </div>
                          </div>
                        </div>
                        {/* <div className="header-dropdown-list message-menu"> */}
                        <PerfectScrollbar style={{ height: "300px" }}>
                          {MyShoppingCartData.map((val, index) => {
                            return (
                              <Dropdown.Item
                                href={`${process.env.PUBLIC_URL}/Ecommerce/shoppingcart`}
                                className="d-flex p-4"
                                key={index}
                              >
                                <img
                                  className="avatar avatar-xl br-5 me-3 align-self-center cover-image"
                                  src={val.img}
                                  alt="pngs-4"
                                />
                                <div className="wd-50p">
                                  <h5 className="mb-1">{val.productName}</h5>
                                  <span>
                                    Status:
                                    <span
                                      className={
                                        val.status === "In Stock"
                                          ? "text-success"
                                          : "text-danger"
                                      }
                                    >
                                      {val.status}
                                    </span>
                                  </span>
                                  <p className="fs-13 text-muted mb-0">
                                    Quantity: {val.quantity}
                                  </p>
                                </div>
                                <div className="ms-auto text-end d-flex fs-16">
                                  <span className="fs-16 text-dark d-none d-sm-block px-4">
                                    {val.price}
                                  </span>
                                  <span className="fs-16 btn p-0 cart-trash">
                                    <i className="fe fe-trash-2 border text-danger brround d-block p-2"></i>
                                  </span>
                                </div>
                              </Dropdown.Item>
                            );
                          })}
                        </PerfectScrollbar>
                        <Dropdown.Divider className="m-0" />
                        <div className="dropdown-footer">
                          <Link
                            className="btn btn-primary btn-pill w-sm btn-sm py-2"
                            to={`${process.env.PUBLIC_URL}/Ecommerce/checkout`}
                          >
                            <i className="fe fe-check-circle"></i> Checkout
                          </Link>
                          <span className="float-end p-2 fs-17 fw-semibold">
                            Total: $6789
                          </span>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* FullScreen button */}

                    <div className="dropdown d-flex">
                      <Nav.Link
                        className="nav-link icon full-screen-link nav-link-bg"
                        onClick={() => Fullscreen(i)}
                      >
                        <i className="fe fe-minimize fullscreen-button"></i>
                      </Nav.Link>
                    </div>

                    {/* Notification */}

                    <Dropdown className="d-flex notifications">
                      <Dropdown.Toggle
                        variant=""
                        className="nav-link icon no-caret"
                      >
                        <i className="fe fe-bell"></i>
                        <span className=" pulse"></span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading border-bottom">
                          <div className="d-flex">
                            <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">
                              Notifications
                            </h6>
                          </div>
                        </div>
                        <div className="notifications-menu">
                          <Dropdown.Item
                            className="d-flex"
                            href={`${process.env.PUBLIC_URL}/Pages/notificationlist`}
                          >
                            <div className="me-3 notifyimg  bg-primary brround box-shadow-primary">
                              <i className="fe fe-mail"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">
                                New Application received
                              </h5>
                              <span className="notification-subtext">
                                3 days ago
                              </span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="d-flex"
                            href={`${process.env.PUBLIC_URL}/Pages/notificationlist`}
                          >
                            <div className="me-3 notifyimg  bg-secondary brround box-shadow-secondary">
                              <i className="fe fe-check-circle"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">
                                Project has been approved
                              </h5>
                              <span className="notification-subtext">
                                2 hours ago
                              </span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="d-flex"
                            href={`${process.env.PUBLIC_URL}/Pages/notificationlist`}
                          >
                            <div className="me-3 notifyimg  bg-success brround box-shadow-success">
                              <i className="fe fe-shopping-cart"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">
                                Your Product Delivered
                              </h5>
                              <span className="notification-subtext">
                                30 min ago
                              </span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="d-flex"
                            href={`${process.env.PUBLIC_URL}/Pages/notificationlist`}
                          >
                            <div className="me-3 notifyimg bg-pink brround box-shadow-pink">
                              <i className="fe fe-user-plus"></i>
                            </div>
                            <div className="mt-1">
                              <h5 className="notification-label mb-1">
                                Friend Requests
                              </h5>
                              <span className="notification-subtext">
                                1 day ago
                              </span>
                            </div>
                          </Dropdown.Item>
                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <Dropdown.Item
                          href={`${process.env.PUBLIC_URL}/Pages/notificationlist`}
                          className="dropdown-item text-center p-3 text-muted"
                        >
                          View all Notification
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* Messages */}

                    <Dropdown className="d-flex message">
                      <Dropdown.Toggle
                        variant=""
                        className="nav-link icon text-center no-caret"
                      >
                        <i className="fe fe-message-square"></i>
                        <span className="pulse-danger"></span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading border-bottom">
                          <div className="d-flex">
                            <h6 className="mt-1 mb-0 fs-16 fw-semibold text-dark">
                              You have 5 Messages
                            </h6>
                            <div className="ms-auto">
                              <Link to="#" className="text-muted p-0 fs-12">
                                make all unread
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="message-menu">
                          <Dropdown.Item
                            className="d-flex"
                            href={`${process.env.PUBLIC_URL}/apps/chat`}
                          >
                            <img
                              className="avatar avatar-md brround me-3 align-self-center cover-image"
                              alt="user-1"
                              src={U1}
                            />
                            <div className="wd-90p">
                              <div className="d-flex">
                                <h5 className="mb-1">Peter Theil</h5>
                                <small className="text-muted ms-auto text-end">
                                  6:45 am
                                </small>
                              </div>
                              <span>Commented on file Guest list....</span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="d-flex"
                            href={`${process.env.PUBLIC_URL}/apps/chat`}
                          >
                            <img
                              className="avatar avatar-md brround me-3 align-self-center cover-image"
                              alt="user-15"
                              src={U2}
                            />
                            <div className="wd-90p">
                              <div className="d-flex">
                                <h5 className="mb-1">Abagael Luth</h5>
                                <small className="text-muted ms-auto text-end">
                                  10:35 am
                                </small>
                              </div>
                              <span>New Meetup Started......</span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="d-flex"
                            href={`${process.env.PUBLIC_URL}/apps/chat`}
                          >
                            <img
                              className="avatar avatar-md brround me-3 align-self-center cover-image"
                              alt="user-12"
                              src={U3}
                            />
                            <div className="wd-90p">
                              <div className="d-flex">
                                <h5 className="mb-1">Brizid Dawson</h5>
                                <small className="text-muted ms-auto text-end">
                                  2:17 pm
                                </small>
                              </div>
                              <span>Brizid is in the Warehouse...</span>
                            </div>
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="d-flex"
                            href={`${process.env.PUBLIC_URL}/apps/chat`}
                          >
                            <img
                              className="avatar avatar-md brround me-3 align-self-center cover-image"
                              alt="user-4"
                              src={U4}
                            />
                            <div className="wd-90p">
                              <div className="d-flex">
                                <h5 className="mb-1">Shannon Shaw</h5>
                                <small className="text-muted ms-auto text-end">
                                  7:55 pm
                                </small>
                              </div>
                              <span>New Product Realease......</span>
                            </div>
                          </Dropdown.Item>
                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <Dropdown.Item
                          to="#"
                          className="text-center p-3 text-muted"
                        >
                          See all Messages
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* Right Side-bar */}

                    <div
                      className="dropdown d-flex header-settings"
                      onClick={() => RightSideBar()}
                    >
                      <Link
                        to="#;"
                        className="nav-link icon"
                        data-bs-toggle="sidebar-right"
                        data-target=".sidebar-right"
                      >
                        <i className="fe fe-align-right"></i>
                      </Link>
                    </div>

                    {/* Profile  */}

                    <Dropdown className="d-flex profile-1">
                      <Dropdown.Toggle
                        variant=""
                        className="nav-link leading-none d-flex no-caret"
                      >
                        <img
                          src={U9}
                          alt="profile-user"
                          className="avatar  profile-user brround cover-image"
                        />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end dropdown-menu-arrow">
                        <div className="drop-heading">
                          <div className="text-center">
                            <h5 className="text-dark mb-0 fs-14 fw-semibold">
                              Olivia Smith
                            </h5>
                            <small className="text-muted">Senior Admin</small>
                          </div>
                        </div>
                        <div className="dropdown-divider m-0"></div>
                        <Dropdown.Item
                          className="dropdown-item"
                          href={`${process.env.PUBLIC_URL}/Pages/profile`}
                        >
                          <i className="dropdown-icon fe fe-user"></i> Profile
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropdown-item"
                          href={`${process.env.PUBLIC_URL}/Pages/mailinbox`}
                        >
                          <i className="dropdown-icon fe fe-mail"></i> Inbox
                          <span className="badge bg-danger rounded-pill float-end">
                            5
                          </span>
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropdown-item"
                          href={`${process.env.PUBLIC_URL}/Authentication/lockscreen`}
                        >
                          <i className="dropdown-icon fe fe-lock"></i>
                          Lockscreen
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="dropdown-item"
                          href={`${process.env.PUBLIC_URL}/Authentication/firebaseAuth/login`}
                        >
                          <i className="dropdown-icon fe fe-alert-circle"></i>
                          Sign out
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Navbar.Collapse>
              </div>

              {/* Switcher  */}

              <div
                className="demo-icon nav-link icon"
                onClick={() => SidSwitcherIcon()}
              >
                <i className="fe fe-settings fa-spin  text_primary"></i>
              </div>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
