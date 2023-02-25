import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <Card className="userItem">
      <li className="centerFC medium-gap">
        {/* <li className="centerFC medium-gap"> */}
        <div className="userItem__image">
          <Avatar
            image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
            alt={props.name}
          />
        </div>
        <div className="userItem__info">
          <p className="userItemInfoName">{props.name}</p>
          <p className="userInfoText">{props.motto}</p>
        </div>
        <Button to={`/${props.id}/places`} secondary>
          {props.snapCount} {props.snapCount === 1 ? "Snap" : "Snaps"}
        </Button>
      </li>
    </Card>
  );
};

export default UserItem;
