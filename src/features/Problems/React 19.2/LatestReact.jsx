import { useState } from "react";
import { SimpleInput } from "./SimpleInput";
import { Activity } from "react";

export const LatestReact = () => {
  const [showInput, setShowInput] = useState(false);
  const [light, setLight] = useState(false);
  return (
    <div>
      <h2>Activity Feature Example</h2>
      <p>
        This is an example of Activity feature. Which renders or hide the
        component smartly. <br /> When an Activity boundary is hidden, React
        will visually hide its children using the display: none CSS property. It
        will also destroy their Effects, cleaning up any active subscriptions.
        While hidden, children still re-render in response to new props, albeit
        at a lower priority than the rest of the content.
      </p>

      <div>
        <button className="border" onClick={() => setShowInput(!showInput)}>
          Toggle Input Component
        </button>
        <button className="border" onClick={() => setLight(!light)}>
          Change Input Component Theme
        </button>

        <Activity mode={showInput ? "visible" : "hidden"}>
          <SimpleInput isLight={light} />
        </Activity>
      </div>
    </div>
  );
};
