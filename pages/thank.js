import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function Thank() {
  const router = useRouter()

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
      className="mx-auto post p-4 mt-10"
      style={{ maxWidth: '70ch' }}
    >
      <h2 className="font-bold text-2xl">
        Thank you for reaching out to us
        {router.query.name ? `, ${router.query.name}.` : ''}
      </h2>
      <p>We have sent you an email, remember to check your inbox.</p>
      <p>
        If you need support or have any question, don&apos;t hesistate to talk
        with us at{' '}
        <a className="text-blue" href="mailto:career@be.xyz">
          career@be.xyz
        </a>
      </p>
      <p>
        Love you 3
        <svg className="-mr-2 -ml-1 mb-px fill-current w-6 h-6 inline-flex text-red">
          <use href="/icons/symbols.svg#heart" />
        </svg>
        <svg className="-mr-2 mb-px fill-current w-6 h-6 inline-flex text-red">
          <use href="/icons/symbols.svg#heart" />
        </svg>
        <svg className="-mr-1 mb-px fill-current w-6 h-6 inline-flex text-red">
          <use href="/icons/symbols.svg#heart" />
        </svg>
        ,
        <br />
        Recruitment Team.
      </p>
    </motion.div>
  )
}
