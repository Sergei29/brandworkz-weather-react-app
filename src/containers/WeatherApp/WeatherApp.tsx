import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
// components:
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Navigation from "../../components/Navigation";
import NotFoundPage from "../../pages/NotFoundPage";
import CurrentLocationPage from "../../pages/CurrentLocationPage";
import ExtendedForecastPage from "../../pages/ExtendedForecastPage";
// styles:
import { useStyles } from "./style";

/**
 * @description weather application container
 * @returns {JSX} markup
 */
const WeatherApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header>
          <Navigation />
        </Header>
        <Main>
          <Switch>
            <Route path="/" exact component={CurrentLocationPage} />
            <Route
              path="/extended-forecast/:strLocationName"
              component={ExtendedForecastPage}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Main>
        <Footer>footer</Footer>
      </Container>
    </BrowserRouter>
  );
};

export default WeatherApp;
