import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function Intro() {

  return (
    <div>
      <div className = 'heading'>Introduction</div>
      <p className = 'text-gray-500 py-10'>BeverageDB is a fast and easy to use tool for getting all type of information on (as of now) ethnic beverages. </p>
      <SyntaxHighlighter showLineNumbers={true} language='javascript' style = {atomOneDark}>
        {`function Hello() {
    return <div>Hello</div>
}`}
      </SyntaxHighlighter>
    </div>
    
  )
}

export default Intro