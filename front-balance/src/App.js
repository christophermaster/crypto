import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BalanceListPage from "./components/BalanceListPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/balances">
            <BalanceListPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;