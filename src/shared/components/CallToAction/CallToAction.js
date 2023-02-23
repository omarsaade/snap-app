import { useContext } from "react";

import Button from "../FormElements/Button";

import { AuthContext } from "../../context/auth-context";

import "./CallToAction.css";

const CallToAction = () => {
  const auth = useContext(AuthContext);

  if (auth.isLoggedIn) {
    return null;
  }

  return (
    <div className="firstsection center-flex-column extra-small-gap">
      <p className="firstsectiontext">Join us. Start your journey here.</p>
      <Button to="/auth" type="button" size="medium" primary inverse>
        Get Started
      </Button>
    </div>
  );
};

export default CallToAction;
