import * as React from "react"

import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import { Campsite } from "../components/Campsite"

import { Text } from "../components/Text"
import "../components/text.scss"

import Layout from "../components/layout";

import Seo from "../components/seo";

import data from "../components/data";

const IndexPage = () => (

  <Layout>

    <Seo title="Home" />

    <Campsite/>
    
    <Text tag = 'h1' text = {data.text1} name = 'text_1'/>

    <Text tag = 'h2' text = {data.text2} name = 'text_2'/>

    <Text tag = 'h3' text = {data.text3} name = 'text_3'/>

    <Text tag = 'h4' text = {data.text4} name = 'text_4'/>

    <Text tag = 'h5' text = {data.text5} name = 'text_5'/>

    <Text tag = 'p' text = {data.text6} name = 'text_6'/>

    <Text tag = 'p' text = {data.text7} name = 'text_7'/>

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
)

export default IndexPage
