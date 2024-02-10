import React from "react";
import QRCode from "qrcode.react";

const GenQr = ({ phoneNumber }) => {
  const handleQRCodeScan = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      <h2>Scan the QR Code to Call</h2>
      <QRCode value={`tel:${phoneNumber}`} />
      <p>Phone Number: {phoneNumber}</p>
      <p>Scan the QR code to initiate a call.</p>
      <button onClick={handleQRCodeScan}>Call Now</button>
    </div>
  );
};

export default GenQr;
