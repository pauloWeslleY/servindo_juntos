import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMuiTheme } from '@/hooks/useMuiTheme'
import { FormContactProps } from '../types'
import { schemaFormContact } from '../schema'

export const useFormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormContactProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaFormContact),
  })
  const theme = useMuiTheme()

  const createContact = (data: FormContactProps) => {
    console.log({ data })
  }

  return {
    errors,
    theme,
    register,
    handleSubmit,
    createContact,
  }
}
