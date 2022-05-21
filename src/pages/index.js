import { Route, Switch } from "react-router-dom";
import PersistentDrawerRight from "../Components/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
import Home from './Home'
import Andrew from "./andrew";
import AboutUs from "./AboutUs"
import Events from "./Events"
import Footer from "../Components/Footer"
const PagesRoutes = () => {
    return (
        <StyledEngineProvider injectFirst>
            <PersistentDrawerRight />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/AboutUs" component={AboutUs} />
                <Route exact path="/events" component={Events} />

            </Switch>
            <Footer />
        </StyledEngineProvider>
    );
};

export default PagesRoutes;
