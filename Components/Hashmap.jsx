// src/NeonHashmap.js

import React from 'react';

const NeonHashmap = () => {
    const hashmapEntries = [
        { key: 'Key 1', value: 'Value 1' },
        { key: 'Key 2', value: 'Value 2' },
        { key: 'Key 3', value: 'Value 3' },
        { key: 'Key 4', value: 'Value 4' },
    ];

    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#0a0a0a', // Dark background for neon effect
            margin: 0,
            padding: '20px',
        },
        hashmap: {
            backgroundColor: '#1a1a1a', // Darker background for the hashmap
            border: '2px solid rgba(255, 255, 0, 0.7)', // Neon yellow border
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 0 20px rgba(255, 255, 0, 0.5)', // Neon glow effect
            maxWidth: '400px',
            margin: 'auto',
            position: 'relative',
            overflow: 'hidden', // Ensures child elements don't overflow
        },
        entry: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            borderBottom: '1px solid rgba(255, 255, 0, 0.3)', // Neon yellow line between entries
            transition: 'background 0.3s', // Smooth hover effect
        },
        key: {
            fontWeight: 'bold',
            color: '#ffeb3b', // Bright neon yellow
            textShadow: '0 0 5px rgba(255, 255, 0, 0.8)', // Glow effect
        },
        value: {
            color: '#ffd600', // Slightly different yellow for contrast
            textShadow: '0 0 5px rgba(255, 255, 0, 0.5)', // Glow effect
        },
        entryHover: {
            backgroundColor: 'rgba(255, 255, 0, 0.1)', // Subtle background change on hover
            cursor: 'pointer', // Changes cursor on hover
        },
    };

    return (
        <div style={styles.body}>
            <div style={styles.hashmap}>
                {hashmapEntries.map((entry, index) => (
                    <div
                        style={styles.entry}
                        key={index}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.entryHover.backgroundColor)}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '')}
                    >
                        <span style={styles.key}>{entry.key}:</span>
                        <span style={styles.value}>{entry.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NeonHashmap;
