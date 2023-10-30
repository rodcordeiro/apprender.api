import { FastifyRequest } from 'fastify';
import { UsersEntity } from '@/modules/users/entities/users.entity';

declare global {
  export type ApprenderRequest = {
    user: UsersEntity;
  } & FastifyRequest;
}
