import DB from "../Database";

export class ContactRepository {
    static async getAll () {
        const tx = await new Promise((resolve, reject) => {
            DB.transaction(resolve, reject);
        });

        return await new Promise((resolve, reject) => {
            tx.executeSql('SELECT * FROM contacts', [], (_, { rows }) => resolve(rows._array), reject);
        });
    }
}

export default ContactRepository;