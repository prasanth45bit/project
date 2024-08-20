import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Trynow.css';

function Trynow() {
  const location = useLocation();
  
  // Extract 'code', 'question_id', and 'content_id' from the location state
  const [code, setCode] = useState(location.state?.code || ''); 
  const [question_id, setQuestion_Id] = useState(location.state?.question_id || ''); 
  const [content_id, setContent_Id] = useState(location.state?.content_id || ''); 
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    // Fetch the question using both question_id and content_id
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`http://localhost:8081/question/${question_id}/${content_id}`);
        const data = await response.json();
        
        if (data && data.question) {
          setQuestion(data.question);
        } else {
          setQuestion('Question not found');
        }
      } catch (error) {
        console.error('Error fetching question:', error);
        setQuestion('Error fetching question');
      }
    };

    if (question_id && content_id) {
      fetchQuestion();
    }
  }, [question_id, content_id]);

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
      <h2>{question}</h2> 
      <form className='Full-page' onSubmit={handleSubmit}>
        <textarea className='compiler'
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
