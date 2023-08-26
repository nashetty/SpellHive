import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./InstructionPopup.css";

export default function InstructionPopup() {
  return (
    <>
      <Popup trigger={<button className="info-btn">i</button>} modal nested>
        {(close) => (
          <div className="modal">
            <div className="content">
              <div>
                <h2>Instructions how to use SpellHive</h2>
                <br />
                <p>
                  First, select the year group to start practicing your
                  spelling. You can use links on the home page or the navbar.
                </p>
                <br />
                <p>
                  You will see your first word; you can also click{" "}
                  <strong>"Read"</strong> button (or press "ALT + r" on your
                  keyboard), so you can hear the pronunciation if you'd like.
                </p>
                <br />
                <p>
                  As soon as you start typing, the word that you're practicing
                  will disappear, but don't worry, you can still hear it, if you
                  need to.
                </p>
                <br />
                <p>
                  When happy with your spelling, click the{" "}
                  <strong>"Check"</strong> button (or simply press ENTER) and
                  the computer will let you know if your spelling is correct!
                </p>
                <br />
                <p>
                  If you didn't get it right the first time, don't worry, you
                  can give it another go by clicking{" "}
                  <strong>"Try Again"</strong> (or press "ALT + a").
                </p>
                <br />
                <p>
                  If you got it right and you're ready to continue, click{" "}
                  <strong>"Next word"</strong> (or press "ALT + n").
                </p>
                <br />
                <p>
                  If you'd like to skip the word and come back to it later,
                  click <strong>"Skip"</strong> (or press "ALT + s").
                </p>
                <br />
                <p>
                  Practice your spelling for as long as you want, when you reach
                  the end of the word list, the computer will let you know.
                </p>
                <br />
                <p>
                  You can decide to end your practice at any time by clicking{" "}
                  <strong>"End"</strong> (or press "ALT + s"). You will then see
                  all the words that you've practiced.
                </p>
                <br />
                <p>
                  You can see list of all the correct answers without ending the
                  practice anytime by clicking <strong>"Score"</strong> (or
                  press "ALT+o").{" "}
                </p>
                <br />
                <p>
                  If you want to discard everything that's been done so far and
                  restart your practice, click <strong>"Restart"</strong> (or
                  press "ALT + t"). All the practice words will be loaded all
                  over again.
                </p>
                <br />
                <p>
                  Good luck and have fun{" "}
                  <span role="img" aria-label="wink">
                    😉
                  </span>
                </p>
              </div>
            </div>
            {/* <div>
              <button onClick={() => close()}>Close</button>
            </div> */}
          </div>
        )}
      </Popup>
    </>
  );
}
