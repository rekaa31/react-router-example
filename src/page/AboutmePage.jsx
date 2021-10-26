import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import AboutmeDetailPage from "./AboutmeDetailPage";

export default function AboutmePage() {
    
    let { path, url } = useRouteMatch();
    
    return(
        <div>
            <h3>About Me</h3>

            <ul>
                <li>
                    <Link to={`${url}/hobby`}>Hobby</Link>
                </li>
                <li>
                    <Link to={`${url}/dream`}>Dream</Link>
                </li>
                <li>
                    <Link to={`${url}/school`}>School</Link>
                </li>
            </ul>
            <hr />

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <AboutmeDetailPage />
                </Route>
            </Switch>
        </div>
    )

}