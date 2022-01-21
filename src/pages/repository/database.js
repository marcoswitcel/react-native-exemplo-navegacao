import * as SQLite from 'expo-sqlite'


export const DB = SQLite.openDatabase('db.testDb');

DB.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS contacts (id integer primary key not null, nome text, telefone text, endereco text, numero text, profissao text)"
    );
    
    tx.executeSql('SELECT count(*) as result FROM contacts', [], (_, { rows }) => {
      if (rows._array[0]['result'] === 0) {
        tx.executeSql(
          'INSERT INTO contacts (nome, telefone, endereco, numero, profissao) VALUES (?,?,?,?,?)',
          ['Nome de teste', '99999-9999', 'casa', '111', 'Profissão']
        );
        tx.executeSql(
          'INSERT INTO contacts (nome, telefone, endereco, numero, profissao) VALUES (?,?,?,?,?)',
          ['Nome de teste 2', '99999-9999', 'casa', '111', 'Profissão']
        );
      }
    })
});

export default DB;
