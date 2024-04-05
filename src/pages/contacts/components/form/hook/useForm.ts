import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  SchemaFormContactProps,
  schemaFormContact,
} from '@/Schema/SchemaFormContactProps'
import { useMuiTheme } from '@/hooks/useMuiTheme'

export const useForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaFormContactProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaFormContact),
  })
  const theme = useMuiTheme()

  const createContact = (data: SchemaFormContactProps) => {
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
