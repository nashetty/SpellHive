import React from "react";
import "./Response.css";

function ThumbsUp({ response }) {
  const img =
    "https://1000logos.net/wp-content/uploads/2023/05/Thumbs-Up-Emoji.png";

  if (response === "Correct!") {
    return <img id="thumbs-up" alt="thumbs up" src={img} />;
  } else {
    return null;
  }
}

function PrintResponse({ response }) {
  let id;
  let cont;
  // let img;

  if (!response) {
    cont = "";
  } else if (response === "Correct!") {
    id = "response-correct";
    cont = "Press 'Next word' to continue.";
  } else {
    id = "response-wrong";
    cont = "Press 'Try again' to have another go.";
  }

  return (
    <>
      <p id={id}>
        {response}
        <br />
        {cont}
      </p>
      <ThumbsUp response={response} />
    </>
  );
}

export default PrintResponse;
