import React from "react";
import "../component/qr.css";
import qrImage from "../images/image-qr-code.png";

const QrCode = () => {
  return (
    <>
      <div className="card">
        <div className="card__img">
          <img src={qrImage} alt="qr-code" />
        </div>
        <div className="card__text">
          <p className="heading__text">
            Improve your front-end skills by building projects{" "}
          </p>
          <p className="para">
            {" "}
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
};

export default QrCode;
