import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

import absoluteUrl from '../utils/absolute-url'

const SideBar = dynamic(() => import('../components/sidebar'))
const JobList = dynamic(() => import('../components/job-list'))
const Select = dynamic(() => import('../components/select'))

const sidebarVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    x: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
}

export default function IndexPage({ postings }) {
  const postingsIsEmpty = Array.isArray(postings)

  const router = useRouter()
  const defaultDeparmentText = 'All department'

  const getDepartment = () => {
    return router.query.department
      ? decodeURIComponent(router.query.department)
      : router.query.department
  }
  const [currentDepartment, setDepartment] = React.useState(getDepartment)

  React.useEffect(() => {
    setDepartment(getDepartment())
  })

  if (!postingsIsEmpty) {
    return null
  }

  const changeDeparment = value => () => {
    setDepartment(value)
    const href = `/?department=${encodeURIComponent(value)}`
    const as = href
    router.push(href, as, { shallow: true })
  }

  const departments = React.useMemo(() => {
    const departmentList = []
    return postings.reduce((currentDeparments, currentPost) => {
      if (!currentDeparments.includes(currentPost.categories.department)) {
        currentDeparments.push(currentPost.categories.department)
      }

      return currentDeparments
    }, departmentList)
  }, [postings])

  const jobs = React.useMemo(() => {
    return postings.reduce((departmentDict, currentPost) => {
      if (!departmentDict[currentPost.categories.department]) {
        departmentDict[currentPost.categories.department] = []
      }

      let currentDepartment = departmentDict[currentPost.categories.department]

      if (!currentDepartment.find(item => item.id === currentPost.id)) {
        currentDepartment.push(currentPost)
      }

      return departmentDict
    }, {})
  }, [postings])

  return (
    <div className="container flex flex-col p-4 mx-auto mt-8 lg:flex-row">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sidebarVariants}
        style={{ maxWidth: 300 }}
        className="w-full pr-3 lg:w-1/3"
      >
        <SideBar
          currentDepartment={currentDepartment || ''}
          defaultDeparmentText={defaultDeparmentText}
          departments={departments}
          onChangeDeparment={changeDeparment}
        />
      </motion.div>

      <label htmlFor="deparment">
        <Select
          id="deparment"
          className="lg:hidden rounded-2"
          labelText={currentDepartment || defaultDeparmentText}
          onChange={event => changeDeparment(event.target.value)()}
        >
          <option value="">{defaultDeparmentText}</option>
          {departments.map((department, index) => (
            <option value={department} key={index}>
              {department}
            </option>
          ))}
        </Select>
      </label>

      <div className="w-full mt-6 lg:w-2/3 lg:mt-0">
        {Object.keys(jobs).length === 0 && (
          <motion.div className="flex justify-center mt-6">
            <p>No positions available</p>
          </motion.div>
        )}

        {Object.keys(jobs)
          .filter(
            department => !currentDepartment || currentDepartment === department
          )
          .map(department => (
            <JobList
              // May the key never be the same
              key={department + Math.random()}
              title={department}
              jobs={jobs[department]}
            />
          ))}
      </div>
    </div>
  )
}

IndexPage.getInitialProps = async ({ req }) => {
  const response = await fetch(`${absoluteUrl(req)}/api/postings`)
  const postings = await response.json()
  return {
    postings,
  }
}

IndexPage.propTypes = {
  /** List postings */
  postings: PropTypes.array,
}
