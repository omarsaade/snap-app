import { Link } from "react-router-dom";

import "./Button.css";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"} ${
          props.whiteBg && "button--white-bg"
        } ${props.primary && "button--primary"} ${
          props.secondary && "button--secondary"
        }`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }

  /*

<a
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"} ${
          props.whiteBg && "button--white-bg"
        } ${props.primary && "button--primary"} ${
          props.secondary && "button--secondary"
        }`}
        href={props.href}
      >
        {props.children}
      </a>

  */
  if (props.to) {
    return (
      <Link
        to={props.to}
        className={`button button--${props.size || "default"} ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"} ${
          props.whiteBg && "button--white-bg"
        } ${props.primary && "button--primary"} ${
          props.secondary && "button--secondary"
        }`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${props.size || "default"} ${
        props.inverse && "button--inverse"
      } ${props.danger && "button--danger"} ${
        props.whiteBg && "button--white-bg"
      } ${props.primary && "button--primary"} ${
        props.secondary && "button--secondary"
      }`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
