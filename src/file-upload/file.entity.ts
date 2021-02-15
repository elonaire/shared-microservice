import { Table, Column, AllowNull, Model } from 'sequelize-typescript';

@Table
export class File extends Model<File> {
  // @Column({ primaryKey: true })
  // file_id: string;

  @AllowNull(false)
  @Column
  encoding: string;

  @AllowNull(false)
  @Column
  mimetype: string;

  @AllowNull(false)
  @Column
  destination: string;

  @AllowNull(false)
  @Column({ primaryKey: true })
  filename: string;

  @AllowNull(false)
  @Column
  path: string;

  @AllowNull(false)
  @Column
  size: number;
}
