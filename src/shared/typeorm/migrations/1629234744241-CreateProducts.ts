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
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'decimal',
                    precision: 10,
                    scale: 2
                },
                {
                    name:'quality',
                    type:'int'
                },
                {
                    name:'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
