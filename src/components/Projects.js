import { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Form, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/semester1.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import projImg7 from "../assets/img/7.png";
import projImg8 from "../assets/img/8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
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

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null); // Menyimpan proyek yang dipilih

  // Proyek untuk tiap semester
  const semester1Projects = [
    {
      title: "C#",
      description: "Program Konversi Suhu",
      imgUrl: projImg1,
      zipUrl: "/laprak_2.zip"
    },
    {
      title: "C#",
      description: "Program Tagihan Internet Rumah",
      imgUrl: projImg2,
      zipUrl: "/laprak_3.zip"
    },
    {
      title: "C#",
      description: "Program Kasir Apotik",
      imgUrl: projImg3,
      zipUrl: "/laprak_4"
    },
    {
      title: "C#",
      description: "Program Poliklinik",
      imgUrl: projImg4,
      zipUrl: "/laprak_5"
    },
    {
      title: "C#",
      description: "Game Mencari Pasien",
      imgUrl: projImg5,
      zipUrl: "/game_mencari_pasien.zip"
    },
  ];

  const semester2Projects = [
    {
      title: "Java",
      description: "Rekam Medis Unisa",
      imgUrl: projImg6,
      zipUrl: "/rekam_medis.zip"
    },
    {
      title: "Java",
      description: "Game Pasien Greenfoot",
      imgUrl: projImg7,
      zipUrl: "/PatientSearch.gfar"
    },
  ];

  const semester3Projects = [
    {
      title: "React",
      description: "Portofolio",
      imgUrl: projImg8,
      zipUrl: "/PatientSearch.gfar"
    },
  ];

  // Function to filter projects based on search query
  const filterProjects = (projects) => {
    return projects.filter(project =>
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleLearnMore = (project) => {
    setSelectedProject(project); // Set the selected project
  };

  const handleBackToProjects = () => {
    setSelectedProject(null); // Kembali ke daftar proyek
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  
                  {/* Search bar */}
                  <Form.Group controlId="searchProjects" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Search projects..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </Form.Group>

                  {/* Jika ada proyek yang dipilih, tampilkan detail proyek */}
                  {selectedProject ? (
                    <Row>
                      <Col xs={12} className="text-center">
                        <h3>{selectedProject.title}</h3>
                        <p>{selectedProject.description}</p>
                        <Button variant="primary" href={selectedProject.zipUrl} target="_blank">
                          Download ZIP
                        </Button>
                        <div className="mt-3">
                          <Button variant="secondary" onClick={handleBackToProjects}>
                            Back to Projects
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Semester 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Semester 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Semester 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              filterProjects(semester1Projects).map((project, index) => (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  onLearnMore={() => handleLearnMore(project)} // Menambahkan fungsi onLearnMore untuk setiap proyek
                                />
                              ))
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {
                              filterProjects(semester2Projects).map((project, index) => (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  onLearnMore={() => handleLearnMore(project)}
                                />
                              ))
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            {
                              filterProjects(semester3Projects).map((project, index) => (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  onLearnMore={() => handleLearnMore(project)}
                                />
                              ))
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  )}
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
