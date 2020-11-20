import Link from 'next/link'
import { motion } from 'framer-motion'

import { JobType } from '../types'

export default function JobItem({ item }) {
  return (
    <Link href={`/job-detail/[id]`} as={`/job-detail/${item.id}`}>
      <a>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.05 }}
          className="flex flex-col h-full p-4 border border-solid cursor-pointer border-grey-4 rounded-6 transition-all hover:shadow-middle"
        >
          <p className="flex-1 font-bold break-words text-18 font-display">
            {item.text}
          </p>
          <p className="mt-1 text-xs text-dark-blue">
            {[item.categories.commitment || '', item.categories.location || '']
              .filter(Boolean)
              .join(' / ')}
          </p>
        </motion.div>
      </a>
    </Link>
  )
}

JobItem.propTypes = {
  item: JobType.isRequired,
}
