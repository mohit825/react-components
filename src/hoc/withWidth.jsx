import { useEffect, useRef, useState } from "react";

const withWidth = (Component) => {
  function passWidth(props) {
    const [width, setWidth] = useState("");
    const styleRef = useRef();

    useEffect(() => {
      console.log(styleRef.current);
      if (styleRef.current) {
        setWidth(styleRef.current.offsetWidth);
      }
    }, [styleRef]);

    return <Component width={width} ref={styleRef} />;
  }
  return passWidth;
};

export default withWidth;
