import { z } from 'zod'

const schemaFormContact = z
  .object({
    name: z.string().min(1, { message: 'Informe seu nome!' }),
    lastName: z.string().min(1, { message: 'Informe seu sobrenome!' }),
    email: z
      .string()
      .min(1, { message: 'Informe seu email!' })
      .email('Digite um email válido'),
    text: z.string().min(1, { message: 'Informe o assunto do e-mail!' }),
    message: z.string().min(1, { message: 'Informe sua mensagem' }),
    terms: z.boolean(),
  })
  .refine(fields => fields.terms === true, {
    path: ['terms'],
    message: 'Precisa aceita os termos',
  })

type SchemaFormContactProps = z.infer<typeof schemaFormContact>

export { schemaFormContact }
export type { SchemaFormContactProps }
