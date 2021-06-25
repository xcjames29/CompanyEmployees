import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Homepage from "./Hompage";
import CompanyPage from "./CompanyPage"

export default function Main() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" >
                    <Homepage />
                </Route>
                <Route path="/company/:id" component={CompanyPage} />
            </Switch>
        </Router>
    )
}