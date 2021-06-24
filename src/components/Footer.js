import * as React from "react"


const Footer = () => (
  <footer style={{
      backgroundColor: 'black',    
      border: '1px solid gray',
      padding: '2vw',
      display: 'flex',
      justifyContent: 'center'
      }}>
      <p style={{
      color: 'gray',
      fontSize: '2vmin',
      padding: '3vw',
      fontFamily: 'Roboto Condensed'  
      }}>© 2001 - {new Date().getFullYear()} Bardo Bartosz Nowicki Center For Conversational Language Development</p>
  </footer>
)

export default Footer
