import * as React from "react"
import Section1 from "../components/pageSections/Section1"
import Section2 from "../components/pageSections/Section2"
import Section3 from "../components/pageSections/Section3"
import Section4 from "../components/pageSections/Section4"
import Section5 from "../components/pageSections/Section5"
import Section6 from "../components/pageSections/Section6"
import Section7 from "../components/pageSections/Section7"
import Seo from "../components/seo"
import Layout from "../components/layout"
import myStore  from '../state/createStore'
import Footer from "../components/Footer"
import data from "../data"


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
        <Section1 sectionID = {data.menu1+'ID'}/>
        <Section2 sectionID = {data.menu2+'ID'}/>
        <Section3 sectionID = {data.menu3+'ID'}/>
        <Section4 sectionID = {data.menu4+'ID'}/>
        <Section5 sectionID = {data.menu5+'ID'}/>
        <Section6 sectionID = {data.menu6+'ID'}/>
        <Section7 sectionID = {data.menu7+'ID'}/>
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
