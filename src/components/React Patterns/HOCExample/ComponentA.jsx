import { forwardRef } from "react";
import withWidth from "../../../hoc/withWidth";

const ComponentA = (props, forwardRefFromParent) => {
  return (
    <div className="w-[200px]" ref={forwardRefFromParent}>
      Component A has width of {props.width}
    </div>
  );
};

export default withWidth(forwardRef(ComponentA));
