import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import styled from 'styled-components'

import Labels from '../components/resume/labels'
import ProfilePic from '../components/resume/profilepic'
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
        Kept the search engine running as one of the two people in the on-call
        rotation.
        <Labels
          primary={['Python', 'PostgreSQL', 'AWS', 'Redis', 'Elasticsearch']}
          secondary={['Bottle']}
        />
      </li>
      <li>
        Sole developer of the foundations of our data analysis platform, still
        serving 40+ members of BI and Analytics
        <Labels
          primary={['Python', 'PostgreSQL', 'Apache Airflow']}
          secondary={['Tableau', 'Metabase']}
        />
      </li>
      <li>
        Sole developer of the foundations of an internal HR and ticketing
        application, used for 3+ years and counting
        <Labels primary={['Python', 'Django']} secondary={['PostgreSQL']} />
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
        Implemented product features on search &amp; booking engines directly
        increasing sales.
        <Labels primary={['Python', 'PostgreSQL']} secondary={['Bottle']} />
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
        Designed and developed our deployment automation tool,{' '}
        <OutboundLink href="https://github.com/kiwicom/crane">
          Crane
        </OutboundLink>
        .
        <Labels
          primary={['Python', 'Rancher']}
          secondary={['click', 'Docker', 'GitLab CI']}
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
        Led the Software Platform Squad to build many more things on all of the
        above.
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
        manually correct the announc.
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
    <p>The only technical employee at the company. </p>
    <h4>Role</h4>
    <p>Software Engineer (2015-2018)</p>
    <h4>Successes</h4>
    <ul>
      <li>
        Migrated the whole infrastructure from the dying HP Cloud to AWS.
        <Labels primary={['AWS']} secondary={['Unix']} />
      </li>
      <li>
        Implemented the main API product of the company from the ground up
        <Labels primary={['Python', 'PostreSQL', 'Redis']} />
      </li>
      <li>
        Started a user facing dashboard web app from the ground up
        <Labels primary={['Python', 'Django']} secondary={['PostgreSQL']} />
      </li>
      <li>
        Defined the whole infrastructure as code, maintained numerous services
        <Labels
          primary={['Ansible']}
          secondary={['Elasticsearch', 'Logstash', 'Kibana', 'go.cd']}
        />
      </li>
      <li>
        Implemented and published an open source PHP client library for our API
        <Labels primary={['PHP']} />
      </li>
    </ul>
    <h3>Education</h3>
    <p>Entirely self-taught since 2012.</p>
    <h3>Languages</h3>
    <ul>
      <li>English: fluent</li>
      <li>Hungarian: native</li>
      <li>Japanese: reading-only, novice</li>
    </ul>
    <h3>Future</h3>
    <ul>
      <li>Golang</li>
      <li>Machine Learning</li>
      <li>Unity</li>
    </ul>
  </Layout>
)

export default ResumePage
