import { string, shape, arrayOf, number } from 'prop-types'

export const JobType = shape({
  id: string,
  text: string,
  descriptionPlain: string,
  lists: arrayOf(
    shape({
      text: string,
      content: string,
    })
  ),
  categories: shape({
    commitment: string,
    team: string,
    department: string,
    location: string,
  }),
})

export const SelectType = {
  labelText: string,
}

export const ApplicationFormType = {
  applicationId: string.isRequired,
}

export const ErrorType = {
  statusCode: number.isRequired,
}
