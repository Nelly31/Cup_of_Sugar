import React, { useState, useEffect } from "react";
import { useVisualMode } from "../../hooks/useVisualMode";
import validateNewArticle from "../../helpers/validateNewArticle";

export default function New(props) {
  const { mode, transition, back } = useVisualMode("new");
  const [text, setText] = useState({
    title: null,
    description: null,
    start: null,
    end: null,
    location: null,
    image: null,
    type: null
  });
  const [error, setError] = useState();
  useEffect(()=> {setText({ ...text, type: mode })}, [mode]);  

  const newArticleMode = mode => {
    switch (mode) {
      case "new":
        return (
          <button
            onClick={event => {
              transition("choose");
            }}
          >
            Create
          </button>
        );
      case "choose":
        return (
          <div>
            <button
              onClick={event => {
                transition("event");
              }}
            >
              Event
            </button>
            <button
              onClick={event => {
                transition("notice");
              }}
            >
              Notice
            </button>
            <button
              onClick={event => {
                transition("request");
              }}
            >
              Request
            </button>
            <button
              onClick={event => {
                transition("offer");
              }}
            >
              Offer
            </button>
            <button
              onClick={event => {
                back();
              }}
            >
              Back
            </button>
          </div>
        );
      case "event":
          return (
            <div>
              {" "}
              {error}
              <form onSubmit={event => event.preventDefault()}>
                <input name="title"></input>
                <input name="description"></input>
                <button
                  onClick={event => {
                    const isValid = validateNewArticle(text);
                    if (isValid === true) {
                      props.onSubmit(text);
                    }
                    return setError(isValid);
                  }}
                >
                  Confirm
                </button>
              </form>
              <button
                onClick={event => {
                  setError("")
                  back();
                }}
              >
                Back
              </button>
            </div>
        );
      case "notice":
          return (
            <div>
              {" "}
              {error}
              <form onSubmit={event => event.preventDefault()}>
                <input name="title"></input>
                <input name="description"></input>
                <button
                  onClick={event => {
                    const isValid = validateNewArticle(text);
                    if (isValid === true) {
                      props.onSubmit(text);
                    }
                    return setError(isValid);
                  }}
                >
                  Confirm
                </button>
              </form>
              <button
                onClick={event => {
                  setError("")
                  back();
                }}
              >
                Back
              </button>
            </div>
        );
      case "request":
          return (
            <div>
              {" "}
              {error}
              <form onSubmit={event => event.preventDefault()}>
                <input name="title"></input>
                <input name="description"></input>
                <button
                  onClick={event => {
                    const isValid = validateNewArticle(text);
                    if (isValid === true) {
                      props.onSubmit(text);
                    }
                    return setError(isValid);
                  }}
                >
                  Confirm
                </button>
              </form>
              <button
                onClick={event => {
                  setError("")
                  back();
                }}
              >
                Back
              </button>
            </div>
          );
      case "offer":
        return (
          <div>
            {" "}
            {error}
            <form onSubmit={event => event.preventDefault()}>
              <input name="title"></input>
              <input name="description"></input>
              <button
                onClick={event => {
                  const isValid = validateNewArticle(text);
                  if (isValid === true) {
                    props.onSubmit(text);
                  }
                  return setError(isValid);
                }}
              >
                Confirm
              </button>
            </form>
            <button
              onClick={event => {
                setError("")
                back();
              }}
            >
              Back
            </button>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className="new--article--box box">
      <button onClick={event => console.log(mode)}>state?</button>
      {newArticleMode(mode)}
    </div>
  );
}
{
  /* <section className="new--button">
  <button onClick={event => {setState(!state)}}>
    New
  </button>
</section> : <section className="new--article">
  <textarea onChange={event => {setText(event.target.value)}} className="textarea" placeholder="description"></textarea>
  <button onClick={event => {setState(!state)}}>Cancel</button>
  <button onClick={event => {props.onSubmit(text)}}>Submit</button>
</section> */
}
