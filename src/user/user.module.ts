import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { UserDataBaseModule } from '../entities/user/userDataBase.module'

@Module({
  imports: [UserDataBaseModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
