import React from 'react';

const ClientBadge = ({ imageUrl }) => {
  const badgeStyles = {
    container: {
      width: '120px', 
      height: '100px', 
      backgroundColor: '#ccc', 
      borderRadius: '8px', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden', 
      paddingright:'60px',
    },
    imageContainer: {
      width: '60px', 
      height: '60px', 
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  };

  return (
    <div style={badgeStyles.container}>
      <div style={badgeStyles.imageContainer}>
        {imageUrl && <img src={imageUrl} alt="Badge" style={badgeStyles.image} />}
      </div>
    </div>
  );
};

export default ClientBadge;