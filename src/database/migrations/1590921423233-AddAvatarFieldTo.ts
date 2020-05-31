import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddAvatarFieldTo1590921423233 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<VideoFacingModeEnum> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'avatar');
  }
}
