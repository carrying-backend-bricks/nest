import { Board } from "./entity/board";
import { DataSource } from "typeorm";

export const boardRepository =[
    {
        provide: 'BOARD_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Board),
        inject: ['DATA_SOURCE'],
    },
];