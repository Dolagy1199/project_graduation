import { Redirect, Route, Switch } from "react-router-dom";
import PersistentDrawerRight from "../Components/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
import Home from './Home'
import AboutUs from "./AboutUs"
import Events from "./Events"
import Footer from "../Components/Footer"
import Logein from "./logein";
import Booking from '../Components/Booking';
const GuestRoute = () => {
    return (
        <StyledEngineProvider injectFirst>
            <PersistentDrawerRight />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/AboutUs" component={AboutUs} />
                <Route exact path="/events" component={Events} />
                {/* <Route exact path="/Ticket" component={Logein} /> */}
                {/* <Route exact path="/Ticket" component={<Redirect to="/logein" />} /> */}
                <Route exact path="/Booking" component={Booking} />
                <Route exact path="/logein" component={Logein} />
            </Switch>
            <Footer />
        </StyledEngineProvider>
    );
};

export default GuestRoute;
