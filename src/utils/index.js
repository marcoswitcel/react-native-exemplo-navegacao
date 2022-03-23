

/**
 * Recebe uma lista de objetos com nome e id e retorna uma lista de objetos que
 * agrupam os dados recebidos por letra inicial do nome. Um objeto para cada
 * inicial encontrada. No objeto vai a inicial e a lista de objetos que
 * pertenciam a essa inicial.
 * 
 * @param {{ id: number, nome: string}[]} contacts Os objetos de contato devem
 * ter mais atributos, mas `id` e `none` é o mínimo a se esperar.
 * @returns {{ title: string, data: any[]}[]}
 */
export const groupByFirstLetter = (contacts) => {
    /** @type {{ title: string, data: any[]}[]} */
    const list = [];
    for (const contact of contacts) {
        const currentChar = contact.nome.charAt(0).toUpperCase();
        if (list.length === 0) {
            list.push({ title: currentChar, data: [ contact ] });
            continue;
        }

        const currentSection = list[list.length - 1];

        if (currentChar === currentSection.title) {
            currentSection.data.push(contact);
        } else {
            list.push({ title: currentChar, data: [ contact ] })
        }
    }
    return list;
}
