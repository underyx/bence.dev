import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <h2>
      Okay, you got me{' '}
      <span role="img" aria-label="slightly embarrassed emoji">
        😅
      </span>
    </h2>
    <p>I haven't created this page yet.</p>
    <p>
      The only pages I actually have right now are <Link to="/">home</Link> and{' '}
      <Link to="/articles">articles</Link>.
    </p>
    <p>
      But I did track that you wanted to check it, so that will probably guilt
      me into adding something here sometime soon.
    </p>
  </Layout>
)

export default NotFoundPage
