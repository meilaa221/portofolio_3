import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import photo1 from "../assets/img/organisasi/1.png";
import photo2 from "../assets/img/organisasi/2.png";
import photo3 from "../assets/img/organisasi/3.png";
import photo4 from "../assets/img/organisasi/4.png";
import photo5 from "../assets/img/organisasi/5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Gallery = () => {
  const [rotating, setRotating] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setRotating((prev) => !prev); // Toggle rotating state
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const captions = [
    "Lomba Interner Of Things",
    "Berbagi dengan Anak Yatim",
    "Rapat Perdana Bem Universitas",
    "Foto Bersama Divisi Sosma",
    "Podcast"
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="gallery-title">My Activity</h2>
            <p className="gallery-description">
              Kegiatan saya selama di kampus, mulai dari mengikuti lomba dan juga organisasi.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true} // Aktifkan autoplay
              autoPlaySpeed={5000} // Kecepatan auto-play (3 detik)
              transitionDuration={3000} // Durasi transisi
              className="owl-carousel owl-theme gallery-slider"
            >
              {[photo1, photo2, photo3, photo4, photo5].map((photo, index) => (
                <div
                  key={index}
                  className={`item gallery-item ${rotating ? "rotate-backward" : "rotate-forward"}`}
                >
                  <div className="photo-container">
                    <img src={photo} alt={`Photo ${index + 1}`} className="flip-image" />
                    <p className="caption">{captions[index]}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp2} alt="Background" />
    </section>
  );

};
