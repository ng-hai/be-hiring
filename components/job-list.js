import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

import { JobType } from '../types'
const JobItem = dynamic(() => import('./job-item'))

const listVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  hidden: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.3 },
  },
}

const itemVariants = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
    },
  }),
  hidden: { opacity: 0, y: 20 },
}

export default function JobList({ title, jobs }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
      className="mt-8 first:mt-0 sm:mt-12 md:mt-16"
    >
      <p className="font-bold cursor-default text-24 font-display">{title}</p>
      <div className="flex flex-wrap -mx-3 md:-mx-4">
        {jobs.length > 0 &&
          jobs.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="w-full p-3 sm:w-1/2 xl:w-1/3 md:p-4"
            >
              <JobItem item={item} />
            </motion.div>
          ))}
      </div>
    </motion.div>
  )
}

JobList.propTypes = {
  title: PropTypes.string.isRequired,
  jobs: PropTypes.arrayOf(JobType).isRequired,
}
