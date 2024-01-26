import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { BlogModule } from './blog/blog.module'
import { DatabaseModule } from './db/database.module'

@Module({
  imports: [AuthModule, UserModule, BlogModule, DatabaseModule],
})
export class AppModule {}
