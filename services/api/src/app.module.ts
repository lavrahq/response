import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [GraphqlModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
