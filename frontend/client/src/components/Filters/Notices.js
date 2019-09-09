import React, { useState } from "react";

import Button from "../Button";

import "./styles.scss";

let classnames = require("classnames");

export default function Notices(props) {
  // const [state, setState] = useState(true)

  const toggleButton = event => {
    if (props.categories["notices"] === true) {
      props.toggleFilter("articles");
      props.onSelect("articles");
    } else {
      props.toggleFilter("notices");
      props.onSelect("notices");
    }
  };

  const buttonClass = classnames("button", {
    "filter--selected": props.selected
  });

  return (
    <section className={buttonClass}>
      <Button onSelect={toggleButton} notices>
        Notices
      </Button>
    </section>
  );
}
