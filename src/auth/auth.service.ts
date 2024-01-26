import { Injectable } from '@nestjs/common'

@Injectable({})
export class AuthService {
  login() {
    return 'Hello World!'
  }

  register() {
    return 'Hello World?'
  }
}
