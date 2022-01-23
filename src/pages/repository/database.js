import * as SQLite from 'expo-sqlite';

export const DB = SQLite.openDatabase('db.contactsDB');

DB.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS contacts (id integer primary key not null, nome text, telefone text, endereco text, numero text, profissao text)'
  );
});

export default DB;
