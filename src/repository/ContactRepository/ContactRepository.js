import DB from '../database';

export class ContactRepository {

  /**
   * Set que conterá todos os `listeners` que devem rodar ao
   * ocorrer um cadstro (store) de novo registro no banco
   * 
   * @constant
   * @type {Set<() => void>}
   */
  static onStoreListeners = new Set;

  /**
   * Método que auxilia na executação dos `listeners` cadastrados
   * 
   * @private
   * @param {'store'} type
   */
  static runListeners(type) {
    if (type !== 'store') return;

    for (const handler of this.onStoreListeners) {
      try {
        handler();
      } catch(ex) {
        console.error(ex);
      }
    }
  }

  /**
   * Grava um novo contato na tabela de contato
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

      this.runListeners('store');

      return true;

    } catch (error) {
      console.log('asdasd');
      return false;
    }
  }

  /**
   * Pega todos os registros da tabela de contatos
   * ordenados por nome de forma crescente
   * 
   * @returns {Promise<object[]>}
   */
  static async getAll () {
    const tx = await new Promise((resolve, reject) => {
      DB.transaction(resolve, reject);
    });

    return await new Promise((resolve, reject) => {
      tx.executeSql('SELECT * FROM contacts ORDER BY nome ASC', [], (_, { rows }) => resolve(rows._array), reject);
    });
  }
};

export default ContactRepository;
