import React from 'react';

function Upload({ onUpload }) {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const json = JSON.parse(e.target.result);
      onUpload(json);
    };
    reader.readAsText(file);
  };

  return (
    <div className="upload">
      <input type="file" accept=".json" onChange={handleFileUpload} />
    </div>
  );
}

export default Upload;
