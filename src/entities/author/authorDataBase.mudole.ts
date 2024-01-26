import { author } from './author.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([author])],
})
export class AuthorDataBaseMoutum {}
