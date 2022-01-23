import DB from "../database";

export class ContactRepository {

    /**
     * 
     * @param {object} param0
     * @param {string} param0.nome
     * @param {string} param0.telefone
     * @param {string} param0.endereco
     * @param {string} param0.numero
     * @param {string} param0.profissao
     * 
     * @returns {Promise<boolean>}
     */
    static async store({ nome, telefone, endereco, numero, profissao }) {
        try {
            const tx = await new Promise((resolve, reject) => {
                DB.transaction(resolve, reject);
            });

            await new Promise((resolve, reject) => {
                tx.executeSql(
                    'INSERT INTO contacts (nome, telefone, endereco, numero, profissao) VALUES (?,?,?,?,?)',
                    [ nome, telefone, endereco, numero, profissao ],
                    () => resolve(true),
                    reject,
                );
            });

            return true;

        } catch (error) {
            console.log('asdasd');
            return false;
        }
    }

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