import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { author } from '../entities/author/author.entity'
import { Repository } from 'typeorm'

@Injectable({})
export class AuthService {
  constructor(
    @InjectRepository(author) private readonly author: Repository<author>,
  ) {}
}
