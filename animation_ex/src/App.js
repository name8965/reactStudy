import logo from "./logo.svg";
import "./App.css";
import styled, { keyframes } from "styled-components";

function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}
const boxAnimation = keyframes`
  0% {  
    border-radius: 0px;
  }
  30%{ 
    border-radius: 50px;
    top:300px}
  50%{  
    border-radius: 50px;
    top:400px}
  100%{  
    border-radius: 0px;
  top:20px}
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;

  border-radius: 0px;

  position: absolute;
  top: 20px;
  left: 20px;

  animation: ${boxAnimation} 2s 1s infinite linear alternate;
`;

export default App;
