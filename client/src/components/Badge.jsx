
import clsx from 'classnames'
export default function Badge({ children, variant='success' }) {
  return (
    <span className={clsx('badge',
      variant==='success' && 'bg-green-50 text-green-700 ring-1 ring-green-200',
      variant==='danger' && 'bg-red-50 text-red-700 ring-1 ring-red-200',
      variant==='info' && 'bg-navy-50 text-navy-700 ring-1 ring-navy-200'
    )}>{children}</span>
  )
}
