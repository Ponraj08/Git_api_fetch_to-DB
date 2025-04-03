import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1743676162774 implements MigrationInterface {
    name = 'CreateTable1743676162774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`git\` (\`id\` int NOT NULL AUTO_INCREMENT, \`login\` varchar(255) NOT NULL, \`node_id\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`repos_url\` varchar(255) NOT NULL, \`issues_url\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`git\``);
    }

}
