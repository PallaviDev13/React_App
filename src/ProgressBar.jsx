import React, { useState, useEffect } from 'react';

function ProgressBar() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    // Simulate form progress, assuming all fields are required
    const totalFields = 4; // Example: user information has 4 fields
    const completedFields = 2; // Example: 2 fields completed

    setCompletion((completedFields / totalFields) * 100);
  }, []);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${completion}%` }}></div>
    </div>
  );
}

export default ProgressBar;
