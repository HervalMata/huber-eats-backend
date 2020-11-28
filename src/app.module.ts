import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [RestaurantsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'math3036',
      database: 'huber-eats',
      synchronize: true,
      logging: true,
    }),
    GraphQLModule.forRoot({
    autoSchemaFile: true,
  }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
