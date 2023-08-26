import React from "react";
import "./pages.css";
import { wordListY1 } from "../components/shared/WordLists";
import { Spelling } from "../components/shared/Spelling";

const title = "Year 1";

function Year1() {
  return (
    <>
      <Spelling wordList={wordListY1} title={title} />
    </>
  );
}

export default Year1;
