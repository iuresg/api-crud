import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1607278614695 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamptz",
                        default: 'now()'
                    },
                    {
                        name: "updated_at",
                        type: "timestamptz",
                        default: 'now()'
                    }



                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
