import { string } from 'prop-types'

export default function RoundIcon({ name }) {
  if (!name) {
    return null
  }
  return (
    <div className="w-8 h-8 mr-2 rounded-full bg-light-yellow flex items-center justify-center">
      <svg className="w-6 h-6 fill-current">
        <use href={`/icons/symbols.svg#${name}`} />
      </svg>
    </div>
  )
}

RoundIcon.propTypes = {
  name: string.isRequired,
}
