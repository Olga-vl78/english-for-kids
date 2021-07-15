import { DbStore } from "../service/db-store";
import { IUser } from "./user";

export class UsersRepository {

    constructor(
        private readonly dbStore: DbStore
    ) {
    }

    getUser(hash: string) {
        const userAuth = this.dbStore.users.find((user) => user.hash === hash);
        console.log(userAuth)
        return Promise.resolve(userAuth);
    }
}
