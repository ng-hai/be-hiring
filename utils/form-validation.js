import spected from 'spected'
import * as Validator from './validators'

function getErrorsFromValidationResult(validationResult) {
  const FIRST_ERROR = 0

  const initialValue = {}
  return Object.keys(validationResult).reduce((errors, fieldName) => {
    if (validationResult[fieldName] !== true) {
      return {
        ...errors,
        [fieldName]: validationResult[fieldName][FIRST_ERROR],
      }
    }

    return errors
  }, initialValue)
}

export function validate(getValidationSchema) {
  // Passed from Formik
  return values => {
    const spec = getValidationSchema(values)
    const validationResult = spected(spec, values)
    return getErrorsFromValidationResult(validationResult)
  }
}

export const applicationSchema = () => ({
  name: [[Validator.isNotEmtpyString, 'Please fill in your full name']],
  email: [
    [Validator.isNotEmtpyString, 'Please fill in your email address'],
    [Validator.isValidEmail, 'Invalid email address format'],
  ],
})
