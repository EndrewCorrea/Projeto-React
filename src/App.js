import ServicePage from "./pages/Serviços/ServicePage";
import Home from "./pages/HomePage/Home";
import Empresas from "./pages/Empresas/Empresas";
import Curriculo from "./pages/Curriculos/Curriculo";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>

        <Route path="/ServicePage">
          <ServicePage />
        </Route>

        <Route path="/Curriculo">
          <Curriculo />
        </Route>

        <Route path="/Empresas">
          <Empresas />
        </Route>

        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}
