import React from "react";
import { useHistory } from "react-router-dom";
interface Iprops {
  children: JSX.Element | string
}
function Icon(props: Iprops) {
  return (
    <i className="iconfont">
      { props.children }
    </i>
  )
}
export default Icon;
