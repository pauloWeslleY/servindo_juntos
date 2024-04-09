import { z } from 'zod'
import { schemaFormContact } from '../schema'

type FormContactProps = z.infer<typeof schemaFormContact>

export type { FormContactProps }
