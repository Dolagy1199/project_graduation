import { Route, Switch } from "react-router-dom";
import PersistentDrawerRight from "../Components/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
const PagesRoutes = () => {
    return (
        <StyledEngineProvider injectFirst>
            <PersistentDrawerRight>
                <Switch>
                </Switch>
            </PersistentDrawerRight>
        </StyledEngineProvider>
    );
};

export default PagesRoutes;
