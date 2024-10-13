import React from 'react';

const Key = () => {
  // Inline styles
  const styles = {
    keyContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      animation: 'wave 5s ease-in-out infinite', // Wave animation
    },
    keyHead: {
      width: '80px',
      height: '50px',
      backgroundColor: '#6a0dad', // Neon purple
      borderRadius: '50% 50% 0 0', // Rounded top edges
      boxShadow: '0 0 20px #6a0dad, 0 0 40px #6a0dad, 0 0 60px #6a0dad', // Neon glow
      marginBottom: '10px',
      position: 'relative',
    },
    keyBody: {
      width: '20px',
      height: '100px',
      backgroundColor: '#6a0dad', // Purple key body
      boxShadow: '0 0 15px #6a0dad, 0 0 30px #6a0dad', // Neon glow for body
      position: 'relative',
    },
    keyBodyBefore: {
      content: '""',
      position: 'absolute',
      top: '-5px',
      left: '-10px',
      width: '40px',
      height: '5px',
      backgroundColor: '#6a0dad',
      boxShadow: '0 0 10px #6a0dad, 0 0 20px #6a0dad', // Additional glow for detail
    },
    keyTeeth: {
      width: '10px',
      height: '20px',
      backgroundColor: '#6a0dad', // Teeth of the key
      marginTop: '5px',
      marginLeft: '5px',
      boxShadow: '0 0 10px #6a0dad', // Neon glow for teeth
    },
    keyTeethSmall: {
      width: '5px',
      height: '15px',
    },
    keyframes: `
      @keyframes wave {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(5deg); }
        50% { transform: rotate(0deg); }
        75% { transform: rotate(-5deg); }
        100% { transform: rotate(0deg); }
      }
    `,
  };

  return (
    <div>
      {/* Insert keyframes style into the document */}
      <style>{styles.keyframes}</style>

      <div style={styles.keyContainer}>
        <div style={styles.keyHead}></div>
        <div style={styles.keyBody}>
          <div style={styles.keyTeeth}></div>
          <div style={{ ...styles.keyTeeth, ...styles.keyTeethSmall }}></div>
        </div>
      </div>
    </div>
  );
};

export default Key;
