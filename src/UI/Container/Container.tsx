import React from 'react';

const Container = ({ children }) => {
  return (
    <div style={{ width: '1300px', margin: '10px auto', position: 'relative' }}>
      {children}
    </div>
  );
};

export default Container;
