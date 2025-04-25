import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import images from '../images';
import ClientBadge from './ui/ClientBadge';
import imageOne from '../images/ONE.jpg';
import imageFive from '../images/5.jpg';
import imageEleven from '../images/11.jpg';



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

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 15px;
  }
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
  const CombinedCard = ({ imageLeftSrc, chartImageSrc, imageRightSrc, progress }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    return (
      <div style={combinedCardStyles.cardContainer}>
        <div style={combinedCardStyles.topRow}>
          <img src={imageOne} alt="Image 1" style={combinedCardStyles.imageLeft} />
          <div style={combinedCardStyles.chartContainer}>
            <ClientBadge imageUrl={imageFive} />
          </div>
        </div>
        <div style={combinedCardStyles.bottomRow}>
          <div style={combinedCardStyles.progressContainer}>
            <svg width="100" height="100">
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="#e0e0e0"
                strokeWidth="10"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="#007bff"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform={`rotate(-90 50 50)`}
                style={{ transition: 'stroke-dashoffset 0.3s ease-in-out' }}
              />
            </svg>
            <span style={combinedCardStyles.progressText} >{progress}%</span>
            <ul style={combinedCardStyles.progressLabelList}>
              <li style={{ listStyleType: 'disc', marginRight: '15px' }}>Analysis</li>
              <li style={{ listStyleType: 'disc', marginRight: '15px' }}>Consultancy</li>
              <li style={{ listStyleType: 'disc' }}>Structuring</li>
            </ul>
          </div>
          <img src={imageEleven} alt="Image 2" style={combinedCardStyles.imageRight} />
        </div>
      </div>
    );
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {/* Top Section */}
        <div style={styles.topSection}>

          <CombinedCard progress={84} />
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
                  solutions that align with their goals.
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
            <Link to="/about" style={styles.aboutUsLink}>
              About Us →
            </Link>
          </div>
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
          Need any help or question don't worry! <Link to="/contact" style={styles.helpLink}>Hit the Button</Link>
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
    <Link to={link} style={styles.readMoreLink}>Read More →</Link>
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

// Inline Styles for PartnerWithUs and FeatureCard
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
    "@media (max-width: 768px)": {
      padding: "20px",
      margin: "20px auto",
    },
  },
  topSection: {
    display: "flex",
    gap: "30px",
    marginBottom: "40px",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      gap: "20px",
    },
  },
  leftImage: {
    flex: 1,
    maxWidth: "50%",
    borderRadius: "8px",
    "@media (max-width: 768px)": {
      maxWidth: "100%",
    },
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
    "@media (max-width: 768px)": {
      fontSize: "14px",
      padding: "8px 15px",
    },
  },
  h2: {
    color: "#333",
    fontSize: "2.2em",
    marginBottom: "15px",
    "@media (max-width: 768px)": {
      fontSize: "1.8em",
    },
  },
  uniqueValue: {
    color: "#666",
    lineHeight: 1.6,
    marginBottom: "20px",
  },
  featureList: {
    listStyle: "square",
    paddingLeft: "20px",
    marginBottom: "20px",
    color: 'black',
    fontSize: "0.9em",
    "@media (max-width: 768px)": {
      paddingLeft: "15px",
      marginBottom: "15px",
    },
  },
  listItem: {
    marginBottom: "15px",
    "@media (max-width: 768px)": {
      marginBottom: "10px",
    },
  },
  aboutUsLink: {
    marginTop: "20px",
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: '0.9em',
    "@media(max-width:768px)": {
      marginTop: "15px",
    },
  },
  middleSection: {
    textAlign: "center",
    marginBottom: "40px",
    padding: "0 20px",
    "@media (max-width: 768px)": {
      marginBottom: "30px",
      padding: "0 15px",
    },
  },
  h3: {
    color: "#333",
    fontSize: "1.8em",
    marginBottom: "20px",
    "@media (max-width: 768px)": {
      fontSize: "1.5em",
      marginBottom: "15px",
    },
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    "@media (max-width: 768px)": {
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "15px",
    },
    "@media (max-width: 576px)": {
      gridTemplateColumns: "1fr",
    },
  },
  featureCard: {
    backgroundColor: "#f9f9f9",
    padding: "25px",
    borderRadius: "6px",
    textAlign: "left",
    border: "1px solid #eee",
    "@media (max-width: 768px)": {
      padding: "20px",
    },
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
    "@media (max-width: 768px)": {
      fontSize: "0.85em",
    },
  },
  bottomSection: {
    textAlign: "center",
    color: "#777",
    fontSize: "0.9em",
    marginTop: "30px",
    "@media (max-width: 768px)": {
      fontSize: "0.85em",
      marginTop: "20px",
    },
  },
  helpLink: {
    color: "#007bff",
    textDecoration: "none",
  },
  progressCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginTop: '30px',
    "@media (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      marginTop: "20px",
    },
  },
  progressCircle: {
    position: 'relative',
    width: '100px',
    height: '100px',
    "@media (max-width: 768px)": {
      width: '80px',
      height: '80px',
    },
  },
  progressText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: "1em",
    "@media (max-width: 768px)": {
      fontSize: "0.9em",
    },
  },
  progressValue: {
    fontSize: '1.2em',
    color: '#007bff',
    "@media (max-width: 768px)": {
      fontSize: '1em',
    },
  },
  progressLegend: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    textAlign: 'left',
    "@media (max-width: 768px)": {
      fontSize: "0.85em",
    },
  },
  legendColor: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '5px',
    "@media (max-width: 768px)": {
      width: '8px',
      height: '8px',
      marginRight: '3px',
    },
  },
};

const ITSolutions = () => {
  return (
    <div style={itStyles.container}>
      <div style={itStyles.leftSection}>
        <img src={images["11.jpg"]} alt="Team Collaboration" style={itStyles.image} />
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
    "@media (max-width: 768px)": {
      flexDirection: "column",
      padding: "20px",
      margin: "20px auto",
      gap: "20px",
      alignItems: "stretch",
    },
  },
  leftSection: {
    flex: 1,
    "@media (max-width: 768px)": {
      order: 2,
      marginBottom: "15px",
    },
  },
  rightSection: {
    flex: 1,
    padding: "20px",
    "@media (max-width: 768px)": {
      padding: "15px",
    },
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
    "@media (max-width: 768px)": {
      fontSize: "14px",
      padding: "8px 15px",
      marginBottom: "8px",
    },
  },
  h2: {
    color: "#333",
    fontSize: "2em",
    marginBottom: "15px",
    "@media (max-width: 768px)": {
      fontSize: "1.8em",
      marginBottom: "10px",
      "@media (max-width: 576px)": {
        fontSize: "1.5em",
      },
    },
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
    fontSize: "0.9em",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "6px",
  },
};




const combinedCardStyles = {
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '600px',
    '@media (max-width: 768px)': {
      padding: '15px',
    },
    '@media(max-width:320px)':{
      padding:'10px',
    },
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
    '@media(max-width:768px)': {
      flexDirection: 'coloumn',
      alignItems: 'center',
    },
    '@media(max-width:320px)':{
      flexDirection: 'column',
          alignItems: 'center',
    },

  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media(max-width:768px)': {
      flexDirection: 'column-reverse',
      alignItems: 'center',

    },
    '@media(max-width:320px)':{
      flexDirection: 'column-reverse',
          alignItems: 'center',
    },
  },
  imageLeft: {
    maxWidth: '45%',
    borderRadius: '6px',
    '@media(max-width:768px)': {
      marginRight: '0', 
      marginBottom: '10px'
    },
    '@media(max-width:320px)':{
      width: '80px',
          height: '80px',
          marginBottom: '10px',
    },
  },
  imageRight: {
    maxWidth: '45%',
    borderRadius: '6px',
    '@media(max-width:768px)': {
      marginLeft: '0',
    },
    '@media(max-width:320px)':{
      width: '80px',
      height: '80px',
      marginLeft: '0',
    },
  },
  progressContainer: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flex: 1,
    marginRight: '10px',
    '@media(max-width:768px)': {
      marginRight: '0',
      marginBottom: '10px',
      width: '100%',
    },
    '@media(max-width:320px)':{
      marginRight: '0',
          marginBottom: '10px',
          width: '100%',
    },
  },
  progressBar: {
    height: '10px',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    flex: 1,
  },
  progressValue: {
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: '5px',
  },
  progressText: {
    marginLeft: '10px',
    position: 'absolute',
    fontWeight: 'bold',
    top: '50%',
    left: '40px',
    bottom: '50%',
    '@media(max-width:320px)':{
      fontSize: '20px',
    },
  },
  chartContainer: {
    textAlign: 'center',

    maxWidth: '45%',
  },
  chartImage: {
    maxWidth: '100%',
  },
  progressInfoList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  progressText: {
    fontWeight: 'bold',
    fontSize: '1.2em',
    marginBottom: '5px',
  },
  progressLabelList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: '0.9em',
    color: '#555',
    position: 'absolute',
    left: '50%',
  },
};


export default AboutPage;