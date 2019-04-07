import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'

const ResumePage = () => (
  <Layout>
    <h2>Résumé</h2>
    <p>Sorry, but I haven't written a résumé yet. Ever, actually.</p>
    <p>
      For now, the <Link to="/">home</Link> and <Link to="/links">links</Link>{' '}
      pages will have to suffice if you want to find out more about me. But I
      tracked your pageview, so that should motivate me to write some content
      here.
    </p>
  </Layout>
)

export default ResumePage
