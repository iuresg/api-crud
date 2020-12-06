import { EntityRepository, Repository } from "typeorm";
import User from '../entity/User'

@EntityRepository(User)
export class FindUserRepository extends Repository<User>{
    public async findByName(name: string): Promise<User[]>{
        return this.find({
            where:{
                name,
            }
        })
    }
}

@EntityRepository(User)
export class SaveUserRepository extends Repository<User>{
    public async SaveUser(name: string, hash: string, email: string): Promise<User >{
        return this.save({
            name: name,
            password: hash,
            email: email
        })
    }
}



