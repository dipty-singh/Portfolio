import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.jpg";
import projImg4 from "../assets/img/project4.jpeg";
import projImg5 from "../assets/img/project-img2.png";
import projImg6 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Personal portfolio",
      description: "React / HTML / CSS / Bootstrap",
      imgUrl: projImg1,
      project: "https://github.com/dipty-singh",
    },
    {
      title: "Ecom Project",
      description: "PHP / Javascript / HTML",
      imgUrl: projImg2,
      project: "https://github.com/dipty-singh/Ecom_Project",
    },
    {
      title: "CSE Portal",
      description: "PHP / Javascript / HTML",
      imgUrl: projImg3,
      project: "https://github.com/dipty-singh/CSE_Portal",
    },
    {
      title: "Job Portal",
      description: "PHP / Javascript / HTML",
      imgUrl: projImg4,
      project: "https://github.com/dipty-singh/Job_Portal",
    },
    {
      title: "Project5",
      description: "Language",
      imgUrl: projImg5,
      project: "https://github.com/dipty-singh",
    },
    {
      title: "Project6",
      description: "Language",
      imgUrl: projImg6,
      project: "https://github.com/dipty-singh",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to the section of technology and creativity, where my development projects are shining beacons of my progress.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>This is first selection</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Work in progress... </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Work in progress... </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
