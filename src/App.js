import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'; 

function App() {
  const [midterm, setMidterm] = useState('');
  const [final, setFinal] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const mid = parseFloat(midterm);
    const fin = parseFloat(final);
    const passingGrade = 50; 

    if (isNaN(mid) || mid < 0 || mid > 100) {
      setResult('Please enter a valid midterm grade (0-100).');
      return;
    }

    if (final === '') {
      const requiredFinal = (passingGrade - (mid * 0.4)) / 0.6;
      if (requiredFinal > 100) {
        setResult('Sorry, it’s impossible to pass with this midterm grade.');
      } else {
        setResult(`You need at least ${requiredFinal.toFixed(2)} in the final to pass.`);
      }
    } else {
      if (isNaN(fin) || fin < 0 || fin > 100) {
        setResult('Please enter a valid final grade (0-100).');
        return;
      }

      const total = (mid * 0.4) + (fin * 0.6);
      if (total >= passingGrade) {
        setResult(`✅ You passed! Your total grade is ${total.toFixed(2)}.`);
      } else {
        setResult(`❌ You failed. Your total grade is ${total.toFixed(2)}.`);
      }
    }
  };

  return (
    <div className="min-vh-100 bg-secondary">
  <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
    <div className="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
      <div className="card-body">
        <h3 className="card-title text-center mb-4">🎓 Grade Calculator</h3>

       
        <div className="mb-3">
          <label className="form-label">Midterm Grade</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter midterm grade"
            value={midterm}
            onChange={(e) => setMidterm(e.target.value)}
          />
        </div>

        
        <div className="mb-3">
          <label className="form-label">Final Grade (optional)</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter final grade"
            value={final}
            onChange={(e) => setFinal(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" onClick={handleCalculate}>
          Calculate
        </button>

        
      Developer: ABDULLAH BAMALHAS   &nbsp;|&nbsp;&nbsp;Version: 1.0.0
        
        
        {result && (
          <div className="alert alert-info mt-4" role="alert">
            {result}
          </div>
        )}
      </div>
    </div>
  </div>
  </div>
);
}

export default App;
