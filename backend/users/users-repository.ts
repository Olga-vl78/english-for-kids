import {DB_STORE, DbStore} from "../service/db-store";

export class UsersRepository {

    constructor(
        private readonly dbStore: DbStore
    ) {
    }

    isAdmin(hash: string): boolean {
      return this.dbStore.admins.includes(hash);
    }

    getUser(hash: string) {
        return Promise.resolve(this.isAdmin(hash) ? {role: 'admin'} : {role: 'user'});
    }
}

export const USERS_REPOSITORY = new UsersRepository(DB_STORE);
