import Router from 'next/router'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import fetch from 'isomorphic-unfetch'

import { JobType } from '../../../types'
import absoluteUrl from '../../../utils/absolute-url'

const RoundIcon = dynamic(() => import('../../../components/round-icon'))
const JobNotFound = dynamic(() => import('../../../components/job-not-found'))
const ApplicationForm = dynamic(() =>
  import('../../../components/application-form')
)

export default function ApplyJob({ job }) {
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
      className="container mx-auto p-4"
      style={{ maxWidth: '70ch' }}
    >
      {job.categories.department && (
        <span className="text-sm h-6 px-2 bg-light-yellow inline-flex items-center rounded uppercase font-bold">
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
      <ApplicationForm applicationId={job.id} />
    </motion.div>
  )
}

ApplyJob.getInitialProps = async ({ query, req, res }) => {
  const redirectToParent = () => {
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

  if (!query.id) {
    redirectToParent()
  }

  const response = await fetch(`${absoluteUrl(req)}/api/postings/${query.id}`)
  const data = await response.json()

  return {
    job: data,
  }
}

ApplyJob.propTypes = {
  job: JobType.isRequired,
}
