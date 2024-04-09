import { z } from 'zod'
import { schemaFormRegister } from '../schema'

type FormRegisterProps = z.infer<typeof schemaFormRegister>

export type { FormRegisterProps }
