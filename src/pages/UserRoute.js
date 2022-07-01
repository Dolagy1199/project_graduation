import { Redirect, Route, Switch } from "react-router-dom";
import PersistentDrawerRight from "../Components/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
import Home from './Home'
import AboutUs from "./AboutUs"
import Event from "./Events"
import Footer from "../Components/Footer"
import Profiler from "./Profile";
import AddEvent from '../Components/AddEvent'
import Ticket from '../Components/Ticket';
import Booking from '../Components/Booking';

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
                <Route exact path="/Ticket" component={Ticket} />
                <Route exact path="/Booking" component={Booking} />
                <Route path="*" component={Home} />
            </Switch>
            <Footer />
        </StyledEngineProvider>
    );
};

export default PagesRoutes;
