import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsDetails from "./components/Pages/NewsDetails/NewsDetails";
import Nav from "./components/Home/Header/Navbar/Nav";
import Navbar from "./components/Home/Header/Navbar/Navbar";
import ScrollTop from "./components/Shared/Scroll/ScrollTop";
import Footer from "./components/Shared/Footer/Footer";
import Covid from "./components/Pages/Covid/Covid";
import National from "./components/Pages/National/National";
import Politics from "./components/Pages/Politics/Politics";
import International from "./components/Pages/International/International";
import Economics from "./components/Pages/Economics/Economics";
import CountryNews from "./components/Pages/CountryNews/CountryNews";
import Sports from "./components/Pages/Sports/Sports";
import UsElection from "./components/Pages/UsElection/UsElection";
import Campus from "./components/Pages/Campus/Campus";
import LifeStyle from "./components/Pages/LifeStyle/LifeStyle";
import Tech from "./components/Pages/Tech/Tech";
import Entertainment from "./components/Pages/Entertainment/Entertainment";
import Exile from "./components/Pages/Exile/Exile";
import Capital from "./components/Pages/Capital/Capital";
import Everyday from "./components/Pages/Everyday/Everyday";
import Editorial from "./components/Pages/Editorial/Editorial";
import ViewersOpinion from "./components/Pages/ViewersOpinion/ViewersOpinion";
import Opinion from "./components/Pages/Opinion/Opinion";
import IslamLife from "./components/Pages/IslamLife/IslamLife";
import AllTogether from "./components/Pages/AllTogether/AllTogether";
import Upstairs from "./components/Pages/Upstairs/Upstairs";
import SocialMedia from "./components/Pages/SocialMedia/SocialMedia";
import Literature from "./components/Pages/Literature/Literature";
import DoctorAvailable from "./components/Pages/DoctorAvailable/DoctorAvailable";
import Various from "./components/Pages/Various/Various";
import Bicchu from "./components/Pages/Bicchu/Bicchu";
import Interview from "./components/Pages/Interview/Interview";
import Suranjona from "./components/Pages/Suranjona/Suranjona";
import CorporateNews from "./components/Pages/CorporateNews/CorporateNews";
import { createContext, useState } from "react";
import NoMatch from "./components/NoMatch/NoMatch";
import { allNewsData } from "./DataNews/DataNews";

export const NewsContext = createContext();

function App() {
  const [newsData, setNewsData] = useState(allNewsData);
  return (
    <NewsContext.Provider value={[newsData, setNewsData]}>
      {
        // console.log(newsData)
      }
      <Router>
        <Nav />
        <Navbar />
        <ScrollTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news/:id">
            <NewsDetails />
          </Route>
          <Route path="/covid-19">
            <Covid />
          </Route>
          <Route path="/national">
            <National />
          </Route>
          <Route path="/politics">
            <Politics />
          </Route>
          <Route path="/international">
            <International />
          </Route>
          <Route path="/economics">
            <Economics />
          </Route>
          <Route path="/country-news">
            <CountryNews />
          </Route>
          <Route path="/sports">
            <Sports />
          </Route>
          <Route path="/us-election">
            <UsElection />
          </Route>
          <Route path="/campus">
            <Campus />
          </Route>
          <Route path="/life-style">
            <LifeStyle />
          </Route>
          <Route path="/tech">
            <Tech />
          </Route>
          <Route path="/entertainment">
            <Entertainment />
          </Route>
          <Route path="/exile">
            <Exile />
          </Route>
          <Route path="/capital">
            <Capital />
          </Route>
          <Route path="/everyday">
            <Everyday />
          </Route>
          <Route path="/editorial">
            <Editorial />
          </Route>
          <Route path="/viewers-opinion">
            <ViewersOpinion />
          </Route>
          <Route path="/opinion">
            <Opinion />
          </Route>
          <Route path="/islam-life">
            <IslamLife />
          </Route>
          <Route path="/all-together">
            <AllTogether />
          </Route>
          <Route path="/upstairs">
            <Upstairs />
          </Route>
          <Route path="/social-media">
            <SocialMedia />
          </Route>
          <Route path="/literature">
            <Literature />
          </Route>
          <Route path="/doctor-available">
            <DoctorAvailable />
          </Route>
          <Route path="/various">
            <Various />
          </Route>
          <Route path="/bicchu">
            <Bicchu />
          </Route>
          <Route path="/interview">
            <Interview />
          </Route>
          <Route path="/suranjona">
            <Suranjona />
          </Route>
          <Route path="/corporate-news">
            <CorporateNews />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </NewsContext.Provider>
  );
}

export default App;
