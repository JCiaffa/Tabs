import styled from "styled-components";

const TabBtn = styled.button`
  padding: 20px;
  margin: 10px;
  border: 1px solid black;
  font-size: 1.5rem;
  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
`;

export default TabBtn;
