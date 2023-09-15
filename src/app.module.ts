import { Module } from '@nestjs/common';
import { StudentModule } from './student/student.module';
import {MongooseModule} from '@nestjs/mongoose'
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://yasharora2678:Yash1234@cluster0.tg1xjhm.mongodb.net/?retryWrites=true&w=majority'),
    StudentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
