import { z } from 'zod'

const schemaFormRegister = z.object({
  email: z
    .string()
    .min(1, { message: 'Informe seu email' })
    .email('Digite um email valido'),
})

export { schemaFormRegister }
