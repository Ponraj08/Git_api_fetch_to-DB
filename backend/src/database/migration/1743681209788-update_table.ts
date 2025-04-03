import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTable1743681209788 implements MigrationInterface {
    name = 'UpdateTable1743681209788'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`git\` DROP COLUMN \`login\``);
        await queryRunner.query(`ALTER TABLE \`git\` DROP COLUMN \`url\``);
        await queryRunner.query(`ALTER TABLE \`git\` DROP COLUMN \`repos_url\``);
        await queryRunner.query(`ALTER TABLE \`git\` DROP COLUMN \`issues_url\``);
        await queryRunner.query(`ALTER TABLE \`git\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`git\` ADD \`full_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`git\` ADD \`html_url\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`git\` ADD \`description\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`git\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`git\` DROP COLUMN \`html_url\``);
        await queryRunner.query(`ALTER TABLE \`git\` DROP COLUMN \`full_name\``);
        await queryRunner.query(`ALTER TABLE \`git\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`git\` ADD \`issues_url\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`git\` ADD \`repos_url\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`git\` ADD \`url\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`git\` ADD \`login\` varchar(255) NOT NULL`);
    }

}
