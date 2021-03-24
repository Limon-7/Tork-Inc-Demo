import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import GetToken from "./components/GetToken";
import PostData from "./components/PostData";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">Post data</Link>
          <Link to="/get">Get</Link>
        </header>
        <Switch>
          <Route exact path="/" component={PostData} />
          <Route path="/get" component={GetToken} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
