import imgSource from "../../images/Close Up Shots/view-of-a-modern-lounge-room-2023-11-28-03-19-28-utc.jpg";
import "./index.scss";

const CloseUpShots = () => {
  return (
    <section className="CloseUpShots-section">
      <div className="container">
        <h2 className="CloseUpShots-section-title">Close Up Shots</h2>
        <img src={imgSource} alt="Close Up Shots" />
        <button>
          Take a closer look{" "}
          <i
            className="fa-solid fa-magnifying-glass-plus"
            style={{ color: "#b81414" }}
          ></i>
        </button>
      </div>
    </section>
  );
};

export default CloseUpShots;
