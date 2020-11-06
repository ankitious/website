import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FadeIn from "../components/FadeIn"
import ContactMe from "../components/ContactMe"
import Avatar from "../components/Avatar"
import GoogleMe from "../components/GoogleMe"

const IndexPage = () => (
  <Layout>
    <SEO />
    <div className="ws-mw-960">
      <div className=" margin10 textcenter">
        <div className="mB10 width100 textcenter oh">
          <FadeIn
            className="ico20 inline "
            style={{ animationDelay: "0.01s", lineHeight: "1.7em" }}
          >
            hey,
          </FadeIn>
          <FadeIn
            className="ico20 inline "
            style={{ animationDelay: "0.02s", lineHeight: "1.7em" }}
          >
            {" I'm"}
          </FadeIn>
        </div>
        <div className="mB25 width100 textcenter oh">
          <FadeIn
            className="fs40 inbl "
            style={{ animationDelay: "0.05s", lineHeight: "1.7em" }}
          >
            <h1 className="fs40 myname">Ankit</h1>
          </FadeIn>
        </div>
      </div>
      <div className="mt35">
        <Avatar />
        <ContactMe />
        <GoogleMe />
      </div>
    </div>
  </Layout>
)

export default IndexPage
