import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import fetch from 'isomorphic-unfetch'

import { JobType } from '../../../types'
import absoluteUrl from '../../../utils/absolute-url'

const RoundIcon = dynamic(() => import('../../../components/round-icon'))
const JobNotFound = dynamic(() => import('../../../components/job-not-found'))

export default function JobDetailById({ job }) {
  if (!job || !job.id) {
    return <JobNotFound />
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 6,
        transition: {
          y: { stiffness: 1000 },
        },
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          y: { stiffness: 1000, velocity: -100 },
        },
      }}
      className="mx-auto p-4 post"
      style={{ maxWidth: '70ch' }}
    >
      <Head>
        <title>beHiring - {job.text}</title>
        <meta key="title" name="title" content={`beHiring - ${job.text}`} />

        {/* Open Graph / Facebook */}
        <meta
          key="og:url"
          property="og:url"
          content={`https://careers.be.xyz/job-detail/${job.id}`}
        />
        <meta
          key="og:title"
          property="og:title"
          content={`beHiring - ${job.text}`}
        />

        {/* Twitter */}
        <meta
          key="twitter:url"
          property="twitter:url"
          content={`https://careers.be.xyz/job-detail/${job.id}`}
        />
        <meta
          key="twitter:title"
          property="twitter:title"
          content={`beHiring - ${job.text}`}
        />
      </Head>
      {job.categories.department && (
        <span
          style={{ paddingTop: 2 }}
          className="text-sm h-6 px-2 bg-light-yellow inline-flex items-center rounded tracking-wide font-bold"
        >
          {job.categories.department}
        </span>
      )}
      <h1 className="font-bold text-4xl leading-tight mt-4">{job.text}</h1>
      <div className="flex items-center mt-2">
        {job.categories.commitment && (
          <div className="flex items-center text-sm mr-3">
            <RoundIcon name="business" />
            <span>{job.categories.commitment}</span>
          </div>
        )}
        {job.categories.location && (
          <div className="flex items-center text-sm mr-3">
            <RoundIcon name="city" />
            <span>{job.categories.location}</span>
          </div>
        )}
      </div>
      <div className="mt-4">
        {job.descriptionPlain.split(/\n/).map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
      {job.lists.map((list, index) => (
        <div key={index} className="mt-4">
          <h2 className="font-bold text-2xl">{list.text}</h2>
          <div
            className="p-4"
            dangerouslySetInnerHTML={{ __html: list.content }}
          ></div>
        </div>
      ))}
      <Link href={`/job-detail/[id]/join`} as={`/job-detail/${job.id}/join`}>
        <a>
          <button className="mt-4 btn">
            <svg className="fill-current mr-1 w-6 h-6">
              <use href="/icons/symbols.svg#now" />
            </svg>
            I want to join
          </button>
        </a>
      </Link>
    </motion.div>
  )
}

JobDetailById.getInitialProps = async ({ query, req, res }) => {
  if (!query.id) {
    if (res) {
      res.writeHead(302, {
        Location: '/job-detail',
      })
      res.end()
    } else {
      Router.replace('/job-detail')
    }

    return {}
  }

  const response = await fetch(`${absoluteUrl(req)}/api/postings/${query.id}`)
  const job = await response.json()

  return {
    job,
  }
}

JobDetailById.propTypes = {
  job: JobType.isRequired,
}
