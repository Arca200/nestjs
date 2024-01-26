import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('author', { schema: 'myblog' })
export class author {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'authorId',
    comment: '唯一的作者id',
  })
  authorId: number

  @Column('varchar', { name: 'name', comment: '作者的真实姓名', length: 10 })
  name: string

  @Column('varchar', { name: 'email', comment: '作者邮箱', length: 20 })
  email: string

  @Column('varchar', { name: 'password', length: 15 })
  password: string
}
