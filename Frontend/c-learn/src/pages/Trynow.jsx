import React, { useState } from 'react';

function Trynow() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setResult(data.output);
    } catch (error) {
      setResult('Error: Unable to compile code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>C Compiler</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows="10"
          cols="50"
          placeholder="Enter C code here..."
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Compiling...' : 'Compile'}
        </button>
      </form>
      <pre>{result}</pre>
    </div>
  );
}

export default Trynow;

