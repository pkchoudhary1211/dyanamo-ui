import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "../src/public/container/user";
const App = () => {
  return (
    <div className="main-div">
      <Router>
        <Switch>
          <Route path="/">
            <Users />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
