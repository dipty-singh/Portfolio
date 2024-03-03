import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, project}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a href={project} target="_blank" title="Visit Project's link">Visit</a>
        </div>
      </div>
    </Col>
  )
}
