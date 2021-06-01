import * as React from "react"

const Footer = () => (
  <footer style={{ 
    marginTop: `2rem`, 
    border: '1px solid black',
    color: 'gray',
    fontSize: '0.8rem'}}>
      © {new Date().getFullYear()} Bartosz Nowicki Center For Convesational Language Development
  </footer>
)

export default Footer
