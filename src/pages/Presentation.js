import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload, faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Code from "../components/CodeEditor";
import GitHubButton from 'react-github-btn';
import { Routes } from "../routes";
import ThemesbergLogoIcon from "../assets/img/themesberg.svg";
import ThemesbergLogo from "../assets/img/themesberg-logo.svg";
import MockupPresentation from "../assets/img/mockup-presentation.png";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import MapboxImg from "../assets/img/mockup-map-presentation.png";
import CalendarImg from "../assets/img/mockup-calendar-presentation.png";
import ReactMockupImg from "../assets/img/react-mockup.png";
import BS5IllustrationsImg from "../assets/img/illustrations/bs5-illustrations.svg";
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../assets/img/technologies/react-logo.svg";
import Profile from "../assets/img/profile-cover.jpg";
import timeandmoneyPic from "../assets/img/time-and-money.gif";
import lead from "../assets/img/Lead_System.gif";
import pages from "../data/pages";
import features from "../data/features";
import Page from "../pages/page.css";

export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";

    return (
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <>
        <section className="section-header overflow-hidden pt-5 pt-lg-4 pb-9 pb-lg-5" id="home">
        <Container>
          <table>
            <tr>
              <td>
              <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
              <h1 className="fw-bolder text-secondary">Vetro Media Lead Management</h1>
            </Col>
            <Col>
            <div className="d-flex align-items-center justify-content-center">
                <Button variant="secondary" as={Link} to={Routes.Signup.path} className="text-dark me-3">
                  Sign Up<FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
                </Button>
                <Button variant="secondary" as={Link} to={Routes.Signin.path} classsName="text-dark me-3">
                  Sign In<FontAwesomeIcon icon={faExternalLinkSquareAlt} className="d-none d-sm-inline ms-1"/>
                </Button>
              </div>
            </Col>
          </Row>
              </td>
              <td>
              <Row className="mt-lg-7">
                <Col xs={15} >
                 <Image src={lead}/>
               </Col>
              </Row>
              </td>
            </tr>
          </table>
        </Container>
      </section>
      
    </>
  );
};
