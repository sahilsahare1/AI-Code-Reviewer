import {useState,useEffect} from 'react'
import Prism from 'prismjs';
// Import a theme from PrismJS (e.g., Okaidia, Tomorrow, Twilight, etc.)
import 'prismjs/themes/prism-okaidia.css'; 

// Import additional language syntax definitions as needed
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';

import Editor from "react-simple-code-editor"
import axios from "axios"
import Markdown from 'react-markdown'

const App = () => {

  const [prompt, setPrompt] = useState("function add(a,b){return a+b;}")
  const [answer, setAnswer] = useState("")

  useEffect(()=>{
    Prism.highlightAll();
  },[])

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/ai-review',{prompt})
    setAnswer(response.data)
  }

  return (
    <>
      <div className="screen">

        {/* Left Panel */}

        <div className="left">

          <div className='left-header'>
            <h1>Ai Code Reviewer</h1>
            <p>Write your code and get an AI-powered review.</p>
          </div>

          <div className="code">
            <Editor
                value={prompt}
                onValueChange = {prompt=>setPrompt(prompt)}
                highlight = {code=>Prism.highlight(code,Prism.languages.javascript,"javascript")}
                padding={20}
                style={
                  {
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 14,
                    backgroundColor: '#2d2d2d',
                    color: '#f8f8f2',
                    borderRadius: '4px',
                    height:'100%',
                    border: '1px solid #1e1e1e'
                  }
                }
            />
          </div>

          <div className="review" onClick={reviewCode}>Review</div>
          
        </div>

        {/* Right panel */}

        <div className="right">
          <Markdown>{answer}</Markdown>
        </div>

      </div>
      
    </>
  )
}

export default App