import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import "./UserItem.css";

const UserItem = (props) => {
  return (
    <Card className="user-item">
      <li className="center-flex-column medium-gap">
        <div className="user-item__image">
          <Avatar
            image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
            alt={props.name}
          />
        </div>
        <div className="user-item__info">
          <p className="user-item__info-name">{props.name}</p>
        </div>
        <Button to={`/${props.id}/places`} secondary>
          {props.snapCount} {props.snapCount === 1 ? "Snap" : "Snaps"}
        </Button>
      </li>
    </Card>
  );
};

export default UserItem;
