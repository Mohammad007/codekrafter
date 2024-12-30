import React, { useEffect } from 'react';
import { ServiceCard } from '../components/cards/ServiceCard';
import { SectionHeader } from '../components/common/SectionHeader';
import { FeatureGrid } from '../components/common/FeatureGrid';
import { TechnologyStack } from '../components/sections/TechnologyStack';
import { RecentProjects } from '../components/sections/RecentProjects';
import { Wifi, Zap, Shield, Smartphone } from 'lucide-react';
import MegaMenu from '../../../main-components/MegaMenu';
import Footer from '../../../main-components/Footer';
import { useDispatch } from 'react-redux';
import { BaseUrl } from '../../../BaseUrl';
import { addSettingsData } from '../../../Redux/SliceData/SliceData';
import { Col, Row } from 'react-bootstrap';

const features = [
  { icon: Wifi, text: "Offline Functionality" },
  { icon: Zap, text: "Fast Performance" },
  { icon: Shield, text: "Secure HTTPS" },
  { icon: Smartphone, text: "App-like Experience" }
];

export function ProgressiveApps() {
  const dispatch = useDispatch();
  useEffect(() => {

    ;(async () => {
      // settings api
      const settings = await fetch(`${BaseUrl}/settings`);
      const settingsJson = await settings.json();
      dispatch(addSettingsData(settingsJson.settings));

    })();

  }, []);
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
            title="Progressive App Development"
            description="Building cross-platform applications for diverse devices"
          />

          <Row className="g-4">
            <Col md={4}>
              <ServiceCard
                title="Progressive App Development"
                description="Building cross-platform applications for diverse devices"
                features={[
                  "SwiftUI Implementation",
                  "iOS Design Guidelines",
                  "Apple Hardware Integration",
                  "App Store Optimization",
                ]}
                image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              />
            </Col>
            <Col md={4}>
              <ServiceCard
                title="Progressive App Development"
                description="Building cross-platform applications for diverse devices"
                features={[
                  "Enterprise Distribution",
                  "MDM Integration",
                  "Corporate Security",
                  "Custom Business Logic",
                ]}
                image="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              />
            </Col>
            <Col md={4}>
              <ServiceCard
                title="Progressive App Development"
                description="Building cross-platform applications for diverse devices"
                features={[
                  "Enterprise Distribution",
                  "MDM Integration",
                  "Corporate Security",
                  "Custom Business Logic",
                ]}
                image="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              />
            </Col>
          </Row>

          <FeatureGrid features={features} />
          <br />
          <br />
          <TechnologyStack />
          <RecentProjects />
        </div>
      </div>
      <Footer />
    </>
  );
}
