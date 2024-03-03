import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/dipty-singh14/" target="_blank"><img src={navIcon1} alt="LinkedinIcon" /></a>
                <a href="https://www.facebook.com/dipty_singh/" target="_blank"><img src={navIcon2} alt="FacebookIcon" /></a>
                <a href="https://www.instagram.com/letteringfreak_/" target="_blank"><img src={navIcon3} alt="InstagramIcon" /></a>
                <a href="https://github.com/dipty-singh" target="_blank"><img src={navIcon4} alt="GithubIcon" /></a>
                <a href="mailto:dipty.singh14@gmail.com/" target="_blank"><img src={navIcon5} alt="MailIcon" /></a>
            </div>
            <p>Dipty Singh ©2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
