import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { NavLink } from 'react-router-dom'

function Intro() {

  return (
    <div>
      <div className = 'heading'>Introduction</div>
      <p className = 'text-gray-500 py-10'>BeverageDB is a fast and easy to use tool for getting all type of information on (as of now) ethnic beverages. </p>
      <p className = 'text-gray-500 pb-10'>Beverages on this database have various parameters that provide information about starter, place, microorganisms, alcohol percentage, nutritional value, cultural importance, etc. </p>
      <p className = 'text-gray-500 pb-10'>Check out the <span className = 'font-bold'>Statistics</span> section on the top right of the screen or <NavLink className = 'text-blue-600 hover:underline' to = '/stats'>click here.</NavLink> </p>
      <p className = 'text-gray-500 pb-10'>Source code is available on <a className = 'text-blue-600 hover:underline' href = 'https://github.com/iLoveHanekawa/beverageDB' target='__blank'>Github.</a></p>
      {/* <SyntaxHighlighter showLineNumbers={true} language='javascript' style = {atomOneDark}>
        {`function Hello() {
    return <div>Hello</div>
}`}
      </SyntaxHighlighter> */}
    </div>
    
  )
}

export default Intro