import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import styled from 'styled-components'

import Labels from '../components/resume/labels'
import ProfilePic from '../components/resume/profilepic'
import TalksWidget from '../components/resume/talkswidget'
import ArticlesWidget from '../components/resume/articleswidget'
import Layout from '../components/layout'

const ResumeHeader = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const ResumeTitle = styled.div`
  margin-right: 20px;
`

const ProfilePicFrame = styled.div`
  margin: 0 auto 20px;
  flex-grow: 1;
  min-width: 110px;
  max-width: 250px;
`

const ResumePage = () => (
  <Layout>
    <ResumeHeader>
      <ResumeTitle>
        <h2>Bence Nagy&rsquo;s Résumé</h2>
        <p>
          Versatile engineering at tech startups.
          <br />
          Focus on Python, DevOps, and cultivating culture.
        </p>
      </ResumeTitle>
      <ProfilePicFrame>
        <ProfilePic />
      </ProfilePicFrame>
    </ResumeHeader>

    <h3>Work at Kiwi.com (2015-)</h3>
    <p>
      One of the first 5% of engineers at Kiwi.com, scaled our team and tech as
      monthly turnover grew by 12x and we had{' '}
      <OutboundLink href="https://www.generalatlantic.com/media-article/general-atlantic-announces-strategic-partnership-with-travel-platform-kiwi-com/">
        a successful exit
      </OutboundLink>
      .
    </p>
    <h4>Roles</h4>
    <ul>
      <li>Software Platform Lead (2018-)</li>
      <li>Senior Software Engineer (2015-2018)</li>
    </ul>
    <h4>Successes</h4>
    <ul>
      <li>
        Designed and developed our deployment automation tool,{' '}
        <OutboundLink href="https://github.com/kiwicom/crane">
          Crane
        </OutboundLink>
        , used for tens of thousands of releases.
        <Labels
          primary={['Python', 'Rancher']}
          secondary={['click', 'Docker', 'GitLab CI']}
        />
      </li>
      <li>
        Developed the foundations of our data analysis platform, and the first
        dozen data pipelines, still serving 40+ members of BI and Analytics
        <Labels
          primary={['Python', 'PostgreSQL', 'Apache Airflow']}
          secondary={['Tableau', 'Metabase']}
        />
      </li>
      <li>
        Rearchitected the largest monolith for better reliability and
        development velocity. Average unique daily contributors went from 3 to
        10.
        <Labels
          primary={[
            'Python',
            'Bottle',
            'AWS',
            'Docker',
            'Rancher',
            'connexion',
            'Celery',
          ]}
          secondary={['SQLAlchemy', 'GitLab CI', 'pytest', 'coala', 'OpenAPI']}
        />
      </li>
      <li>
        Switched the same monolith to use asynchronous Python. In one day from
        idea to staging, memory usage dropped by 80%, server load by 55%, and
        99th percentile request times by 60%.
        <Labels primary={['Python', 'Bottle', 'Gevent']} />
      </li>
      <li>
        Led without authority to adopt engineering best practices company-wide.
        This includes static analysis, test automation, a public by default
        culture, CI/CD, containers, microservices, innersourcing, asynchronous
        Python, and many more.
        <Labels
          primary={['pytest', 'Docker', 'Kubernetes', 'asyncio']}
          secondary={['aiohttp', 'Slack', 'sphinx']}
        />
      </li>
      <li>
        Wrote our first reference templates for new Python apps, libraries,
        Docker images, GitLab CI pipelines.
        <Labels
          primary={['Python', 'cookiecutter', 'Docker', 'GitLab CI']}
          secondary={['aiohttp', 'Slack', 'sphinx']}
        />
      </li>
      <li>
        Led development of our microservice directory,{' '}
        <OutboundLink href="https://github.com/kiwicom/the-zoo">
          The Zoo
        </OutboundLink>
        .
        <Labels primary={['Python', 'Django']} secondary={['PostgreSQL']} />
      </li>
      <li>
        Kept the search engine running as one of the two people in the on-call
        rotation.
        <Labels
          primary={['Python', 'PostgreSQL', 'AWS', 'Redis', 'Elasticsearch']}
          secondary={['Bottle']}
        />
      </li>
      <li>
        Implemented product features on search &amp; booking engines directly
        increasing sales.
        <Labels primary={['Python', 'PostgreSQL']} secondary={['Bottle']} />
      </li>
      <li>
        Laid the groundwork of an internal HR and ticketing application, used
        for 3+ years and counting
        <Labels primary={['Python', 'Django']} secondary={['PostgreSQL']} />
      </li>
      <li>
        Led the Software Platform Squad to build many more things on all of the
        above.
      </li>
      <li>
        Picked up experience with various other short-term projects, see tags
        below
        <Labels
          primary={[
            'GCP',
            'Terraform',
            'Kubernetes',
            'React',
            'Gatsby',
            'Ansible',
            'Twine',
          ]}
        />
      </li>
    </ul>
    <h4>Failures</h4>
    <ul>
      <li>
        Implemented an internal data pipeline execution framework.
        <br />
        <strong>I shut it down</strong> as it was inferior to Apache Airflow in
        every way.
      </li>
      <li>
        Wrote a tool to gather news announced by other departments in random
        places, and aggregate them in Slack channels.
        <br />
        <strong>I shut it down</strong> as all the scraping and automated data
        cleaning wasn&rsquo;t sustainable, and it didn&rsquo;t entice people to
        manually correct its posts.
      </li>
      <li>
        Many more that were valuable lessons but aren&rsquo;t grand enough to
        make this list.
      </li>
    </ul>
    <h4>Proudest Moment</h4>
    <p>
      My proudest moment was when, after 3 years I spent at Kiwi.com, we polled
      engineers on what their values are, and &ldquo;Transparency&rdquo; came up
      as the number one response, much unlike when I joined. After spending
      years preaching, fighting for an open company culture, I feel like this is
      somewhat of a personal accomplishment of sorts, even if I obviously
      can&rsquo;t just outright take credit for it.
    </p>
    <h3>Work at Allmyles (2013-2015)</h3>
    <p>
      Built the company&rsquo;s technical foundations, at times as the only
      employee.
    </p>
    <h4>Role</h4>
    <p>Software Engineer (2015-2018)</p>
    <h4>Successes</h4>
    <ul>
      <li>
        Migrated the whole infrastructure from the sunsetting HP Cloud to AWS.
        <Labels primary={['AWS']} secondary={['Unix']} />
      </li>
      <li>
        Implemented the main API product of the company from the ground up.
        <Labels primary={['Python', 'PostreSQL', 'Redis']} />
      </li>
      <li>
        As another blank slate, started a user facing dashboard web app.
        <Labels primary={['Python', 'Django']} secondary={['PostgreSQL']} />
      </li>
      <li>
        Defined the whole infrastructure as code, maintained numerous services
        <Labels
          primary={['Ansible']}
          secondary={[
            'Elasticsearch',
            'Logstash',
            'Kibana',
            'go.cd',
            'icinga2',
          ]}
        />
      </li>
      <li>
        Implemented and published an open source PHP client library for our API
        <Labels primary={['PHP']} />
      </li>
    </ul>
    <h3>Open Source Projects</h3>
    <p>…cause sometimes I just need to work on something out of passion.</p>
    <ul>
      <li>
        <OutboundLink href="https://github.com/underyx/flask-redis/">
          <strong>Flask-Redis</strong>
        </OutboundLink>{' '}
        is my most popular one, with over a thousand GitHub repos using it.
        It&rsquo;s a simple tool, sure, but I&rsquo;m proud of how neat and tidy
        it is.
      </li>
      <li>
        I&rsquo;m a now-inactive maintainer of{' '}
        <OutboundLink href="https://github.com/coala/coala/">
          <strong>coala</strong>
        </OutboundLink>
        , the largest project I&rsquo;ve been involved with. This involved much
        more community-related work, such as leading development sprints at
        PyCon.
      </li>
      <li>
        I have more cool little little utility libraries, such as{' '}
        <OutboundLink href="https://github.com/underyx/aiohttp-sentry/">
          <strong>aiohttp-sentry</strong>
        </OutboundLink>
        ,{' '}
        <OutboundLink href="https://github.com/underyx/structlog-pretty/">
          <strong>structlog-pretty</strong>
        </OutboundLink>
        , and several others.
      </li>
      <li>
        Finally, I like to keep things open source even if they are meant only
        for my own personal use. See for instance{' '}
        <OutboundLink href="https://github.com/underyx/underyx.me/">
          <strong>underyx.me</strong>
        </OutboundLink>{' '}
        (this website!),{' '}
        <OutboundLink href="https://gitlab.com/underyx/ops/">
          <strong>ops</strong>
        </OutboundLink>
        , which has the Kubernetes manifests and Ansible playbooks for my
        personal server (which hosts this website, amongst many others!), or
        even{' '}
        <OutboundLink href="https://github.com/underyx/conference-notes/">
          <strong>conference-notes</strong>
        </OutboundLink>
        , which is just personal notes from conferences I attended.
      </li>
    </ul>
    <h3>Education</h3>
    <p>Entirely self-taught since 2012.</p>
    <TalksWidget />
    <ArticlesWidget />
    <h3>Languages</h3>
    <ul>
      <li>English: fluent</li>
      <li>Hungarian: native</li>
      <li>Japanese: reading-only, novice</li>
    </ul>
  </Layout>
)

export default ResumePage