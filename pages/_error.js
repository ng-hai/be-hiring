import Link from 'next/link'
import { motion } from 'framer-motion'

import { ErrorType } from '../types'

export default function Error({ statusCode }) {
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
      <div className="mt-10 flex justify-center">
        {statusCode === 404 && <img src="/images/404.svg" />}
        {statusCode >= 500 && <img src="/images/500.svg" />}
      </div>
      {statusCode === 404 && (
        <div className="mt-8">
          <h2 className="font-bold text-4xl">404: Wheels not found</h2>
          <p>There is an accident, we&apos;re so sorry.</p>
          <p>
            Your ride have to be continued, and we will keep you safe,
            that&apos;s our mission.
          </p>
          <Link href="/" as="/">
            <a>
              <button className="btn mt-4">
                <svg>
                  <use href="/icons/symbols.svg#now" />
                </svg>
                Take me home
              </button>
            </a>
          </Link>
        </div>
      )}
      {statusCode >= 500 && (
        <div className="mt-8">
          <h2 className="font-bold text-4xl">Internal server error</h2>
          <p>Who let the dog out???</p>
          <p>
            Our mistake, the dog is quite proactive, we will return him to the
            previous place.
          </p>
          <p>Please come back later.</p>
        </div>
      )}
    </motion.div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

Error.propTypes = ErrorType
