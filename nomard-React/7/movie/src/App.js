import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Switch를 import
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={"/hello"}>
                    <h1>Hello</h1>
                </Route>
                <Route path="/movie">
                    <Detail />
                </Route>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
