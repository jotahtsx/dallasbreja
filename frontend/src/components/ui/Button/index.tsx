import { ReactNode, ButtonHTMLAttributes } from 'react'
import { Button } from 'styles/ui/Button'

import { FaSpinner } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  children: ReactNode
}

export function Btn({ loading, children, ...rest }: ButtonProps) {
  return (
    <Button disabled={loading} {...rest}>
      {loading ? (
        <FaSpinner color="#fff" size={16} />
      ) : (
        <span className="buttonText">{children}</span>
      )}
    </Button>
  )
}
