import React from "react";
import "./pages.css";
import { wordListY2 } from "../components/shared/WordLists";
import { Spelling } from "../components/shared/Spelling";

const title = "Year 2";

function Year2() {
  return (
    <>
      <Spelling wordList={wordListY2} title={title} />
    </>
  );
}

export default Year2;
