import Routes from "./Shared/Routes.js";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
function App(props) {
  return (
    <Router history={history}>
      <Routes history={history} />
    </Router>
  );
}

export default App;
