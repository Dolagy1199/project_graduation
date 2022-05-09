import { Route, Switch } from "react-router-dom";
import PersistentDrawerRight from "../Components/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
import Home from '../Components/Home/Home'
const PagesRoutes = () => {
    return (
        <StyledEngineProvider injectFirst>
            <PersistentDrawerRight>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </PersistentDrawerRight>
        </StyledEngineProvider>
    );
};

export default PagesRoutes;
