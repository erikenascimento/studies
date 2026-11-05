import React from "react";
import styled from "styled-components";
import Item from "./Item";
import ImageFilter from "../../Components/ImageFilter";

const Items = styled.div`
  align-items: center;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  font-size: 12px;
  justify-content space-around;
  margin: 2px 0;  
  padding: 10px;
`;

export default (props) => {
  return (
    <Items>
      {ImageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </Items>
  );
};
