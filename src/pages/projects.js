import React from 'react';

import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Layout from '../components/layout';

const ProjectsPage = () => (
  <Layout title="projects">
    <h2>Projects</h2>
    <p>
      I&rsquo;m gonna put together a proper list of all the cool things I worked
      on.
    </p>
    <p>
      For the time being, please just check them out on{' '}
      <OutboundLink href="https://github.com/underyx">my GitHub</OutboundLink>{' '}
      and{' '}
      <OutboundLink href="https://gitlab.com/underyx">my GitLab</OutboundLink>{' '}
      profiles.
    </p>
    <p>
      Most recently, I made{' '}
      <OutboundLink href="https://visawhen.com">VisaWhen to estimate US visa wait times</OutboundLink>{' '},
      while waiting for my own CR-1.
    </p>
  </Layout>
);

export default ProjectsPage;
