import React from "react";
import "./pages.css";
import { wordListY34 } from "../components/shared/WordLists";
import { Spelling } from "../components/shared/Spelling";

const title = "Year 3/4";

function Year34() {
  return (
    <>
      <Spelling wordList={wordListY34} title={title} />
    </>
  );
}

export default Year34;
