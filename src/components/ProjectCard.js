import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, onLearnMore }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <div className="img-container"
        responsive
        >
          <img src={imgUrl} alt={title} className="project-image" />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          
          {/* Tombol Learn More yang memicu fungsi onLearnMore dari props */}
          <div className="button-container text-center mt-3">
            <Button variant="primary" size="sm" onClick={onLearnMore}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
