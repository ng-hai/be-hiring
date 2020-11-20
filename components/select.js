import classnames from 'classnames'

import { SelectType } from '../types'

export default function Select({ labelText, ...props }) {
  return (
    <div className={classnames(props.className, 'input h-10 relative w-full')}>
      <div
        style={{ textOverflow: 'ellipsis' }}
        className="whitespace-no-wrap overflow-hidden flex-1 pr-1"
      >
        <span>{labelText}</span>
      </div>
      <svg className="fill-current w-6 h-6 flex-shrink-0">
        <use href="/icons/symbols.svg#arrow-down" />
      </svg>
      <select
        {...props}
        className="appearance-none absolute inset-0 opacity-0 h-full w-full cursor-pointer"
      />
    </div>
  )
}

Select.propTypes = SelectType
