import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // For GitHub Flavored Markdown (tables, strikethrough, etc.)

function App() {
  const [context, setContext] = useState('');
  const [images, setImages] = useState([]);
  const [testCases, setTestCases] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('context', context);
    images.forEach((image) => formData.append('images', image));

    try {
      const response = await fetch('http://localhost:5000/api/describe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch test cases');
      }

      const data = await response.json();
      setTestCases(data.testCases);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Test Case Generator</h1>
      <textarea
        style={styles.textarea}
        placeholder="Optional Context"
        value={context}
        onChange={(e) => setContext(e.target.value)}
      />
      <input type="file" multiple onChange={handleImageUpload} style={styles.fileInput} />
      <button onClick={handleSubmit} style={styles.button} disabled={loading}>
        {loading ? 'Generating...' : 'Describe Testing Instructions'}
      </button>
      {error && <p style={styles.error}>Error: {error}</p>}
      {testCases && (
        <div style={styles.testCasesContainer}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {testCases}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  fileInput: {
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  testCasesContainer: {
    marginTop: '20px',
    textAlign: 'left',
  },
};

export default App;
