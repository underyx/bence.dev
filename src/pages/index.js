import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <p>
      Yeah, hello there! Introductions are difficult, so… let&rsquo;s get this
      over with :D
    </p>
    <p>
      I&rsquo;m Bence Nagy. I usually go by &lsquo;underyx&rsquo; online. I
      currently lead a team of truly amazing software engineers at{' '}
      <OutboundLink href="https://code.kiwi.com">Kiwi.com</OutboundLink>.
      We&rsquo;re responsible for the <em>software platform</em> of the company;
      our mission is to help our engineers make better software, faster.
    </p>
    <p>
      I got to this point through some… yeah, <em>versatile</em> engineering
      work at tech startups. My work was mostly centered around Python
      development, but I was fulfilling responsibilities in other fields, such
      as big data and operations.
    </p>
    <p>
      I keep getting lost in trying new things. But a couple interests that have
      stayed with me for a longer time are rationality, video games, and design.
    </p>
    <p>
      And finally, I have a request for you, dear reader: please contact me with
      whatever problem you&rsquo;re facing right now. Even if you think I cannot
      help with it. The harder, the better. Seriously. Thanks!
    </p>
  </Layout>
)

export default IndexPage
