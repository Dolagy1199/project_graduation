import { Redirect, Route, Switch } from "react-router-dom";
import PersistentDrawerRight from "../Components/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
import Home from './Home'
import AboutUs from "./AboutUs"
import Footer from "../Components/Footer"
import Logein from "./logein";
import OneEvent from '../Components/OneEvent';
import Signup from "./Signup";
import Event from "./Events";
import AllTicket from "./AllTicket";
import AddEvent from '../Components/AddEvent'


const GuestRoute = () => {
    return (
        <StyledEngineProvider injectFirst>
            <PersistentDrawerRight />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/AboutUs" component={AboutUs} />
                <Route path="/event/:department" component={Event} />
                <Route exact path="/oneevent" component={OneEvent} />
                <Route exact path="/logein" component={Logein} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/showallticket" component={AllTicket} />
                <Route exact path="/AddEvent" component={AddEvent} />
                <Route path="*" component={Home} />

            </Switch>
            <Footer />
        </StyledEngineProvider>
    );
};

export default GuestRoute;
