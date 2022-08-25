import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout title="home">
    <p>
      Yeah, hello there! Introductions are difficult, so… let&rsquo;s hop right
      in :D
    </p>
    <p>
      I&rsquo;m Bence Nagy. I usually go by &lsquo;underyx&rsquo; online.
      Currently working on{" "}
      <OutboundLink href="https://semgrep.dev">Semgrep</OutboundLink>.
    </p>
    <p>
      I keep getting lost in trying new things. But a couple interests that have
      stayed with me for a longer time are rationality, video games, and design.
    </p>
    <p>
      And finally, I have a request for you, dear reader: please contact me with
      whatever problem you&rsquo;re facing right now. Even if you think I cannot
      help with it. The harder, the better. Seriously, I love difficult
      problems. Thank you!
    </p>
  </Layout>
);

export default IndexPage;
