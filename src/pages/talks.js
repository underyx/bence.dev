import { graphql, StaticQuery } from 'gatsby'
import React from 'react'

import Divider from '../components/divider'
import Layout from '../components/layout'
import TalkCard from '../components/talks/talkcard'

const TalksPage = () => (
  <StaticQuery
    query={graphql`
      {
        allTalksYaml(
          sort: { fields: date, order: DESC }
          filter: { is_wip: { ne: true } }
        ) {
          nodes {
            slug
            date(formatString: "MMMM D, YYYY")
            title
            subtitle
            description
            slides_url
            video_url
            is_private
            events {
              name
              city
              venue
              date
              url
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <h2>Talks</h2>
        <p>
          Oh neat, so you wanna see me talking! Well, you&rsquo;re in luck.
          I&rsquo;ve put together {data.allTalksYaml.nodes.length} talks so far,{' '}
          {data.allTalksYaml.nodes.filter(talk => talk.slides_url).length} of
          them have slides uploaded, and{' '}
          {data.allTalksYaml.nodes.filter(talk => talk.video_url).length} even
          have video recordings online.
        </p>
        <section>
          {data.allTalksYaml.nodes.map((talk, index) => (
            <>
              <TalkCard talk={talk} />
              {index !== data.allTalksYaml.nodes.length - 1 ? (
                <Divider />
              ) : null}
            </>
          ))}
        </section>
      </Layout>
    )}
  />
)

export default TalksPage
