import { Module } from '@nestjs/common';
import { OrmModule } from 'src/orm/orm.module';
import { boardRepository } from './board.repository';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';

@Module({
  imports: [OrmModule],
  controllers: [BoardController],
  providers: [...boardRepository, BoardService],
})
export class BoardModule {}