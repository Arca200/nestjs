import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AuthorDataBaseModule } from '../entities/author/authorDataBase.mudole'

@Module({
  imports: [AuthorDataBaseModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
