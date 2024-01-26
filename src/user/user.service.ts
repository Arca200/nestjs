import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  login() {
    return 'Hello World!'
  }

  register() {
    return 'Hello World?'
  }
}
