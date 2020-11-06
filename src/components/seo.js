/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            ogUrl
            ogType
            image
            lang
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata.description
  const metaTitle = site.siteMetadata.title
  const keywords = site.siteMetadata.keywords
  const metaType = site.siteMetadata.ogType
  const metaUrl = site.siteMetadata.ogUrl
  const metaImage = site.siteMetadata.image
  const lang = site.siteMetadata.lang || "en"
  const defaultTitle = site.siteMetadata?.title

  console.log(metaTitle)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: metaTitle },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: metaType },
        { property: `og:url`, content: metaUrl },
        { property: "og:image", content: metaImage },
        { property: `twitter:title`, content: metaTitle },
        { property: "twitter:description", content: metaDescription },
        { name: "robots", content: "index, follow" },
        { rel: "canonical", href: "https://www.ankitious.dev/" },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default SEO
