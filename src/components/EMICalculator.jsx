import React, { useState } from "react";
import { FaRupeeSign, FaPercentage, FaRegClock } from "react-icons/fa";
import "./emicalculator.css";

const EMICalculator = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [tenureType, setTenureType] = useState("yearly");
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateEMI = () => {
    if (!amount || !rate || !tenure) return;

    let principal = parseFloat(amount);
    let interestRate = parseFloat(rate) / 100 / 12;
    let months =
      tenureType === "yearly" ? parseInt(tenure) * 12 : parseInt(tenure);

    let emiValue =
      (principal * interestRate * Math.pow(1 + interestRate, months)) /
      (Math.pow(1 + interestRate, months) - 1);

    let totalPay = emiValue * months;
    let totalInt = totalPay - principal;

    setEmi(emiValue.toFixed(2));
    setTotalInterest(totalInt.toFixed(2));
    setTotalPayment(totalPay.toFixed(2));
  };

  return (
    <section className="emi-section">
      <h2 className="emi-heading">Calculate EMI</h2>

      <div className="emi-wrapper">
        {/* Left Side - Input */}
        <div className="emi-left">
          <h3 className="emi-title">EMI Calculator</h3>

          <div className="form-group">
            <label>Amount</label>
            <div className="input-icon">
              <FaRupeeSign className="icon" />
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Interest Rate</label>
            <div className="input-icon">
              <FaPercentage className="icon" />
              <input
                type="number"
                placeholder="Enter rate (%)"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Loan Tenure</label>
            <div className="input-icon">
              <FaRegClock className="icon" />
              <input
                type="number"
                placeholder="Enter tenure"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </div>
          </div>

          <div className="form-radio">
            <label>
              <input
                type="radio"
                value="yearly"
                checked={tenureType === "yearly"}
                onChange={() => setTenureType("yearly")}
              />
              Yearly
            </label>
            <label>
              <input
                type="radio"
                value="monthly"
                checked={tenureType === "monthly"}
                onChange={() => setTenureType("monthly")}
              />
              Monthly
            </label>
          </div>

          <button className="calculate-btn" onClick={calculateEMI}>
            Calculate
          </button>
        </div>

        {/* Right Side - Results */}
        <div className="emi-right">
          <div className="emi-result">
            <h4>Loan EMI</h4>
            <p>₹ {emi}</p>
          </div>
          <div className="emi-result">
            <h4>Total Interest Payable</h4>
            <p>₹ {totalInterest}</p>
          </div>
          <div className="emi-result">
            <h4>Total of Payments (Principal + Interest)</h4>
            <p>₹ {totalPayment}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;