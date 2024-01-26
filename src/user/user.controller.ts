import { Controller, Post } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  login() {
    return this.userService.login()
  }

  @Post('register')
  register() {
    return this.userService.register()
  }
}
