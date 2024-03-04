import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedModule } from './seed/seed.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    PostsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'mssql',
      host:process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database:process.env.DB_NAME,
      username:process.env.DB_USERNAME,
      password:process.env.SA_PASSWORD, 
      autoLoadEntities:true,
      synchronize:true,
      options: {
        encrypt: false,
      },
    }),
    SeedModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

