import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import profilePic1 from "../assets/img/profile-pic.jpg"; // Gambar pertama
import profilePic2 from "../assets/img/profile-pic2.jpg"; // Gambar kedua
import profilePic3 from "../assets/img/profile-pic3.jpg"; // Gambar ketiga

export const Banner = () => {
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

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Fullstack Developer", "React Developer", "Frontend" ];
  const period = 2000;
  const [currentImage, setCurrentImage] = useState(profilePic1); // Menyimpan gambar saat ini

  useEffect(() => {
    // Mengganti gambar setiap beberapa detik
    const imageInterval = setInterval(() => {
      changeImage();
    }, 2000); // Ganti gambar setiap 5 detik (5000ms)

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
      clearInterval(imageInterval); // Pastikan interval diganti bersamaan dengan komponen dibersihkan
    };
  }, [text]);

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
  };

  // Fungsi untuk mengganti gambar
  const changeImage = () => {
    if (currentImage === profilePic1) {
      setCurrentImage(profilePic2);
    } else if (currentImage === profilePic2) {
      setCurrentImage(profilePic3);
    } else {
      setCurrentImage(profilePic1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container
      responsive={responsive}
      >
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <h1>{`Dian Gita Meilani `} 
                <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "" ]'>
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>Mahasiswa Universitas Aisyiyah Yogyakarta Prodi Teknologi Informasi.</p>
              <span className="tagline">
                My Portfolio
                <Button 
                  href="https://wa.me/089674366444" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="whatsapp-btn ms-3"
                >
                  Contact me on WhatsApp
                </Button>
              </span>

              <div className="github-link mt-3">
                <p>Check out my projects on <a href="https://github.com/meilaa221" target="_blank" rel="noopener noreferrer" className="github-link-text">GitHub</a>.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="image-container">
              <img 
                src={currentImage} 
                alt="Profile" 
                className="profile-image" 
                style={{ transition: "transform 1s ease-in-out" }} 
              />
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
