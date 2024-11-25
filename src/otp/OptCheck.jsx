import React, { useState } from "react";
import '../otp/style.css';

const OptCheck = () => {
  const [step, setStep] = useState(1); // Step 1: Mobile input, Step 2: OTP input
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleSendOtp = () => {
    if (mobileNumber.length === 10) {
      const otpGenerated = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit OTP
      setGeneratedOtp(otpGenerated);
      console.log("Mock OTP:", otpGenerated); // Replace with actual API call to send OTP
      alert("OTP sent to your mobile!");
      setStep(2); // Proceed to OTP verification
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
     setIsVerified(true);
      alert("Mobile number verified successfully!");
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  };

  const handleRegistration = () => {
    if (isVerified) {
      alert(`Registration successful for mobile: ${mobileNumber}`);
      console.log(step);
      // Handle further registration logic, e.g., save user data to the backend
    } else {
      alert("Please verify your mobile number first.");
    }
    
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Registration</h1>
      {step === 1 && (
        <div>
          <h2>Enter Mobile Number</h2>
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            maxLength={10}
          />
          <br />
          <button onClick={handleSendOtp} style={{ marginTop: "10px" }}>
            Send OTP
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Enter OTP</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={4}
          />
          <br />
          <button onClick={handleVerifyOtp} style={{ marginTop: "10px" }}>
            Verify OTP
          </button>
        </div>
      )}
      {isVerified && (
        <div>
          <h2>Mobile Verified</h2>
          <button onClick={handleRegistration} style={{ marginTop: "10px" }}>
            Complete Registration
          </button>
        </div>
      )}
    
    </div>
  );
};

export default OptCheck;
