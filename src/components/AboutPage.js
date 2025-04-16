import React from "react";
import styled from "styled-components";
//import { Button } from '../components/ui/button'; 
import { Link } from "react-router-dom"; 
import images from '../images';
//import { CgOverflow } from "react-icons/cg"; 

const SectionButton = styled.button`
  background-color: #ffe0d9;
  color: #cc665e;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  outline: none;
`;

const AboutPage = () => {
  return (
    <div>
      <PartnerWithUs />
      <ITSolutions />
    </div>
  );
};

const PartnerWithUs = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Top Section */}
        <div style={styles.topSection}>
          {/* Left Image */}
          <img src={images['ONE.jpg']} alt="names" style={styles.leftImage} />

          {/* Right Content */}
          <div style={styles.rightContent}>
            <SectionButton style={styles.sectionButton}>About Techify</SectionButton>
            <h2 style={styles.h2}>Discover the Reasons to Partner With Us</h2>
            <p style={styles.uniqueValue}>
              Here's what makes us a great partner:
            </p>

            <ul style={styles.featureList}>
              <li style={styles.listItem}>
                <div style={styles.featureTitle}>Client-centric Approach</div>
                <p style={styles.featureDescription}>
                  We prioritize our clients' needs and objectives, tailoring
                  solutions that align with their .
                </p>
              </li>
              <li style={styles.listItem}>
                <div style={styles.featureTitle}>Quality Assurance</div>
                <p style={styles.featureDescription}>
                  Quality is embedded in everything we do, from initial planning
                  to deployment.
                </p>
              </li>
            </ul>
            <a href="#" style={styles.aboutUsLink}>
              About Us →
            </a>
          </div>
        </div>
        <div className="partner-with-us-card" style={styles.progressCard}>
          <div className="progress-circle" style={styles.progressCircle}>
            <svg width="100" height="100">
              <circle cx="50" cy="50" r="45" stroke="#e0e0e0" strokeWidth="10" fill="transparent" />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#007bff"
                strokeWidth="5"
                fill="transparent"
                strokeDasharray={`calc(2 * 3.14 * 45 * 0.84) calc(2 * 3.14 * 45 * 0.16)`}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="progress-text" style={styles.progressText}>
              Progress
              <span className="progress-value" style={styles.progressValue}>84%</span>
            </div>
          </div>
          <ul className="progress-legend" style={styles.progressLegend}>
            <li>
              <span className="legend-color analysis" style={{ ...styles.legendColor, backgroundColor: '#007bff' }}></span> Analysis
            </li>
            <li>
              <span className="legend-color consultancy" style={{ ...styles.legendColor, backgroundColor: '#28a745' }}></span> Consultancy
            </li>
            <li>
              <span className="legend-color structuring" style={{ ...styles.legendColor, backgroundColor: '#ffc107' }}></span> Structuring
            </li>
          </ul>
        </div>
      </div>

   
      <div style={styles.middleSection}>
        <SectionButton style={styles.sectionButton}>Exclusive Features</SectionButton>
        <h3 style={styles.h3}>Elevating Your Digital Experience</h3>
        <div style={styles.featuresGrid}>
          <FeatureCard
            icon="💰"
            title="Cost-effective Solutions"
            description="We understand the importance of cost efficiency. Our cost-effective solutions guarantee maximum value for your investment."
            link="#"
          />

          <FeatureCard
            icon="🔓"
            title="Security at the Core"
            description="Security is at the heart of everything we do. We employ industry-leading practices to safeguard your data & applications."
            link="#"
          />

          <FeatureCard
            icon="💬"
            title="Easy Communication"
            description="We believe in complete transparency throughout the project lifecycle. You'll receive regular updates, detailed reports."
            link="#"
          />
        </div>


        
        <div style={styles.bottomSection}>
          Need any help or question don't worry! <a href="#" style={styles.helpLink}>Hit the Button</a>
        </div>
      </div>
    </div>
  );
};


const FeatureCard = ({ icon, title, description, link }) => (
  <div style={styles.featureCard}>
    <div style={{ fontSize: "2em", color: getIconColor(icon), marginBottom: "15px" }}>
      {icon}
    </div>
    <div style={styles.featureCardTitle}>{title}</div>
    <p style={styles.featureCardDescription}>{description}</p>
    <a href={link} style={styles.readMoreLink}>Read More →</a>
  </div>
);


const getIconColor = (icon) => {
  switch (icon) {
    case "💰":
      return "#28a745";
    case "🔓":
      return "#dc3545";
    case "💬":
      return "#ffc107";
    default:
      return "#000";
  }
};

// Inline Styles
const styles = {
  body: {
    fontFamily: "sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f7f7f7",
  },
  container: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  },
  topSection: {
    display: "flex",
    gap: "30px",
    marginBottom: "40px",
  },
  leftImage: {
    flex: 1,
    maxWidth: "50%",
    borderRadius: "8px",
  },
  rightContent: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
  },
  sectionButton: {
    backgroundColor: '#ffe0d9',
    color: '#cc665e',
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    outline: 'none',
    marginBottom: "10px",
  },
  h2: {
    color: "#333",
    fontSize: "2.2em",
    marginBottom: "15px",
  },
  uniqueValue: {
    color: "#666",
    lineHeight: 1.6,
    marginBottom: "20px",
  },
  featureItem: {
    marginBottom: "15px",
    paddingLeft: "25px",
    position: "relative",
  },
  featureTitle: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: "5px",
  },
  featureDescription: {
    color: "black",
    lineHeight: 1.5,
  },
  aboutUsLink: {
    marginTop: "20px",
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  middleSection: {
    textAlign: "center",
    marginBottom: "40px",
  },
  h3: {
    color: "#333",
    fontSize: "1.8em",
    marginBottom: "20px",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  featureCard: {
    backgroundColor: "#f9f9f9",
    padding: "25px",
    borderRadius: "6px",
    textAlign: "left",
    border: "1px solid #eee",
  },
  featureCardTitle: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: "10px",
  },
  featureCardDescription: {
    color: "#777",
    lineHeight: 1.5,
    marginBottom: "15px",
  },
  readMoreLink: {
    display: "inline-block",
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.9em",
  },
  bottomSection: {
    textAlign: "center",
    color: "#777",
    fontSize: "0.9em",
    marginTop: "30px",
  },
  helpLink: {
    color: "#007bff",
    textDecoration: "none",
  },
  featureList: {
    listStyle: "square",
    paddingLeft: "20px",
    marginBottom: "20px",
    color: '#ff7f50',
  },
  listItem: {
    marginBottom: "15px",
  },
  bulletPoint: {
    marginRight: "5px",
  },
  progressCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginTop: '30px',
  },
  progressCircle: {
    position: 'relative',
    width: '100px',
    height: '100px',
  },
  progressText: {
    position: 'relative',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  progressValue: {
    fontSize: '1.2em',
    color: '#007bff',
  },
  progressLegend: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  legendColor: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '5px',
  },
};



const ITSolutions = () => {
  return (
    <div style={itStyles.container}>
      <div style={itStyles.leftSection}>
        <img src={images["11.jpg"]} alt="Team Collaboration" style={{ maxWidth: "100%", borderRadius: "6px" }} />
      </div>
      <div style={itStyles.rightSection}>
        <SectionButton style={itStyles.sectionButton}>Why Choose Us</SectionButton>
        <h2 style={itStyles.h2}>We Execute Our Ideas From Start To Finish</h2>
        <p style={itStyles.uniqueValue}>
          Feel free to expand upon this heading by adding bullet points or
          paragraphs that highlight the unique value.
        </p>
        <ul style={itStyles.featureList}>
          <li>Safeguarding Your Digital Frontier. </li>
          <li>Empower Your Business with Innovative Solutions.</li>
          <li>Partner with Us for IT Success.</li>
        </ul>
      </div>
    </div>
  );
};

const itStyles = {
  container: {
    maxWidth: "1000px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
    display: "flex",
    gap: "30px",
    alignItems: "flex-start",
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flex: 1,
    padding: "20px",
  },
  sectionButton: {
    backgroundColor: '#ffe0d9',
    color: '#cc665e',
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    outline: 'none',
    marginBottom: "10px",
  },
  h2: {
    color: "#333",
    fontSize: "2em",
    marginBottom: "15px",
  },
  uniqueValue: {
    color: "#666",
    lineHeight: 1.5,
    marginBottom: "20px",
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    color: "#444",
    fontWeight: "bold",
    lineHeight: '2',
  },
};

export default AboutPage;