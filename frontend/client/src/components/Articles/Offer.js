import React, { useState } from "react";

import "./styles.css";

export default function Offer(props) {
  const [state, setState] = useState(false);

  const parsedComments = props.article.comments.map(comment => {
    return (
      <div className="comment--box box">
        <imgimg
          src={comment.profile_pic}
          alt={comment.first_name + "'s profile_pic"}
        />
        <div className="article--userinfo">
          {comment.first_name} {comment.last_name[0].toUpperCase() + "."}
        </div>
        <div className="comment--content">{comment.comment}</div>
        <div className="hideable--date">{comment.created_at}</div>
      </div>
    );
  });

  return (
    <article className="box">
      <img
        src={props.article.profile_pic}
        alt={props.article.first_name + "'s profile_pic"}
        onClick={event => setState(!state)}
      />
      <div className="article--userinfo">
        {props.article.first_name}{" "}
        {props.article.last_name[0].toUpperCase() + "."}
      </div>
      <div className="article--title">{props.article.title}</div>
      <div className="article--description">{props.article.description}</div>
      {props.article.image ? (
        <img className="item--image" src={props.article.image} alt="offered item"/>
      ) : (
        <div>No image available</div>
      )}
      <div className="hideable--date">{props.article.created_at}</div>
      {state && parsedComments}
    </article>
  );
}
