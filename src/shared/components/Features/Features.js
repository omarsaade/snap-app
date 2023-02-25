import {
  MdIosShare,
  MdOutlineMap,
  MdOutlineHolidayVillage,
  MdOutlineLuggage,
  MdKeyboardArrowDown,
} from "react-icons/md";
import "./Features.css";

const Features = () => {
  return (
    <section className="center-text large-gap center-flex-row sectionFeatures">
      <div className="feature centerFC tg">
        <div className="featureIcon">
          <MdIosShare title="share icon" />
        </div>
        <p className="featureTitle">Share</p>
        <p className="featureText">
          Upload favorite snaps and share with others.
        </p>
      </div>
      <div className="feature centerFC tg">
        <div className="featureIcon">
          <MdOutlineMap />
        </div>
        <p className="featureTitle">Navigate</p>
        <p className="featureText">
          Pick one snap interests you. See where it is.
        </p>
      </div>
      <div className="feature centerFC tg">
        <div className="featureIcon">
          <MdOutlineHolidayVillage />
        </div>
        <p className="featureTitle">Architecture</p>
        <p className="featureText">
          Delve into unique architecture. Be inspired.
        </p>
      </div>
      <div className="feature centerFC tg">
        <div className="featureIcon">
          <MdOutlineLuggage />
        </div>
        <p className="featureTitle">Plan</p>
        <p className="featureText">Explore selected tours. Plan a visit.</p>
      </div>
      <div className="scrollDown">
        <MdKeyboardArrowDown />
      </div>
    </section>
  );
};

export default Features;
