import { Route, Switch } from "react-router-dom";
import PersistentDrawerRight from "../Components/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
import Home from './Home'
import AboutUs from "./AboutUs"
import Event from "./Events"
import Footer from "../Components/Footer"
import Profiler from "./Profile";
import AddEvent from '../Components/AddEvent'
import OneTicket from '../pages/OneTicket';
import OneEvent from '../Components/OneEvent';

import AllTicket from "./AllTicket";

const PagesRoutes = () => {
    return (
        <StyledEngineProvider injectFirst>
            <PersistentDrawerRight isUser />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/AboutUs" component={AboutUs} />
                <Route path="/event/:department" component={Event} />
                <Route exact path="/profile" component={Profiler} />
                <Route exact path="/AddEvent" component={AddEvent} />
                <Route path="/ticket/:_id" component={OneTicket} />
                <Route path="/oneevent/:_id" component={OneEvent} />
                <Route exact path="/showallticket" component={AllTicket} />
                <Route path="*" component={Home} />
            </Switch>
            <Footer />
        </StyledEngineProvider>
    );
};

export default PagesRoutes;
