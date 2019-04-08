import React from 'react'

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from '../components/layout'

const ProjectsPage = () => (
  <Layout>
    <h2>Projects</h2>
    <p>
      I'm gonna put together a proper list of all the cool things I worked on.
    </p>
    <p>
      For the time being, please just check them out on{' '}
      <OutboundLink href="https://github.com/underyx">my GitHub</OutboundLink>{' '}
      and{' '}
      <OutboundLink href="https://gitlab.com/underyx">my GitLab</OutboundLink>{' '}
      profiles.
    </p>
  </Layout>
)

export default ProjectsPage
