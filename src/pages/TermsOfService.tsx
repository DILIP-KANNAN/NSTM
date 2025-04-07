import React from "react";
import { useNavigate } from "react-router-dom";

const TermsOfService: React.FC = () => {
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
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p>By using our platform, you agree to comply with all applicable laws and regulations...</p>
      <br/>
      <ul>
        <li><strong>1. Introduction</strong><br/>
          Welcome to NSTM, a food ordering platform that allows users to browse, order, and pay for food online. By accessing and using our website, you agree to these Terms and Conditions. If you do not agree, please refrain from using our services.
        </li>
        <br/>
        <li><strong>2. User Agreement</strong>
          <ul>
            <li>You must be at least 18 years old to use our services or have parental consent.</li>
            <li>Users must provide accurate and up-to-date information during registration.</li>
            <li>We reserve the right to terminate accounts for any violation of these terms.</li>
          </ul>
        </li>
        <br/>
        <li><strong>3. Ordering & Payments</strong>
          <ul>
            <li>All orders are subject to availability and acceptance by the restaurant.</li>
            <li>Payments must be made via approved payment methods, including Razorpay.</li>
            <li>Once an order is confirmed, modifications or cancellations may not be possible.</li>
            <li>In case of payment failure, NSTM is not liable for any bank or transaction charges.</li>
          </ul>
        </li>
        <br/>
        <li><strong>4. Delivery Policy</strong>
          <ul>
            <li>Estimated delivery times are provided by restaurants and may vary.</li>
            <li>Users can come and collect the food at the stall at the choosen timeslot (1 hour interval) and don't have to wait longer.</li>
            <li>If the timeslot (1 hour interval) isn't maintained properly stall isn't responsible and guarantee on your waiting time.</li>
          </ul>
        </li>
        <br/>
        <li><strong>5. Refund & Cancellation Policy</strong>
          <ul>
            <li>Orders cannot be canceled once food preparation begins.</li>
            <li>Refunds will only be issued in case of non-delivery or incorrect items.</li>
            <li>Refund requests must be raised within 24 hours of the issue.</li>
            <li>Razorpay’s refund policies apply to transactions processed through them.</li>
          </ul>
        </li>
        <br/>
        <li><strong>6. Privacy Policy</strong>
          <ul>
            <li>User data is collected only for order processing and service improvement.</li>
            <li>NSTM does not store sensitive payment information.</li>
            <li>For more details, please review our Privacy Policy.</li>
          </ul>
        </li>
        <br/>
        <li><strong>7. Liability & Disclaimers</strong>
          <ul>
            <li>NSTM is not responsible for food quality, allergies, or health issues arising from consumption.</li>
            <li>We act as an intermediary and are not liable for delays, missing items, or unsatisfactory food quality.</li>
          </ul>
        </li>
        <br/>
        <li><strong>8. Governing Law & Disputes</strong>
          <ul>
            <li>These terms are governed by the laws of India.</li>
            <li>Any disputes must be resolved through arbitration or in courts of Chennai.</li>
          </ul>
        </li>
        <br/>
        <li>By using NSTM, you agree to these terms and conditions.</li>
      </ul>

    </div>
  );
};

export default TermsOfService;