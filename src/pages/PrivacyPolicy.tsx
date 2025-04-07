import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto p-6">
      <button 
        onClick={() => navigate("/")} 
        className="absolute top-4 left-4 bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded"
      >
        ← Back
      </button>
      <br/>
      <br/>
      <br/>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>We collect user data such as name, email, and order details to improve our services...</p>
      <p>NSTM is committed to protecting your privacy. This policy outlines how we collect, use, and protect your data:
<br/>
        Information Collected: We collect your name, phone number, and order details solely for processing your pre-orders.
        <br/>
        Data Usage: Your information is used only for fulfilling orders and improving our services. We do not share or sell your data.
        <br/>
        Security: We implement security measures to protect your data from unauthorized access.
        <br/>
        Third-Party Services: Payments are processed securely through Razorpay or similar trusted services, and we do not store payment details.
        <br/>
        Data Retention: Order details are retained for service analysis but can be deleted upon request.
        <br/>
        If you have any privacy concerns, feel free to contact us.</p>
    </div>
  );
};

export default PrivacyPolicy;