import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [inputs, setInputs] = useState({
    midtermPercent: '30',
    finalPercent: '40',
    quizPercent: '15',
    assignmentPercent: '15',
    midtermGrade: '',
    finalGrade: '',
    quizGrade: '',
    assignmentGrade: '',
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const calculateTotal = () => {
    const {
      midtermPercent,
      finalPercent,
      quizPercent,
      assignmentPercent,
      midtermGrade,
      finalGrade,
      quizGrade,
      assignmentGrade,
    } = inputs;

    if (midtermPercent === '' || midtermGrade === '') {
      alert('Midterm grade and percent are required!');
      return;
    }

    const values = {
      midtermPercent: parseFloat(midtermPercent) || 0,
      finalPercent: parseFloat(finalPercent) || 0,
      quizPercent: parseFloat(quizPercent) || 0,
      assignmentPercent: parseFloat(assignmentPercent) || 0,
      midtermGrade: parseFloat(midtermGrade) || 0,
      finalGrade: parseFloat(finalGrade) || 0,
      quizGrade: parseFloat(quizGrade) || 0,
      assignmentGrade: parseFloat(assignmentGrade) || 0,
    };

    const total =
      (values.midtermGrade * values.midtermPercent) / 100 +
      (values.finalGrade * values.finalPercent) / 100 +
      (values.quizGrade * values.quizPercent) / 100 +
      (values.assignmentGrade * values.assignmentPercent) / 100;

    setResult(total.toFixed(2));

    if (inputs.finalGrade === '') {
      const needed = (50 - total) / (values.finalPercent / 100);

      if (values.finalPercent > 0) {
        if (needed <= 100) {
          alert(`You need at least ${needed.toFixed(2)} in the Final to pass.`);
        } else {
          alert(`Even if you get 100 in the Final, you can't pass.`);
        }
      } else {
        alert(`You didn't enter a final grade and the percent is 0.`);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Grade Calculator v1.1.0</h2>

      <div className="row">
        <div className="col-md-6">
          <h5>Percent Weights (%)</h5>
          <div className="form-group mb-3">
            <label>Midterm</label>
            <input type="number" name="midtermPercent" className="form-control" value={inputs.midtermPercent} onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label>Final <small className="text-muted">(optional)</small></label>
            <input type="number" name="finalPercent" className="form-control" value={inputs.finalPercent} onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label>Quiz <small className="text-muted">(optional)</small></label>
            <input type="number" name="quizPercent" className="form-control" value={inputs.quizPercent} onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label>Assignment <small className="text-muted">(optional)</small></label>
            <input type="number" name="assignmentPercent" className="form-control" value={inputs.assignmentPercent} onChange={handleChange} />
          </div>
        </div>

        <div className="col-md-6">
          <h5>Grades (out of 100)</h5>
          <div className="form-group mb-3">
            <label>Midterm</label>
            <input type="number" name="midtermGrade" className="form-control" onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label>Final <small className="text-muted">(optional)</small></label>
            <input type="number" name="finalGrade" className="form-control" onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label>Quiz <small className="text-muted">(optional)</small></label>
            <input type="number" name="quizGrade" className="form-control" onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label>Assignment <small className="text-muted">(optional)</small></label>
            <input type="number" name="assignmentGrade" className="form-control" onChange={handleChange} />
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={calculateTotal}>
          Calculate Total
        </button>

        {result !== null && (
          <div className="mt-3 alert alert-info">
            Total Grade: <strong>{result}</strong>{' '}
            {result >= 50 ? '✅ Passed' : '❌ Failed'}
          </div>
        )}
      </div>

      <footer className="text-center mt-5 text-muted">
        Developed by <strong>ABDULLAH BAMALHAS</strong> © 2025
      </footer>
    </div>
  );
}

export default App;
