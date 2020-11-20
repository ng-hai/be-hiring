import PropTypes from 'prop-types'
import classnames from 'classnames'

export default function SideBar({
  currentDepartment,
  defaultDeparmentText,
  departments,
  onChangeDeparment,
}) {
  return (
    <div className="hidden lg:block font-display tracking-widest">
      {['', ...departments].map(department => {
        const isSelected = currentDepartment === department
        return (
          <div key={department} className="mt-1">
            <div
              className={classnames(
                'font-bold uppercase text-12 cursor-pointer inline-flex items-center hover:text-dark-blue transition-all',
                {
                  'text-dark-blue': isSelected,
                  'text-dark-grey': !isSelected,
                }
              )}
              onClick={onChangeDeparment(department)}
            >
              <div
                style={{
                  backgroundColor: 'currentColor',
                  transition: 'width 50ms linear',
                }}
                className={classnames(`h-px mr-2`, {
                  'w-12': isSelected,
                  'w-4': !isSelected,
                })}
              />
              <div>{department || defaultDeparmentText}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

SideBar.propTypes = {
  currentDepartment: PropTypes.string,
  defaultDeparmentText: PropTypes.string,
  departments: PropTypes.array,
  onChangeDeparment: PropTypes.func,
}
