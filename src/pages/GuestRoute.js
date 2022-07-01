import { Redirect, Route, Switch } from "react-router-dom";
import PersistentDrawerRight from "../Components/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
import Home from './Home'
import AboutUs from "./AboutUs"
import Footer from "../Components/Footer"
import Logein from "./logein";
import Booking from '../Components/Booking';
import Signup from "./Signup";
import Event from "./Events";
const GuestRoute = () => {
    return (
        <StyledEngineProvider injectFirst>
            <PersistentDrawerRight />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/AboutUs" component={AboutUs} />
                <Route path="/event/:department" component={Event} />
                {/* <Route exact path="/Ticket" component={Logein} /> */}
                {/* <Route exact path="/Ticket" component={<Redirect to="/logein" />} /> */}
                <Route exact path="/Booking" component={Booking} />
                <Route exact path="/logein" component={Logein} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
            <Footer />
        </StyledEngineProvider>
    );
};

export default GuestRoute;
