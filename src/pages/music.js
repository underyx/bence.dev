import React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from '../components/layout'

const MusicPage = () => (
  <Layout>
    <h2>Music</h2>
    <p>
      Just you wait, I&rsquo;ll make some super fancy page to show off my
      playlists here. I&rsquo;ve been putting them together regularly ever since
      2013, and, well, I&rsquo;m pretty proud of them.
    </p>
    <p>
      Until then I have to ask you to just check them out on{' '}
      <OutboundLink href="https://play.spotify.com/user/underyx">
        my Spotify profile
      </OutboundLink>{' '}
      the old, boring way.
    </p>
    <p>
      And if you were expecting me to produce music myself, welp, sorry to
      disappoint you. Not there yet.
    </p>
  </Layout>
)

export default MusicPage
