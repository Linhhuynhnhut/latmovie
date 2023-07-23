import "./App.scss";
import "swiper/css";

import { IonContent, IonPage } from "@ionic/react";
import "@ionic/react/css/ionic-swiper.css";
import { BrowserRouter, Route } from "react-router-dom";
import RoutesConfig from "./config/Routes";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesConfig />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
