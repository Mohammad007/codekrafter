import React, { useEffect, useState } from "react";
import {
  Apple,
  Layers,
  Lock,
  Cpu,
  MapPin,
  Calendar,
  DollarSign,
  Briefcase,
  Search,
  Filter,
} from "lucide-react";
import { useDispatch } from "react-redux";
import {
  Col,
  Container,
  Row,
  Button,
  Card,
  Modal,
  Form,
  InputGroup,
  RangeSlider,
} from "react-bootstrap";
import { BaseUrl } from "../BaseUrl";
import { addSettingsData } from "../Redux/SliceData/SliceData";
import MegaMenu from "../main-components/MegaMenu";
import Footer from "../main-components/Footer";
import { SectionHeader } from "../ITCompany/android/components/common/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

export function Career() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    salaryRange: "0",
    experience: "",
    jobType: "",
    skills: "",
    designation: "",
  });
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    (async () => {
      // Fetch settings data from API
      const settings = await fetch(`${BaseUrl}/settings`);
      const settingsJson = await settings.json();
      dispatch(addSettingsData(settingsJson?.settings));
    })();
  }, []);

  const jobs = [
    {
      title: "Software Engineer",
      location: "Remote",
      description: "Develop and maintain cutting-edge web applications.",
      salary: "$80,000 - $120,000",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["React", "Node.js", "JavaScript"],
      designation: "Senior Developer",
    },
    {
      title: "UX Designer",
      location: "New York, USA",
      description:
        "Design user-friendly interfaces and improve user experience.",
      salary: "$70,000 - $100,000",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Figma", "Adobe XD", "UI/UX"],
      designation: "Lead Designer",
    },
    {
      title: "Project Manager",
      location: "London, UK",
      description: "Manage projects and ensure timely delivery.",
      salary: "$90,000 - $130,000",
      type: "Full-time",
      experience: "5+ years",
      skills: ["Agile", "Scrum", "Team Management"],
      designation: "Senior Manager",
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      description:
        "Build and maintain CI/CD pipelines and cloud infrastructure.",
      salary: "$85,000 - $125,000",
      type: "Full-time",
      experience: "3-6 years",
      skills: ["AWS", "Docker", "Kubernetes"],
      designation: "DevOps Lead",
    },
    {
      title: "Mobile Developer",
      location: "San Francisco, USA",
      description: "Create innovative mobile applications for iOS and Android.",
      salary: "$95,000 - $140,000",
      type: "Full-time",
      experience: "4-7 years",
      skills: ["React Native", "iOS", "Android"],
      designation: "Senior Mobile Developer",
    },
    {
      title: "Data Scientist",
      location: "Berlin, Germany",
      description: "Analyze complex data sets and build predictive models.",
      salary: "$75,000 - $115,000",
      type: "Full-time",
      experience: "2-5 years",
      skills: ["Python", "Machine Learning", "SQL"],
      designation: "Data Science Engineer",
    },
  ];

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const jobSalaryRange = parseInt(job.salary.replace(/[^0-9]/g, ''));
      const filterSalaryRange = parseInt(filters.salaryRange) * 100000;
      
      return (
        (!filters.location ||
          job.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())) &&
        (filters.salaryRange === "0" || jobSalaryRange <= filterSalaryRange) &&
        (!filters.experience || job.experience.includes(filters.experience)) &&
        (!filters.jobType ||
          job.type.toLowerCase().includes(filters.jobType)) &&
        (!filters.skills ||
          job.skills.some((skill) =>
            skill.toLowerCase().includes(filters.skills.toLowerCase())
          )) &&
        (!filters.designation ||
          job.designation
            .toLowerCase()
            .includes(filters.designation.toLowerCase()))
      );
    });
    setFilteredJobs(filtered);
  }, [filters]);

  console.log(filters);


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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              type="career"
              title="Join the Visom6 Team"
              description="Visom6 offers employees the opportunity to work in a global environment using the latest technologies and scope for immense growth. Our values and culture aim to promote diligence, teamwork, and mutual respect. You're good learner, an innovator, always striving to be the best you can be. Looking for new opportunities for growth? Check out our job openings and apply today!"
            />
          </motion.div>

          <Container fluid className="mt-5 mb-5">
            <motion.h2
              className="text-center mb-5"
              style={{
                padding: "8px",
                backgroundColor: "#293478",
                color: "white",
                fontSize: "30px",
                fontWeight: "bold",
              }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              Open Positions
            </motion.h2>
            <Row>
              {/* Filters Section - Left Side */}
              <Col md={3}>
                <Card className="shadow-sm mb-4">
                  <Card.Body>
                    <h5 className="mb-3">Filters</h5>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Filter by location"
                          onChange={(e) =>
                            setFilters({ ...filters, location: e.target.value })
                          }
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Salary Range (in Lacks)</Form.Label>
                        <Form.Range
                          min={0}
                          max={5}
                          step={0.5}
                          value={filters.salaryRange}
                          onChange={(e) =>
                            setFilters({
                              ...filters,
                              salaryRange: e.target.value,
                            })
                          }
                        />
                        <div className="d-flex justify-content-between">
                          <span>0L</span>
                          <span>{filters.salaryRange}L</span>
                          {/* <span>5L</span> */}
                        </div>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Experience</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Years of experience"
                          onChange={(e) =>
                            setFilters({
                              ...filters,
                              experience: e.target.value,
                            })
                          }
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Job Type</Form.Label>
                        <Form.Select
                          onChange={(e) =>
                            setFilters({ ...filters, jobType: e.target.value })
                          }
                          value={filters.jobType}
                        >
                          <option value="">All Types</option>
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Skills</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Required skills"
                          onChange={(e) =>
                            setFilters({ ...filters, skills: e.target.value })
                          }
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Job designation"
                          onChange={(e) =>
                            setFilters({
                              ...filters,
                              designation: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>

              {/* Jobs Listing - Right Side */}
              <Col md={9}>
                <Row>
                  <AnimatePresence>
                    {(filteredJobs.length > 0 ? filteredJobs : jobs).map(
                      (job, index) => (
                        <Col md={6} key={index} className="mb-4">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{
                              scale: 1.05,
                              transition: { duration: 0.2 },
                            }}
                            style={{ height: "100%" }}
                          >
                            <Card className="h-100 shadow-sm">
                              <Card.Body className="d-flex flex-column">
                                <Card.Title
                                  style={{
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    color: "#293478",
                                  }}
                                >
                                  {job.title}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                  <MapPin
                                    className="inline-block mr-1"
                                    size={16}
                                  />{" "}
                                  {job.location}
                                </Card.Subtitle>
                                <div className="mb-3">
                                  <div className="text-muted mb-1">
                                    <DollarSign
                                      className="inline-block mr-1"
                                      size={16}
                                    />{" "}
                                    {job.salary}
                                  </div>
                                  <div className="text-muted mb-1">
                                    <Briefcase
                                      className="inline-block mr-1"
                                      size={16}
                                    />{" "}
                                    {job.type}
                                  </div>
                                  <div className="text-muted mb-1">
                                    <Calendar
                                      className="inline-block mr-1"
                                      size={16}
                                    />{" "}
                                    {job.experience}
                                  </div>
                                  <div className="text-muted">
                                    <div className="d-flex flex-wrap gap-1 mt-2">
                                      {job.skills.map((skill, i) => (
                                        <span
                                          key={i}
                                          className="badge bg-light text-dark me-1"
                                        >
                                          {skill}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <Card.Text className="flex-grow-1">
                                  {job.description.substring(0, 50)}
                                  &nbsp; &nbsp;
                                  <a 
                                    href="#" 
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setSelectedDescription(job.description);
                                      setShowDescriptionModal(true);
                                    }}
                                    style={{ color: "#293478", fontWeight: "bold", textDecoration: "underline" }}
                                  >
                                    Read more
                                  </a>
                                </Card.Text>
                                <Button
                                  style={{
                                    backgroundColor: "#293478",
                                    borderColor: "#293478",
                                    color: "white",
                                  }}
                                  onClick={() => {
                                    setSelectedJob(job);
                                    setShowModal(true);
                                  }}
                                >
                                  Apply Now
                                </Button>
                              </Card.Body>
                            </Card>
                          </motion.div>
                        </Col>
                      )
                    )}
                  </AnimatePresence>
                </Row>
              </Col>
            </Row>
          </Container>

          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            size="lg"
            style={{ marginTop: "100px" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Apply for {selectedJob?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter full name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter phone number"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Resume/CV</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Cover Letter</Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button
                style={{ backgroundColor: "#293478", borderColor: "#293478" }}
              >
                Submit Application
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={showDescriptionModal}
            onHide={() => setShowDescriptionModal(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Job Description</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedDescription}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowDescriptionModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Footer />
        </div>
      </div>
    </>
  );
}
