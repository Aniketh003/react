import './App.css';
import React, { useState } from 'react';

const generateQR = (url, size) => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size ? size : "300x300"}&data=${url}`
}

function App() {
  const [url, setUrl] = useState("");
  const [size, setSize] = useState("");
  return (
      <div className="qr-container">
        <h1 className='qr-title'>QR Code Generator</h1>
        <div className="input-container">
            <label className='input-label'>QR URL:</label>
            <input className='input-feild' type="text" placeholder='enter the url' value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <div className="input-container">
            <label className='input-label'>QR SIZE:</label>
            <input className='input-feild' type="text" placeholder='example (150x150)' value={size} onChange={(e) => setSize(e.target.value)} />
        </div>
        <div className="qr-img">
        {
          url ? 
                <img src={generateQR(url, size)} className='qr-image' alt='QR Code' /> : <></>
        }
        </div>
      </div>
  );
}

export default App;
