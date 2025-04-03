import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"


@Entity()
export class git {

    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column()
    name: string;
    @Column()
    node_id:string
    @Column()
    full_name: string;
    @Column()
    html_url: string;
    @Column()
    description: string;

    
}