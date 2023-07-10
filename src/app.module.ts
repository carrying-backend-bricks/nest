import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';
import { OrmModule } from './orm/orm.module';
import { BoardController } from './board/board.controller';
import { BoardService } from './board/board.service';

@Module({
  imports: [UserModule, BoardModule, OrmModule],
  controllers: [BoardController],
  providers: [BoardService],
})
export class AppModule {}
