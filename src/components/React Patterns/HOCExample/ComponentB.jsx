import { forwardRef } from "react";
import withWidth from "../../../hoc/withWidth";

const ComponentB = (props, forwardRefFromParent) => {
  return (
    <div className="w-[300px]" ref={forwardRefFromParent}>
      Component B has width of {props.width}
    </div>
  );
};

export default withWidth(forwardRef(ComponentB));
