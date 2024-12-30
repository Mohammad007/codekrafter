import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "../component/Loading";
import { Career } from "../career/Career";
import { AndroidApps } from "../ITCompany/android/pages/AndroidApps";
import { IosApps } from "../ITCompany/ios/pages/IosApps";
import { HybridApps } from "../ITCompany/hybrid/pages/HybridApps";
import { ProgressiveApps } from "../ITCompany/progressive/pages/ProgressiveApps";
import { CorporateWebsite } from "../ITCompany/corporateWebsite/pages/CorporateWebsite";

const About = React.lazy(() => import("../page-components/About"));
const AppFrame = React.lazy(() => import("../page-components/AppFrame"));
const Consulting = React.lazy(() => import("../page-components/Consulting"));
const Contact = React.lazy(() => import("../page-components/Contact"));
const Digital = React.lazy(() => import("../page-components/Digital"));
const Home = React.lazy(() => import("../page-components/Home"));
const Industries = React.lazy(() => import("../page-components/Industries"));
const Inside = React.lazy(() => import("../page-components/Inside"));
const Saas = React.lazy(() => import("../page-components/Saas"));
const WebFrame = React.lazy(() => import("../page-components/WebFrame"));
const WebDetails = React.lazy(() => import("../WebDetails"));
const ProductsFilter = React.lazy(() => import("../component/ProductsFilter"));
const ProjectView = React.lazy(() => import("../component/ProjectView"));
const ProjectList = React.lazy(() => import("../component/ProjectList"));


const RouterPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/android-apps" element={<AndroidApps />} />
          <Route exact path="/ios-apps" element={<IosApps />} />
          <Route exact path="/hybrid-apps" element={<HybridApps />} />
          <Route exact path="/progressive-apps" element={<ProgressiveApps />} />
          <Route exact path="/corporate-website" element={<CorporateWebsite />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/digital-marketing" element={<Digital />} />
          <Route exact path="/consulting-services" element={<Consulting />} />
          <Route exact path="/application-development" element={<AppFrame />} />
          <Route exact path="/industries" element={<Industries />} />
          <Route exact path="/website-development" element={<WebFrame />} />
          <Route exact path="/saas-services" element={<Saas />} />
          <Route exact path="/inside" element={<Inside />} />
          <Route exact path="/websitedetails/:name/:id" element={<WebDetails />} />
          <Route exact path="/Products" element={<ProductsFilter />} />
          {/* <Route exact path="/ProjectView/:id" element={<ProjectView />} /> */}
          {/* <Route exact path="/ProjectView/:slug" element={<ProjectView />} /> */}
          <Route exact path="/ProjectView/:category/:title" element={<ProjectView />} />
          <Route exact path="/ProjectList/:name/:id" element={<ProjectList />} />
          <Route exact path="/career" element={<Career />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default RouterPage;
