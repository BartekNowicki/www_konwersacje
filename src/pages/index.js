import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { Campsite } from "../components/Campsite"
import { Text } from "../components/Text"
import "../components/text.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import data from "../components/data"
import myStore  from '../state/createStore'
import MyFormik from "../components/myFormik"
import { Provider } from 'react-redux'


const IndexPage = () => {
    
  const store = myStore();
  
  return (

  <Provider store = { store }>
  
      <Layout>

        <Seo title="Home" />

        <Campsite/>

        {console.log('TESTING: ', process.env.GATSBY_EMAIL_LOGIN)}

        <MyFormik />
        
        
        <Text tag = 'p' text = {data.text8} name = 'text_8' classN = 'heading'/>
        <Text tag = 'p' text = {data.text81} name = 'text_81' classN = 'regular'/>
        <Text tag = 'p' text = {data.text82} name = 'text_82' classN = 'regular'/>
        <Text tag = 'p' text = {data.text83} name = 'text_83' classN = 'regular'/>
        <Text tag = 'p' text = {data.text84} name = 'text_84' classN = 'regular'/>        
        <Text tag = 'p' text = {data.text9} name = 'text_9' classN = 'heading'/>
        <Text tag = 'p' text = {data.text91} name = 'text_91' classN = 'regular'/>
        <Text tag = 'p' text = {data.text92} name = 'text_92' classN = 'regular'/>
        <Text tag = 'p' text = {data.text93} name = 'text_93' classN = 'regular'/>
        <Text tag = 'p' text = {data.text94} name = 'text_94' classN = 'regular'/>
        <Text tag = 'p' text = {data.text95} name = 'text_95' classN = 'regular'/>
        <Text tag = 'p' text = {data.text96} name = 'text_96' classN = 'regular'/>
        <Text tag = 'p' text = {data.text97} name = 'text_97' classN = 'regular'/>


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

      </Layout>
    
  </Provider >
)}

export default IndexPage
