import Link from 'next/link'
import { motion } from 'framer-motion'

export default function JobDetail() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
        hidden: { y: 20, opacity: 0, transition: { duration: 0.3 } },
      }}
      className="container mx-auto p-4 post"
      style={{ maxWidth: '70ch' }}
    >
      <h2 className="font-bold text-2xl">About beGroup</h2>
      <p>
        beGroup is a rapidly growing and high-profile start-up in South East
        Asia. We are building an on-demand services technology platform for a
        variety of services ranging from ride-hailing, food delivery, logistics,
        grocery shopping, and digital payments. We aim to consolidate our
        position as the inclusive super app of choice by enabling individuals,
        businesses and our economy to thrive, while creatively moving the
        industry forward.
      </p>
      <p>
        To sustain our impressive expansion, we have significant plans to build
        up our engineering teams across the region.
      </p>

      <h2 className="font-bold text-2xl">Working at beGroup</h2>
      <p>
        Would you like to work with a high-performing startup where your
        contribution is immediately visible and appreciated? beGroup has drawn
        people from several disciplines and domains from e-commerce, finance,
        payments, high-performance transaction systems and transportation
        platforms. Everyone is provided equal opportunity to contribute to team
        growth and success, in an open and low friction culture that
        incentivizes camaraderie.
      </p>
      <p>Initiative and drive to deliver for the business will be rewarded.</p>
      <p>
        We offer competitive compensation and health plan, and a great working
        environment for you to excel.
      </p>
      <Link href="/" as="/">
        <a>
          <button className="btn mt-8">View all current positions</button>
        </a>
      </Link>
    </motion.div>
  )
}
