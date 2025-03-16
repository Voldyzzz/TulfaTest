import { useEffect, useRef, useState } from "react";
import videoSource from "../../images/Banner Video/aerial-video-of-the-sunrise-in-the-dolomites-mount-2023-11-27-05-26-37-utc.mp4";
import "./hero.scss";
import VirtualProduct from "./VirtualProduct";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHeroSectionVideoVisible, setIsHeroSectionVideoVisible] =
    useState<Boolean>(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoEnd, setIsVideoEnd] = useState(false);

  const classAnimation = " animate__animated animate__slideOutUp animate__slow";

  const handleScroll = () => {
    if (!videoRef.current) return;

    const videoPosition = videoRef.current.getBoundingClientRect();

    if (videoPosition.top <= window.innerHeight && videoPosition.bottom >= 0) {
      if (!isVideoPlaying) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    } else {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsVideoEnd(true);
    setTimeout(() => {
      setIsHeroSectionVideoVisible(false);
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVideoPlaying]);

  return (
    <section className={"hero-section"}>
      <div className="container">
        {isHeroSectionVideoVisible && (
          <div
            className={`hero-section__wrapper${
              isVideoEnd ? classAnimation : ""
            }`}
          >
            <video
              ref={videoRef}
              preload="auto"
              muted
              loop={false}
              playsInline
              onEnded={handleVideoEnd}
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support video.
            </video>

            {isVideoEnd && (
              <h1 className="animate__animated animate__zoomIn animate__slow">
                Introducing
              </h1>
            )}
          </div>
        )}
        {isVideoEnd && <VirtualProduct isVideoEnd={isVideoEnd} />}
      </div>
    </section>
  );
};

export default Hero;
