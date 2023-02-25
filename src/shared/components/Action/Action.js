import { useContext } from "react";

import Button from "../FormElements/Button";
import { AuthContext } from "../../context/auth-context";

import "./Action.css";

const Action = () => {
  const auth = useContext(AuthContext);

  if (auth.isLoggedIn) {
    return null;
  }
  /*
else {
  return;
}

*/
  return (
    <div className="aSection centerFC extra-small-gap">
      {/* Join us. Start your journey . */}
      <p className="aSectiontext">Join us. Start your journey here.</p>
      <Button to="/auth" type="button" size="medium" primary inverse>
        Get Started
      </Button>
    </div>
  );
};

export default Action;
