import React from 'react';

const FreeConsultation = () => {
  const styles = {
    body: {
      fontFamily: 'sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f7f7f7',
      lineHeight: 1.6,
    },
    ctaSection: {
      maxWidth: '1200px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    ctaBanner: {
      backgroundColor: '#ff7043',
      color: '#fff',
      padding: '40px',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
    },
    ctaText: {
      textAlign: 'left',
      flex: '1 1 300px',
    },
    getInTouch: {
      fontSize: '0.9em',
      marginBottom: '10px',
    },
    heading: {
      fontSize: '1.8em',
      marginBottom: '20px',
      lineHeight: 1.3,
    },
    button: {
      backgroundColor: '#fff',
      color: '#ff7043',
      border: 'none',
      padding: '15px 30px',
      borderRadius: '6px',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '1em',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#f0f0f0',
    },
    trusted: {
      color: '#777',
      fontSize: '0.9em',
      marginTop: '30px',
      marginBottom: '15px',
    },
    logoContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    logo: {
      color: '#555',
      fontWeight: 'bold',
      fontSize: '1.1em',
      padding: '10px 15px',
      border: '1px solid #ddd',
      borderRadius: '4px',
    },
    itcore: { color: '#007bff' },
    solar: { color: '#ffc107' },
    rental: { color: '#28a745' },
    query: { color: '#dc3545' },
    fourpix: { color: '#6c757d' },
    it: { color: '#17a2b8' },
  };

  return (
    <div style={styles.body}>
      <section style={styles.ctaSection}>
        <div style={styles.ctaBanner}>
          <div style={styles.ctaText}>
            <div style={styles.getInTouch}>Get in Touch</div>
            <h2 style={styles.heading}>Ready to Get Free Consultation for Any Kind of IT Solution</h2>
          </div>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
          >
            Contact Us
          </button>
        </div>

        <div style={styles.trusted}>Trusted by <span style={{ color: 'orange' }}>10,000+</span> companies around the world</div>
        <div style={styles.logoContainer}>
          <div style={{ ...styles.logo, ...styles.itcore }}>ITCORE</div>
          <div style={{ ...styles.logo, ...styles.solar }}>SOLAR</div>
          <div style={{ ...styles.logo, ...styles.rental }}>RENTAL</div>
          <div style={{ ...styles.logo, ...styles.query }}>Query</div>
          <div style={{ ...styles.logo, ...styles.fourpix }}>fourpix.</div>
          <div style={{ ...styles.logo, ...styles.it }}>IT</div>
        </div>
      </section>
    </div>
  );
};

export default FreeConsultation;
