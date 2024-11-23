import meter1 from "../assets/img/React.js_logo.svg_-860x860-removebg-preview.png";
import meter2 from "../assets/img/kisspng-javascript-node-js-removebg-preview.png";
import meter3 from "../assets/img/logo-javascript-png - 784-removebg-preview.png";
import meter4 from "../assets/img/mysql_PNG23-removebg-preview.png";
import meter5 from "../assets/img/png-transparent-logo-css-css3-removebg-preview.png";
import meter6 from "../assets/img/th-removebg-preview (1).png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Skill saya selama menjalani per kuliahan hingga semester 3<br></br>Mempelajari bahasa C java OOP javascript html css dan library yang digunakan</p>
                        <Carousel 
                          responsive={responsive} 
                          infinite={true} 
                          className="owl-carousel owl-theme skill-slider" 
                          autoPlay={true}        // Enables automatic sliding
                          autoPlaySpeed={2000}   // Controls the speed of the auto sliding (2 seconds)
                          transitionDuration={500} // Controls the transition speed between items
                        >
                            <div className="item wave-item">
                                <img src={meter1} alt="React Js" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item wave-item">
                                <img src={meter2} alt="Javascript node js" />
                                <h5>Javascript node js</h5>
                            </div>
                            <div className="item wave-item">
                                <img src={meter3} alt="Javascript" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item wave-item">
                                <img src={meter6} alt="Bootstrap" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item wave-item">
                                <img src={meter4} alt="My SQL" />
                                <h5>My SQL</h5>
                            </div>
                            <div className="item wave-item">
                                <img src={meter5} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  );
};
