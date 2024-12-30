import React, { useEffect, useRef, useState } from "react";
import { ServiceCard } from "../components/cards/ServiceCard";
import { SectionHeader } from "../components/common/SectionHeader";
import { FeatureGrid } from "../components/common/FeatureGrid";
import { TechnologyStack } from "../components/sections/TechnologyStack";
import { RecentProjects } from "../components/sections/RecentProjects";
import {
  Smartphone,
  Code,
  Shield,
  Zap,
  Code2,
  Database,
  Server,
  Globe,
  Cpu,
  Cloud,
  GitBranch,
  Layout,
  Settings,
  Bug,
  Users,
  MessageSquare,
  ShoppingCart,
  MapPin,
  Film,
  Brain,
  Wifi,
  Store,
  BarChart2,
  RefreshCw,
  Figma,
} from "lucide-react";
import MegaMenu from "../../../main-components/MegaMenu";
import Footer from "../../../main-components/Footer";
import { useDispatch } from "react-redux";
import { BaseUrl } from "../../../BaseUrl";
import { addSettingsData } from "../../../Redux/SliceData/SliceData";
import { Col, Container, Row, Card } from "react-bootstrap";
import { FadeInView } from "../components/animations/FadeInView";
import { motion } from "framer-motion";
import gsap from "gsap";
import AnimationJson from "../lottie/Animation1.json";
import Lottie from "react-lottie";

const features = [
  { icon: Smartphone, text: "Modern UI/UX" },
  { icon: Code, text: "Clean Architecture" },
  { icon: Shield, text: "Security First" },
  { icon: Zap, text: "Fast Performance" },
];

const technologies = [
  {
    icon: Code2,
    name: "React Native",
    category: "Frontend",
    url: "https://reactnative.dev/img/header_logo.svg",
  },
  {
    icon: Database,
    name: "SQLite",
    category: "Database",
    url: "https://www.sqlite.org/favicon.ico",
  },
  {
    icon: Server,
    name: "Node.js",
    category: "Backend",
    url: "https://nodejs.org/favicon.ico",
  },
  {
    icon: Smartphone,
    name: "Kotlin",
    category: "Mobile",
    url: "https://kotlinlang.org/assets/images/favicon.svg?v2",
  },
  {
    icon: Globe,
    name: "REST APIs",
    category: "Integration",
    url: "https://www.restapitutorial.com/images/logo.png",
  },
  {
    icon: Shield,
    name: "OAuth 2.0",
    category: "Security",
    url: "https://oauth.net/favicon.ico",
  },
  {
    icon: Cpu,
    name: "Swift",
    category: "iOS",
    url: "https://developer.apple.com/favicon.ico",
  },
  {
    icon: Cloud,
    name: "AWS",
    category: "Cloud",
    url: "https://aws.amazon.com/favicon.ico",
  },
];

const methods = [
  { icon: GitBranch, name: "Agile Development" },
  { icon: Code, name: "Test-Driven Development (TDD)" },
  {
    icon: RefreshCw,
    name: "Continuous Integration/Continuous Deployment (CI/CD)",
  },
  { icon: Cpu, name: "Modular Development" },
  { icon: GitBranch, name: "Version Control" },
];

const tools = [
  {
    icon: Layout,
    name: "Android Studio",
    url: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
  },
  {
    icon: Code,
    name: "IntelliJ IDEA",
    url: "https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png",
  },
  {
    icon: GitBranch,
    name: "Git",
    url: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    icon: Database,
    name: "Bitbucket",
    url: "https://bitbucket.org/favicon.ico",
  },
  {
    icon: Database,
    name: "Firebase",
    url: "https://firebase.google.com/favicon.ico",
  },
  {
    icon: Database,
    name: "AWS Amplify",
    url: "https://docs.amplify.aws/assets/logo-dark.svg",
  },
  {
    icon: Smartphone,
    name: "Genymotion",
    url: "https://www.genymotion.com/favicon.ico",
  },
  {
    icon: Smartphone,
    name: "Android Virtual Devices (AVD)",
    url: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
  },
  {
    icon: Settings,
    name: "Appium",
    url: "https://appium.io/docs/en/2.0/assets/images/appium-logo-horiz.png",
  },
  {
    icon: Bug,
    name: "Espresso",
    url: "https://developer.android.com/static/images/training/testing/espresso.png",
  },
  {
    icon: Bug,
    name: "Selenium",
    url: "https://www.selenium.dev/images/selenium_logo_square_green.png",
  },
  {
    icon: Settings,
    name: "Logcat",
    url: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
  },
  {
    icon: Bug,
    name: "Stetho",
    url: "https://facebook.github.io/stetho/static/logo.png",
  },
  {
    icon: Bug,
    name: "LeakCanary",
    url: "https://square.github.io/leakcanary/images/logo.png",
  },
];

const designTools = [
  {
    icon: Figma,
    name: "Figma",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
  },
  { icon: Layout, name: "Adobe XD", url: "https://www.adobe.com/favicon.ico" },
  { icon: Layout, name: "Sketch", url: "https://www.sketch.com/favicon.ico" },
  {
    icon: Layout,
    name: "InVision",
    url: "https://www.invisionapp.com/favicon.ico",
  },
];

const pastFeatures = [
  { icon: MessageSquare, name: "Real-Time Messaging" },
  { icon: ShoppingCart, name: "E-Commerce Solutions" },
  { icon: MapPin, name: "Geo-Location Services" },
  { icon: Film, name: "Multimedia Streaming" },
  { icon: Brain, name: "AI-Powered Features" },
  { icon: Wifi, name: "Offline Functionality" },
];

const maintenanceFeatures = [
  { icon: Store, name: "Play Store Compliance" },
  { icon: BarChart2, name: "ASO (App Store Optimization)" },
  { icon: Bug, name: "Beta Testing" },
  { icon: RefreshCw, name: "Regular Updates" },
  { icon: Users, name: "User Engagement" },
];

export function AndroidApps() {
  const dispatch = useDispatch();
  const techStackRef = useRef(null);
  const ipadRef = useRef(null);
  const pencilRef = useRef(null);
  const textRef = useRef(null);
  const [Maintenance, setMaintenance] = useState(null);

  useEffect(() => {
    (async () => {
      const settings = await fetch(`${BaseUrl}/settings`);
      const settingsJson = await settings.json();
      dispatch(addSettingsData(settingsJson.settings));
    })();

    // GSAP Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ipadRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.from(ipadRef.current, {
      rotationY: 45,
      rotationX: 45,
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    })
      .from(
        pencilRef.current,
        {
          x: -100,
          rotation: -45,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=1"
      )
      .from(textRef.current, {
        opacity: 0,
        duration: 1,
        onStart: () => {
          // Animate text writing
          const text = "CodeKrafters";
          const element = textRef.current;
          element.innerHTML = "";
          let i = 0;
          const writeText = setInterval(() => {
            if (i < text.length) {
              element.innerHTML += text.charAt(i);
              i++;
            } else {
              clearInterval(writeText);
            }
          }, 150);
        },
      });

    // Floating animation
    gsap.to([ipadRef.current, pencilRef.current], {
      y: "+=15",
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      stagger: 0.2,
    });
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
          </Row>

          <FeatureGrid features={features} />
          <br />
          <br />
          <div
            ref={techStackRef}
            className="tech-stack-container"
            style={{ overflow: "hidden", backgroundColor: "#c6c7da" }}
          >
            <Container fluid className="py-5">
              <Container>
                <FadeInView>
                  <div className="text-center mb-5">
                    <motion.h2
                      className="display-5 fw-bold mb-3"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ color: "#293478" }}
                    >
                      Our Technology Stack
                    </motion.h2>
                    <motion.p
                      className="lead text-dark"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Cutting-edge technologies we use to build amazing
                      applications.
                    </motion.p>
                  </div>
                </FadeInView>
                <motion.div
                  className="tech-stack-slider"
                  animate={{ x: [-1000, -3000] }}
                  transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Row
                    className="g-4 flex-nowrap"
                    style={{ width: "fit-content" }}
                  >
                    {[...technologies, ...technologies].map((tech, index) => (
                      <Col key={index} style={{ minWidth: "250px" }}>
                        <FadeInView delay={index * 0.1}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              ease: "easeOut",
                            }}
                          >
                            <Card
                              className="h-100 border-0 text-center p-3 position-relative"
                              style={{
                                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                                height: "160px",
                                marginTop: "40px",
                              }}
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  top: "-30px",
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                }}
                              >
                                <img
                                  src={tech?.url}
                                  alt={tech?.name}
                                  style={{
                                    width: "60px",
                                    height: "60px",
                                    padding: "6px",
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                                  }}
                                />
                              </div>
                              <Card.Body>
                                <Card.Title
                                  className="fw-bold mb-1 mt-3"
                                  style={{ color: "#293478", fontSize: "1rem" }}
                                >
                                  {tech?.name}
                                </Card.Title>
                                <Card.Text
                                  className="text-dark"
                                  style={{ fontSize: "0.9rem" }}
                                >
                                  {tech?.category}
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </motion.div>
                        </FadeInView>
                      </Col>
                    ))}
                  </Row>
                </motion.div>
              </Container>
            </Container>
          </div>
          <br />
          <Container fluid className="py-5 bg-white">
            <Container>
              <FadeInView>
                <div className="text-center mb-5">
                  <motion.h2
                    className="display-5 fw-bold mb-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: "#293478" }}
                  >
                    Our Development Methods
                  </motion.h2>
                  <motion.p
                    className="lead text-dark"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Explore the methodologies we follow to create exceptional
                    applications.
                  </motion.p>
                </div>
              </FadeInView>
              <Row className="g-4">
                {[
                  { title: 'Agile Development', desc: 'Iterative progress through small, incremental steps. Teams work in sprints, adapting to changes quickly while delivering functional software frequently.' },
                  { title: 'Waterfall Model', desc: 'A linear approach where each phase is completed sequentially. Best suited for projects with clearly defined requirements.' },
                  { title: 'Scrum', desc: 'Organizes work into short cycles called sprints, emphasizing teamwork, accountability, and iterative progress toward defined goals.' },
                  { title: 'Kanban', desc: 'Visualizes the workflow, focusing on continuous delivery without overburdening the development team.' },
                  { title: 'Lean Development', desc: 'Emphasizes minimizing waste, optimizing efficiency, and delivering value to the customer through continuous improvement.' },
                  { title: 'DevOps', desc: 'Integrates development and operations teams to improve collaboration, automate processes, and ensure faster deployments.' },
                  { title: 'Rapid Development', desc: 'Prioritizes rapid prototyping over long planning, ideal for projects requiring quick adjustments to user feedback.' },
                  { title: 'Extreme Programming', desc: 'Emphasizes high-quality code through practices like pair programming, frequent releases, and extensive testing.' }
                ].map((method, index) => (
                  <Col key={index} xs={12} md={6} lg={3}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="p-3 h-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                        <h5 style={{ 
                          color: '#293478',
                          marginBottom: '1rem',
                          fontWeight: 'bold',
                          fontSize: '1.2rem'
                        }}>
                          {method.title}
                        </h5>
                        <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                          {method.desc}
                        </p>
                      </div>
                    </motion.div>
                  </Col>
                ))}
                <style>
                  {`
                    @keyframes blink {
                      0% { opacity: 1; }
                      50% { opacity: 0.5; }
                      100% { opacity: 1; }
                    }
                  `}
                </style>
              </Row>
            </Container>
          </Container>
          <br />
          <TechnologyStack
            technologies={tools}
            title="Tools We Use"
            description="Our cutting-edge tools ensure high efficiency and performance."
          />
          <br />
          <div>
            <Container fluid className="py-5 bg-white">
              <Container>
                <FadeInView>
                  <div className="text-center mb-5">
                    <motion.h2
                      className="display-5 fw-bold mb-3"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ color: "#293478" }}
                    >
                      Design Tools
                    </motion.h2>
                    <motion.p
                      className="lead text-dark"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      We use the latest and most effective technologies to
                      deliver top-notch Android app development services.
                    </motion.p>
                  </div>
                </FadeInView>
                <Row>
                  <Col xs={12} md={8}>
                    <div
                      style={{
                        perspective: "1000px",
                        position: "relative",
                        height: "600px",
                      }}
                    >
                      <motion.div
                        ref={ipadRef}
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "relative",
                          transformStyle: "preserve-3d",
                          borderRadius: "30px",
                          background:
                            "linear-gradient(145deg, #e6e6e6, #ffffff)",
                          boxShadow:
                            "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "5%",
                            left: "5%",
                            width: "90%",
                            height: "90%",
                            background: "#000",
                            borderRadius: "20px",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            ref={textRef}
                            style={{
                              color: "#fff",
                              fontSize: "3rem",
                              fontFamily: "monospace",
                              fontWeight: "bold",
                              letterSpacing: "0.2em",
                            }}
                          ></div>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={pencilRef}
                        style={{
                          position: "absolute",
                          top: "20%",
                          right: "-50px",
                          width: "200px",
                          height: "20px",
                          background:
                            "linear-gradient(145deg, #f0f0f0, #cacaca)",
                          borderRadius: "10px",
                          transformOrigin: "left center",
                        }}
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={4}>
                    <Row className="g-3">
                      {designTools.map((tech, index) => (
                        <Col key={index} xs={6} md={6}>
                          <FadeInView delay={index * 0.1}>
                            <motion.div
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                ease: "easeOut",
                              }}
                            >
                              <Card
                                className="border-0 text-center"
                                style={{
                                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                                  transition: "all 0.3s ease",
                                  borderRadius: "50%",
                                  width: "160px",
                                  height: "160px",
                                  margin: "0 auto",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  position: "relative",
                                  overflow: "hidden",
                                }}
                              >
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center p-2">
                                  <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      marginBottom: "8px",
                                    }}
                                  >
                                    {tech?.url ? (
                                      <img
                                        src={tech?.url}
                                        alt={tech?.name}
                                        style={{
                                          width: "48px",
                                          height: "48px",
                                          objectFit: "contain",
                                        }}
                                      />
                                    ) : (
                                      <tech.icon
                                        size={48}
                                        style={{ color: "#293478" }}
                                      />
                                    )}
                                  </motion.div>
                                  <Card.Title
                                    className="fw-bold m-0"
                                    style={{
                                      color: "#293478",
                                      fontSize: "0.9rem",
                                    }}
                                  >
                                    {tech?.name}
                                  </Card.Title>
                                  <Card.Text
                                    className="text-dark m-0 mt-1"
                                    style={{
                                      fontSize: "0.8rem",
                                    }}
                                  >
                                    {tech?.category}
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </motion.div>
                          </FadeInView>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
          <br />
          <div>
            <Container fluid className="py-5 bg-white">
              <Container>
                <FadeInView>
                  <div className="text-center mb-5">
                    <motion.h2
                      className="display-5 fw-bold mb-3"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ color: "#293478" }}
                    >
                      Features We Expertise In
                    </motion.h2>
                    <motion.p
                      className="lead text-dark"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Explore the features we've developed in the past.
                    </motion.p>
                  </div>
                </FadeInView>
                <div
                  className="feature-circle-container position-relative"
                  style={{ height: "800px", backgroundColor: "white" }}
                >
                  {/* Solar System Animation */}
                  <motion.div
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 60,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute"
                    }}
                  >
                    {/* Circle Outlines */}
                    <div
                      className="circle-outlines position-absolute top-50 start-50 translate-middle"
                      style={{
                        width: "750px",
                        height: "750px",
                        borderRadius: "50%",
                        border: "2px solid #293478",
                        opacity: 0.3
                      }}
                    />
                    <div 
                      className="circle-outlines position-absolute top-50 start-50 translate-middle"
                      style={{
                        width: "550px",
                        height: "550px", 
                        borderRadius: "50%",
                        border: "2px solid #293478",
                        opacity: 0.3
                      }}
                    />
                    <div
                      className="circle-outlines position-absolute top-50 start-50 translate-middle"
                      style={{
                        width: "350px",
                        height: "350px",
                        borderRadius: "50%", 
                        border: "2px solid #293478",
                        opacity: 0.3
                      }}
                    />

                    {/* Center Circle */}
                    <div
                      className="center-circle position-absolute top-50 start-50 translate-middle"
                      style={{
                        width: "150px",
                        height: "150px", 
                        borderRadius: "50%",
                        backgroundColor: "#293478",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        zIndex: 2,
                      }}
                    />

                    {/* Inner Circle Features */}
                    {pastFeatures.map((tech, index) => {
                      const angle = (index * 360) / pastFeatures.length;
                      const radius = 175;
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;

                      const colors = ["#FFA500", "#FF0000", "#008000", "#0000FF", "#000000", "#FFC0CB", "#87CEEB", "#FFFF00"];
                      const iconColor = colors[index % colors.length];

                      return (
                        <motion.div
                          key={`inner-${index}`}
                          className="feature-item position-absolute"
                          initial={{ x: x, y: y, opacity: 0 }}
                          animate={{ 
                            x: x,
                            y: y,
                            opacity: 1,
                            rotate: -360 // Counter-rotate to keep icons upright
                          }}
                          transition={{ 
                            opacity: { duration: 0.3, delay: index * 0.1 },
                            rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                          }}
                          style={{
                            left: "50%",
                            top: "50%",
                          }}
                        >
                          <div
                            className="feature-circle"
                            style={{
                              width: "80px",
                              height: "80px",
                              borderRadius: "50%",
                              backgroundColor: "white",
                              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                              gsap.to(e.currentTarget, {
                                scale: 1.2,
                                duration: 0.3,
                                ease: "power2.out",
                              });
                            }}
                            onMouseLeave={(e) => {
                              gsap.to(e.currentTarget, {
                                scale: 1,
                                duration: 0.3,
                                ease: "power2.in",
                              });
                            }}
                          >
                            {tech?.url ? (
                              <img
                                src={tech?.url}
                                alt={tech?.name}
                                style={{ width: "32px", height: "32px" }}
                              />
                            ) : (
                              <tech.icon size={32} style={{ color: iconColor }} />
                            )}
                          </div>
                        </motion.div>
                      );
                    })}

                    {/* Outer Circle Features */}
                    {[
                      { icon: ShoppingCart, name: "Payment" },
                      { icon: MessageSquare, name: "Chat" },
                      { icon: MapPin, name: "Logistics" },
                      { icon: Smartphone, name: "Wallet" },
                      { icon: BarChart2, name: "Bills" },
                      { icon: Store, name: "Wishlist" },
                      { icon: RefreshCw, name: "Trend" },
                      { icon: Globe, name: "News" },
                      { icon: Brain, name: "Analytics" },
                    ].map((tech, index) => {
                      const angle = (index * 360) / 9;
                      const radius = 275;
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;

                      const colors = ["#FFA500", "#FF0000", "#008000", "#0000FF", "#000000", "#FFC0CB", "#87CEEB", "#FFFF00"];
                      const iconColor = colors[index % colors.length];

                      return (
                        <motion.div
                          key={`outer-${index}`}
                          className="feature-item position-absolute"
                          initial={{ x: x, y: y, opacity: 0 }}
                          animate={{ 
                            x: x,
                            y: y,
                            opacity: 1,
                            rotate: -360 // Counter-rotate to keep icons upright
                          }}
                          transition={{ 
                            opacity: { duration: 0.3, delay: index * 0.1 },
                            rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                          }}
                          style={{
                            left: "50%",
                            top: "50%",
                          }}
                        >
                          <div
                            className="feature-circle"
                            style={{
                              width: "90px",
                              height: "90px",
                              borderRadius: "50%",
                              backgroundColor: "white",
                              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                              gsap.to(e.currentTarget, {
                                scale: 1.2,
                                duration: 0.3,
                                ease: "power2.out",
                              });
                            }}
                            onMouseLeave={(e) => {
                              gsap.to(e.currentTarget, {
                                scale: 1,
                                duration: 0.3,
                                ease: "power2.in",
                              });
                            }}
                          >
                            <tech.icon size={36} style={{ color: iconColor }} />
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </Container>
            </Container>
          </div>
          <br />
          <div>
            <Container fluid className="py-5 bg-white">
              <Container>
                <FadeInView>
                  <div className="text-center mb-5">
                    <motion.h2
                      className="display-5 fw-bold mb-3"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ color: "#293478" }}
                    >
                      Maintenance Features
                    </motion.h2>
                    <motion.p
                      className="lead text-dark"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Ensuring your app thrives post-launch with our maintenance
                      services.
                    </motion.p>
                  </div>
                </FadeInView>
                <Row className="g-4">
                  <Col md={6} className="d-flex align-items-center">
                    {Maintenance ? (
                      <div className="h-100">
                        <div>
                          <h3
                            className="fw-bold mb-4"
                            style={{ color: "#293478" }}
                          >
                            {Maintenance.name}
                          </h3>
                          <p className="text-dark mb-4">
                            Our dedicated team ensures your Android app stays
                            up-to-date and performs optimally through:
                          </p>
                          <ul className="list-unstyled">
                            <li className="mb-3">
                              <i className="bi bi-check2-circle text-primary me-2"></i>
                              Regular performance monitoring and optimization
                            </li>
                            <li className="mb-3">
                              <i className="bi bi-check2-circle text-primary me-2"></i>
                              Security patches and updates
                            </li>
                            <li className="mb-3">
                              <i className="bi bi-check2-circle text-primary me-2"></i>
                              User feedback implementation
                            </li>
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="h-100 d-flex align-items-center justify-content-center">
                        <Lottie
                          options={{
                            animationData: AnimationJson,
                            loop: true,
                            autoplay: true,
                          }}
                          style={{ width: "100%", maxWidth: "500px" }}
                        />
                      </div>
                    )}
                  </Col>
                  <Col md={6} className="d-flex align-items-center">
                    <Row className="g-4">
                      {maintenanceFeatures.map((tech, index) => (
                        <Col key={index} xs={6} md={4}>
                          <FadeInView delay={index * 0.1}>
                            <motion.div
                              whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 8px 16px rgba(0,0,0,0.12)",
                                borderRadius: "16px",
                              }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                ease: "easeOut",
                              }}
                            >
                              <Card
                                className="h-100 border-0 text-center p-3 card-hover-effect"
                                style={{
                                  boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
                                  transition: "all 0.5s ease",
                                  borderRadius: "12px",
                                  background:
                                    "linear-gradient(145deg, transparent 0%, transparent 100%)",
                                  position: "relative",
                                  overflow: "hidden",
                                }}
                                onMouseEnter={(e) => {
                                  setMaintenance(tech);
                                  const colors = [
                                    "#FFE5E5",
                                    "#E5FFE5",
                                    "#E5E5FF",
                                    "#FFFFE5",
                                    "#FFE5FF",
                                    "#E5FFFF",
                                  ];
                                  const randomColor =
                                    colors[
                                      Math.floor(Math.random() * colors.length)
                                    ];
                                  const elem = e.currentTarget;
                                  elem.style.background = randomColor;

                                  // Create water ripple effect
                                  const ripple = document.createElement("div");
                                  ripple.style.position = "absolute";
                                  ripple.style.width = "5px";
                                  ripple.style.height = "5px";
                                  ripple.style.background = randomColor;
                                  ripple.style.borderRadius = "50%";
                                  ripple.style.left = "50%";
                                  ripple.style.top = "50%";
                                  ripple.style.transform =
                                    "translate(-50%, -50%)";
                                  ripple.style.animation = "ripple 1s linear";
                                  elem.appendChild(ripple);

                                  // Remove ripple after animation ends
                                  ripple.addEventListener(
                                    "animationend",
                                    () => {
                                      ripple.remove();
                                    }
                                  );

                                  // Add keyframe animation
                                  if (
                                    !document.querySelector("#ripple-animation")
                                  ) {
                                    const style =
                                      document.createElement("style");
                                    style.id = "ripple-animation";
                                    style.textContent = `
                                      @keyframes ripple {
                                        0% {
                                          width: 5px;
                                          height: 5px;
                                          opacity: 1;
                                        }
                                        100% {
                                          width: 300px;
                                          height: 300px;
                                          opacity: 0;
                                        }
                                      }
                                    `;
                                    document.head.appendChild(style);
                                  }
                                }}
                                onMouseLeave={(e) => {
                                  const elem = e.currentTarget;
                                  elem.style.background =
                                    "linear-gradient(145deg, transparent 0%, transparent 100%)";
                                }}
                              >
                                <Card.Body>
                                  <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    {tech?.url ? (
                                      <img
                                        src={tech?.url}
                                        alt={tech?.name}
                                        className="mb-2"
                                        style={{
                                          width: "36px",
                                          height: "36px",
                                        }}
                                      />
                                    ) : (
                                      <tech.icon
                                        className="mb-2"
                                        size={36}
                                        style={{ color: "#293478" }}
                                      />
                                    )}
                                  </motion.div>
                                  <Card.Title
                                    className="fw-bold mb-1"
                                    style={{
                                      color: "#293478",
                                      fontSize: "0.9rem",
                                    }}
                                  >
                                    {tech?.name}
                                  </Card.Title>
                                </Card.Body>
                              </Card>
                            </motion.div>
                          </FadeInView>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>

          <RecentProjects />
        </div>
      </div>
      <Footer />
    </>
  );
}
