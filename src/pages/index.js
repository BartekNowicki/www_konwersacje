import * as React from "react"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Section4 from "../components/Section4"
import Section5 from "../components/Section5"
import Section6 from "../components/Section6"
import Section7 from "../components/Section7"
import Seo from "../components/seo"
import Layout from "../components/layout"
import myStore  from '../state/createStore'
import Footer from "../components/Footer"

import checkOrientationAndsetupResizeListener from "../utils/checkOrientationAndsetupResizeListener"


import { Provider } from 'react-redux'
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => {

      
  const store = myStore();

  checkOrientationAndsetupResizeListener(store);
  
  return (

  <Provider store = { store }>
  
      <Layout>

        <Seo title="Home" />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />

      </Layout>
    
  </Provider >
)}

export default IndexPage




{/* <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        /> */}

        {/* <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p> */}
