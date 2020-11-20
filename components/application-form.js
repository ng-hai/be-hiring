import React from 'react'
import Router from 'next/router'
import classnames from 'classnames'
// import fetch from 'isomorphic-unfetch'
import { Form, Field, Formik } from 'formik'

import { validate, applicationSchema } from '../utils/form-validation'
import { ApplicationFormType } from '../types'

const MAX_SIZE = 1024000
const initialValues = {
  resume: '',
  name: '',
  email: '',
  phone: '',
  org: '',
  linkedIn: '',
  gitHub: '',
  portfolio: '',
  other: '',
  comments: '',
}

export default function ApplicationForm() {
  const [fileName, setFileName] = React.useState('Attach Resume/CV (.pdf)')
  const [fileError, setFileError] = React.useState('')
  const fileInput = React.useRef()
  const [serverError] = React.useState('')

  const changeFileName = () => {
    if (fileInput.current.files.length > 0) {
      const file = fileInput.current.files[0]
      setFileName(file.name)
      setFileError(file.size > MAX_SIZE ? 'Resume/CV cannot exceed 1MB' : '')
    }
  }

  const submitForm = values => {
    Router.push(`/thank?name=${values.name}`, '/thank')
    /* const resume = fileInput.current.files[0]
    const formData = new FormData()

    if (resume && resume.size <= MAX_SIZE) {
      formData.append('resume', resume)
    }

    formData.append('name', values.name)
    formData.append('email', values.email)
    formData.append('phone', values.phone)
    formData.append('org', values.org)
    formData.append('comments', values.comments)
    formData.append('source', window.location.host)
    formData.append('urls[LinkedIn]', values.linkedIn)
    formData.append('urls[GitHub]', values.gitHub)
    formData.append('urls[Portfolio]', values.portfolio)
    formData.append('urls[Other]', values.other)

    setServerError('')
    fetch(`/api/postings/${applicationId}`, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (!data.ok) {
          setServerError(data.error)
          return
        }
      })
      .catch(err => {
        if (err.message) {
          setServerError(err.message)
        }
      })
      .finally(() => setSubmitting(false)) */
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validate={validate(applicationSchema)}
    >
      {({ errors, touched, isSubmitting, isValid, submitCount }) => (
        <Form className="flex flex-col">
          <div className="mt-10">
            <h2 className="text-xl font-bold uppercase">
              Submit your application
            </h2>
            <label className="flex flex-col mt-8 md:flex-row md:items-start">
              <span className="mb-2 md:w-4/12 label md:mb-0">Resume/CV</span>
              <div>
                <div
                  className={classnames(
                    'relative input h-10 border-dashed border-grey-3 hover:bg-grey-1 overflow-hidden',
                    {
                      error: Boolean(fileError),
                    }
                  )}
                >
                  <svg className="flex-shrink-0 w-6 h-6 mr-2 fill-current">
                    <use href="/icons/symbols.svg#upload" />
                  </svg>
                  <div
                    className="w-full overflow-hidden whitespace-no-wrap"
                    style={{ textOverflow: 'ellipsis' }}
                  >
                    <span className="text-sm uppercase">{fileName}</span>
                  </div>
                  <input
                    name="resume"
                    type="file"
                    accept="application/pdf"
                    ref={fileInput}
                    onChange={changeFileName}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                {fileError && (
                  <span className="mt-1 text-sm text-red">{fileError}</span>
                )}
              </div>
            </label>
            <label className="flex flex-col mt-8 md:flex-row md:items-start">
              <span className="mb-2 md:w-4/12 label md:mb-0">
                Full name <span>*</span>
              </span>
              <div className="md:w-8/12">
                <Field
                  type="text"
                  name="name"
                  className={classnames('input w-full', {
                    error: touched.name && errors.name,
                  })}
                />
                {touched.name && errors.name && (
                  <span className="mt-1 text-sm text-red">{errors.name}</span>
                )}
              </div>
            </label>
            <label className="flex flex-col mt-8 md:flex-row md:items-start">
              <span className="mb-2 md:w-4/12 label md:mb-0">
                Email <span>*</span>
              </span>
              <div className="md:w-8/12">
                <Field
                  type="email"
                  name="email"
                  className={classnames('input w-full', {
                    error: touched.email && errors.email,
                  })}
                />
                {touched.email && errors.email && (
                  <span className="mt-1 text-sm text-red">{errors.email}</span>
                )}
              </div>
            </label>
            <label className="flex flex-col mt-8 md:flex-row md:items-start">
              <span className="mb-2 md:w-4/12 label md:mb-0">Phone</span>
              <Field type="tel" name="phone" className="input md:w-8/12" />
            </label>
            <label className="flex flex-col mt-8 md:flex-row md:items-start">
              <span className="mb-2 md:w-4/12 label md:mb-0">
                Current Company
              </span>
              <Field type="text" name="org" className="input md:w-8/12" />
            </label>
          </div>

          <div className="mt-24">
            <h2 className="text-xl font-bold uppercase">Links</h2>
            <label className="flex flex-col mt-8 md:flex-row md:items-start">
              <span className="mb-2 md:w-4/12 label md:mb-0">LinkedIn URL</span>
              <Field type="url" name="linkedIn" className="input md:w-8/12" />
            </label>
            <label className="flex flex-col mt-8 md:flex-row md:items-start">
              <span className="mb-2 md:w-4/12 label md:mb-0">GitHub URL</span>
              <Field type="url" name="gitHub" className="input md:w-8/12" />
            </label>
            <label className="flex flex-col mt-8 md:flex-row md:items-start">
              <span className="mb-2 md:w-4/12 label md:mb-0">
                Portfolio URL
              </span>
              <Field type="url" name="portfolio" className="input md:w-8/12" />
            </label>
            <label className="flex flex-col mt-8 md:flex-row md:items-start">
              <span className="mb-2 md:w-4/12 label md:mb-0">
                Other website
              </span>
              <Field type="url" name="other" className="input md:w-8/12" />
            </label>
          </div>

          <div className="mt-24">
            <h2 className="text-xl font-bold uppercase">
              Additional information
            </h2>
            <label>
              <Field
                component="textarea"
                name="comments"
                rows="4"
                className="w-full mt-8 input"
                placeholder="Add a cover letter or anything else you want to share."
              />
            </label>
          </div>

          {!isValid && submitCount > 0 && !fileError && (
            <p className="mt-8 text-sm text-red">
              * There is an error occured, please check above items
            </p>
          )}
          {serverError && (
            <p className="mt-8 text-sm text-red">* {serverError}</p>
          )}
          <button disabled={isSubmitting} type="submit" className="mt-4 btn">
            <svg>
              <use href="/icons/symbols.svg#send" />
            </svg>
            {isSubmitting ? 'Sending...' : 'Submit application'}
          </button>
        </Form>
      )}
    </Formik>
  )
}

ApplicationForm.propTypes = ApplicationFormType
