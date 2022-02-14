import React from "react";
import { useParams } from "react-router-dom";

const Cat = (props) => {
  const cat_name = useParams();
  return (
    <div
      onClick={() => {
        props.history.push("/");
      }}
    >
      고양이 화면입니다.!
    </div>
  );
};
export default Cat;
