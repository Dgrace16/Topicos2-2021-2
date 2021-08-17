import { type } from "os";
import { MigrationInterface, QueryRunner, Table, } from "typeorm";

export class CreateProducts1629234744241 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // vamos criar uma tabela no banco de dados 
        await queryRunner.createTable(new Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'uuid'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
