import React from 'react'

import Layout from '../components/layout'
import Divider from '../components/divider'

const TalksPage = () => (
  <Layout>
    <h2>Talks</h2>
    <p>
      Damn, this sucks. I don't really have this page yet. Sorry about that.
    </p>
    <p>
      But at least I already started collecting my presentations from past
      conferences and meetups; I found 14 of them that I'll publish here soon.
      Until then, I added just the two that have their slides hosted on GitLab
      already. Use the space bar to advance the slides, not the arrow keys.
    </p>
    <Divider />
    <a href="https://underyx.gitlab.io/public-by-default/">
      <h3>
        Public By Default: How Overcommunicating is the Secret to a Happier Life
      </h3>
    </a>
    <blockquote>
      <p>
        The typical corporate culture is built on top of constructing the most
        'efficient' and 'synergetic' communication channels between silos. Sync
        and catch-up meetings, games of telephone, misunderstandings leading to
        resentful blaming… well, to heck with all that! I'll be making the case
        for religious oversharing and acting like consenting adults instead,
        which I believe to be the (public) secret to getting things done as a
        company.
      </p>
    </blockquote>
    <Divider />
    <a href="https://underyx.gitlab.io/slack-devex/">
      <h3>Better Developer Experience via Building for Slack</h3>
    </a>
    <blockquote>
      <p>
        The Platform team at Kiwi.com has the mission to help our engineers
        create ‘better software, faster,’ and building custom tooling on top of
        Slack provides lots of opportunities for quick developer productivity
        wins. Better yet, turns out we’re doing a fairly nice job at building
        them! What could be better then, than to come tell the world about all
        we learned so far?
      </p>
      <p>
        I’ll talk about how you can identify what tools you can create, which
        ones you should actually create, and how to actually design that app so
        that it elegantly solves your problem and gets adopted by your team.
      </p>
    </blockquote>
  </Layout>
)

export default TalksPage
