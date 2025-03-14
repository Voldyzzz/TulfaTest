import { useEffect, useRef, useState } from "react";
import videoSource from "../../images/Banner Video/aerial-video-of-the-sunrise-in-the-dolomites-mount-2023-11-27-05-26-37-utc.mp4";
import "./hero.scss";

type Props = {
  setIsHeroSectionVisible: React.Dispatch<React.SetStateAction<Boolean>>;
};

const Hero = ({ setIsHeroSectionVisible }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleScroll = () => {
    if (!videoRef.current) return;

    const videoPosition = videoRef.current.getBoundingClientRect();

    // Check if the video is in the viewport
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
    setIsHeroSectionVisible(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVideoPlaying]);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section__wrapper">
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

          {isVideoPlaying && (
            <h1 className="animate__animated animate__zoomIn animate__slow animate__delay-20s">
              Introducing
            </h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
