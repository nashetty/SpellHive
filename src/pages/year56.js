import React from "react";
import "./pages.css";
import { wordListY56 } from "../components/shared/WordLists";
import { Spelling } from "../components/shared/Spelling";

const title = "Year 5/6";

function Year56() {
  return (
    <>
      <Spelling wordList={wordListY56} title={title} />
    </>
  );
}

export default Year56;
