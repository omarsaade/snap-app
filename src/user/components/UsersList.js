import UserItem from "./UserItem";
import UserIt from "./UserIt";
import p12 from "../../assets/p12.jpg";
import p11 from "../../assets/p11.jpeg";
import p15 from "../../assets/p15.jpg";
import "./UsersList.css";

const dummyData = [
  {
    id: 123,
    name: "Sami Clark",
    motto: "it's Trip Time.",
    image: p12,
    places: { length: 0 },
  },
  {
    id: 124,
    name: "Sara Hoblos",
    motto: "P-P-P-Pick up an arhitecture.",
    image: p11,
    places: { length: 0 },
  },
  {
    id: 125,
    name: "Fadi Harb",
    motto: "If you can't beat life,join life",
    image: p15,
    places: { length: 0 },
  },
];

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center-text no-data-found">
        <p>No Users Found.</p>
      </div>
    );
  }

  const r = dummyData.map((item) => (
    <UserIt
      key={item.id}
      id={item.id}
      name={item.name}
      motto={item.motto}
      image={item.image}
      snapCount={item.places.length}
    />
  ));

  return (
    <div className="users-section center-text" id="users">
      <h2>HIGHLIGHTS</h2>
      <ul className="users-list">
        {r}
        {props.items.map((item) => (
          <UserItem
            key={item.id}
            id={item.id}
            name={item.name}
            motto={item.motto}
            image={item.image}
            snapCount={item.places.length}
          />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

/*

   {props.items.map((item) => (
          <UserItem
            key={item.id}
            id={item.id}
            name={item.name}
            motto={item.motto}
            image={item.image}
            snapCount={item.places.length}
          />
        ))}

*/

/*

const dummyData = [
  {
    key: 2212,
    id: 2212,
    image:
      "https://whc.unesco.org/uploads/thumbs/site_0295_0001-750-750-20151104123418.jpg",
    title: "one of the besto",
    description: "one of the best",
    address: "lebanon",
    creatorId: "u1",
    coordinates: {
      lat: 40.9699889,
      lng: -77.7278831,
    },
    onDelete: "ha",
  },
];

*/
