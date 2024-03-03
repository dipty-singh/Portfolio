import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { Router } from "react-router-dom";

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer by profession", "Artist by heart"  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Dipty`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer by profession", "Artist by heart" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Crafting code by day, painting dreams by night - a software Developer with an artist's soul.
                    <br></br>
                    <br></br>
                  Empathizing and defining problems as I move forward, I bring my creative expertise to ideate solutions. I am passionate about the work that I do and relentlessly strive to make things work. I have a strong affinity for problem-solving and analytics, and find great pleasure in applying these skills to various situations. As a quick learner and attentive listener, I am adept at building natural connections with others and can work effectively with cross-functional teams.
                    <br></br>
                    <br></br>
                  Always on the quest for the next big challenge.</p>
                  <Router>
                  <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span><ArrowRightCircle size={25} /></button>
                <br></br>
              </HashLink>
              </Router>
                  <a className="resumeTagline" href="https://drive.google.com/file/d/1BZOnUfBFSR3kJ27Vu1sa9rKlZECff9YR/view?usp=drive_link" target="_blank" title="Dipty Singh's Resume">My Resume</a>   
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
