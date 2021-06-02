import { Route, Switch } from "react-router"
import HomePage from "./components/HomePage/HomePage"
import NavBar from "./components/NavBar/NavBar"
import NoMatch from "./components/NoMatch/NoMatch"
import AddTutorial from "./components/Tutorials/AddTutorial"
import Tutorial from "./components/Tutorials/Tutorial"
import TutorialsList from "./components/Tutorials/TutorialsList"

const RouteHandler = () => {
    return (
        <div className = "route-handler">
            <div className = "nav-bar">
              <NavBar/>
            </div>
            <div className = "content-style"> 
            <Switch>
                <Route path = "/" exact component = {HomePage}/>
                <Route path = "/add" component = {AddTutorial} />
                <Route path = "/tutorials" exact component = {TutorialsList}/>
                <Route path = "/tutorials/:id" component = {Tutorial}/>
                <Route component = {NoMatch}/>
            </Switch>
            </div>
        </div>
    )
}
export default RouteHandler;