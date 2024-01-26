import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('user_pk', ['username'], { unique: true })
@Index('user_pk_2', ['email'], { unique: true })
@Entity('user', { schema: 'myblog' })
export class User {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'userId',
    comment: '用户唯一的id',
  })
  userId: number

  @Column('varchar', {
    name: 'username',
    unique: true,
    comment: '用户名',
    length: 10,
  })
  username: string

  @Column('int', { name: 'password', comment: '密码' })
  password: number

  @Column('varchar', {
    name: 'email',
    unique: true,
    comment: '注册邮箱',
    length: 20,
  })
  email: string

  @Column('tinyint', { name: 'state', comment: '用户信息的可用性', width: 1 })
  state: boolean
}
