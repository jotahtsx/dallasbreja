import { ReactNode, ButtonHTMLAttributes } from 'react'
import { Button } from './button'

import { FaSpinner } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  children: ReactNode
}

export function ButtonWrapper({ loading, children, ...rest }: ButtonProps) {
  return (
    <>
      <Button disabled={loading} {...rest}>
        {loading ? <FaSpinner color="#fff" size={16} /> : <>{children}</>}
      </Button>
    </>
  )
}
