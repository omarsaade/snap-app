import { Fragment, useState, useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./SnapItem.css";

const SnapItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  /*

 const { isLoading, error, sendRequest, clearError } = useHttpClient();

*/
  // const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);

    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places/${props.id}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="snapItemModalContent"
        footerClass="snapItemModalActions"
        footer={
          <Button onClick={closeMapHandler} secondary>
            Close
          </Button>
        }
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={14} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        contentClass="snapItemModalContent"
        footerClass="snapItemModalActions"
        footer={
          <Fragment>
            <Button onClick={cancelDeleteHandler} inverse secondary>
              Cancel
            </Button>
            <Button onClick={confirmDeleteHandler} danger secondary>
              Delete
            </Button>
          </Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this snap? You can't undo this
          action.
        </p>
      </Modal>
      <Card className="snapItem">
        {isLoading && <LoadingSpinner asOverlay />}
        <li>
          <div className="snapItemImg">
            <img
              src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
              // src='http://localhost:8000/uploads/images/5d727aa0-48ca-11ec-96e6-258a17f4d3f7.jpeg'
              alt={props.title}
            />
          </div>
          <div className="centerFC small-gap">
            <div className="centerFC extra-small-gap snapItem__info">
              <p className="snapItem__info-title">{props.title}</p>
              <p className="snapItem__info-address">{props.address}</p>
              <p className="snapItem__info-description">{props.description}</p>
            </div>
            <div className="center-flex-row tg snapItem__actions">
              <Button secondary>View on Map</Button>
              {auth.userId === props.creatorId && (
                <Button to={`/places/${props.id}`} secondary inverse>
                  Edit
                </Button>
              )}
              {auth.userId === props.creatorId && (
                <Button onClick={showDeleteWarningHandler} secondary danger>
                  Delete
                </Button>
              )}
            </div>
          </div>
        </li>
      </Card>
    </Fragment>
  );
};

export default SnapItem;
