import { DbStore } from "../service/db-store";
import { IUser } from "./user";

export class UsersRepository {

    constructor(
        private readonly dbStore: DbStore
    ) {
    }

    getUser(hash: string) {
        const status = this.dbStore.users.find((user) => user.hash === hash);
        console.log(status)
        return Promise.resolve(status);
    }
}