import { Link, Route } from "react-router-dom";
import Cat from "./Cat";
import Dog from "./Dog";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Home으로 가기</Link>
        <Link to="/cat">Cat으로 가기</Link>
        <Link to="/dog">Dog으로 가기</Link>
      </div>
      <Route path="/" exact>
        <Home data={"imdata"} />
      </Route>
      <Route path="/cat" exact component={Cat}>
        {/* <Cat /> */}
      </Route>
      <Route path="/dog">
        <Dog />
      </Route>
    </div>
  );
}

export default App;
