import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CreateUserSchema = z.object({
  name: z.string(),
  password: z.password().min(8),
  email: z.string().email(),
});

// class is required for using DTO as a type
export class CreateUserDTO extends createZodDto(CreateUserSchema) {}
