import { MigrationInterface, QueryRunner } from "typeorm";

export class NewTable1743946819705 implements MigrationInterface {
    name = 'NewTable1743946819705'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`git_cd_repo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`node_id\` varchar(255) NOT NULL, \`full_name\` varchar(255) NOT NULL, \`html_url\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`git_cd_repo\``);
    }

}
