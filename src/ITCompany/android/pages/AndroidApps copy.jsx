import React, { useEffect } from "react";
import { ServiceCard } from "../components/cards/ServiceCard";
import { SectionHeader } from "../components/common/SectionHeader";
import { FeatureGrid } from "../components/common/FeatureGrid";
import { TechnologyStack } from "../components/sections/TechnologyStack";
import { RecentProjects } from "../components/sections/RecentProjects";
import { Smartphone, Code, Shield, Zap, GitBranch, Cpu, Database, Layout, Settings, Bug, Users, MessageSquare, ShoppingCart, MapPin, Film, Brain, Wifi, Store, BarChart2, Tool, RefreshCw } from "lucide-react";
import MegaMenu from "../../../main-components/MegaMenu";
import Footer from "../../../main-components/Footer";
import { useDispatch } from "react-redux";
import { BaseUrl } from "../../../BaseUrl";
import { addSettingsData } from "../../../Redux/SliceData/SliceData";
import { Col, Row } from "react-bootstrap";

const features = [
  { icon: Smartphone, text: "Modern UI/UX" },
  { icon: Code, text: "Clean Architecture" },
  { icon: Shield, text: "Security First" },
  { icon: Zap, text: "Fast Performance" },
];

const methods = [
  { icon: GitBranch, text: "Agile Development" },
  { icon: Code, text: "Test-Driven Development (TDD)" },
  { icon: RefreshCw, text: "Continuous Integration/Continuous Deployment (CI/CD)" },
  { icon: Cpu, text: "Modular Development" },
  { icon: GitBranch, text: "Version Control" },
];

const tools = [
  { icon: Layout, text: "Android Studio" },
  { icon: Code, text: "IntelliJ IDEA" },
  { icon: GitBranch, text: "Git" },
  { icon: Database, text: "Bitbucket" },
  { icon: Database, text: "Firebase" },
  { icon: Database, text: "AWS Amplify" },
  { icon: Smartphone, text: "Genymotion" },
  { icon: Smartphone, text: "Android Virtual Devices (AVD)" },
  { icon: Settings, text: "Appium" },
  { icon: Bug, text: "Espresso" },
  { icon: Bug, text: "Selenium" },
  { icon: Settings, text: "Logcat" },
  { icon: Bug, text: "Stetho" },
  { icon: Bug, text: "LeakCanary" },
];

const designTools = [
  { icon: Layout, text: "Figma" },
  { icon: Layout, text: "Adobe XD" },
  { icon: Layout, text: "Sketch" },
  { icon: Layout, text: "InVision" }
];

const pastFeatures = [
  { icon: MessageSquare, text: "Real-Time Messaging" },
  { icon: ShoppingCart, text: "E-Commerce Solutions" },
  { icon: MapPin, text: "Geo-Location Services" },
  { icon: Film, text: "Multimedia Streaming" },
  { icon: Brain, text: "AI-Powered Features" },
  { icon: Wifi, text: "Offline Functionality" },
];

const maintenanceFeatures = [
  { icon: Store, text: "Play Store Compliance" },
  { icon: BarChart2, text: "ASO (App Store Optimization)" },
  { icon: Bug, text: "Beta Testing" },
  { icon: RefreshCw, text: "Regular Updates" },
  { icon: Tool, text: "Performance Monitoring" },
  { icon: Tool, text: "Bug Fixes" },
  { icon: Users, text: "User Engagement" },
];

export function AndroidApps() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      // settings API
      const settings = await fetch(`${BaseUrl}/settings`);
      const settingsJson = await settings.json();
      dispatch(addSettingsData(settingsJson.settings));
    })();
  }, [dispatch]);

  return (
    <>
      <MegaMenu />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="py-16 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Android App Development"
            description="Building powerful and scalable Android applications"
          />

          <Row className="g-4">
            <Col md={4}>
              <ServiceCard
                title="Native Android Development"
                description="We create high-performance native Android applications using Kotlin and Java"
                features={[
                  "Material Design Implementation",
                  "Native Performance Optimization",
                  "Secure Data Management",
                  "Seamless API Integration",
                ]}
                image="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              />
            </Col>
            <Col md={4}>
              <ServiceCard
                title="Cross-Platform Solutions"
                description="Develop once, deploy everywhere with our cross-platform expertise"
                features={[
                  "React Native Development",
                  "Flutter Applications",
                  "Code Reusability",
                  "Consistent User Experience",
                ]}
                image="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              />
            </Col>
            <Col md={4}>
              <ServiceCard
                title="Expert Maintenance"
                description="Ensuring your app thrives post-launch with our maintenance services"
                features={maintenanceFeatures}
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              />
            </Col>
          </Row>

          <FeatureGrid features={features} />

          <SectionHeader
            title="Our Development Methods"
            description="Explore the methodologies we follow to create exceptional applications."
          />
          <ul>
            {methods.map((method, index) => (
              <li key={index}>{method}</li>
            ))}
          </ul>

          <SectionHeader
            title="Tools We Use"
            description="Our cutting-edge tools ensure high efficiency and performance."
          />
          <ul>
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>

          <SectionHeader
            title="Design Tools & Features"
            description="Creating user-centric, interactive designs for exceptional experiences."
          />
          <ul>
            {designTools.map((designTool, index) => (
              <li key={index}>{designTool}</li>
            ))}
          </ul>

          <SectionHeader
            title="Features We Have Developed"
            description="A glimpse into the diverse functionalities we’ve delivered."
          />
          <ul>
            {pastFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <TechnologyStack />
          <RecentProjects />
        </div>
      </div>
      <Footer />
    </>
  );
}
