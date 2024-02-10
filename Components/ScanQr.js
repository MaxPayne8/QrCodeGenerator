import React, { useState } from "react";
import QRCode from "qrcode.react";

const PhoneQRCode = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [qrToken, setQrToken] = useState("");

  const generateQrCode = () => {
    // Generate a unique identifier or token
    const uniqueToken = Math.random().toString(36).substring(7);
    setQrToken(uniqueToken);
  };

  const handleQRCodeScan = () => {
    // On QR code scan, you can send the qrToken to the server
    // and map it to the corresponding phoneNumber on the server side.
    alert(`Initiating call for token: ${qrToken}`);
  };

  return (
    <div>
      <h2>Generate a QR Code to Call</h2>
      <label>
        Enter Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
        />
      </label>
      <button onClick={generateQrCode}>Generate QR Code</button>
      {qrToken && (
        <>
          <QRCode value={`tel:${qrToken}`} />
          <p>Scan the QR code to initiate a call.</p>
          <button onClick={handleQRCodeScan}>Call Now</button>
        </>
      )}
    </div>
  );
};

export default PhoneQRCode;
