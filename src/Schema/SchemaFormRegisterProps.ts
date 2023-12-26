import { z } from 'zod'

const schemaForm = z.object({
  email: z
    .string()
    .min(1, { message: 'Informe seu email' })
    .email('Digite um email valido'),
})

type SchemaFormProps = z.infer<typeof schemaForm>

export { schemaForm }
export type { SchemaFormProps }
