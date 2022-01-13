# Exemplo de uso das APIs de navegação do React Native

Conforme avançar vou atualizando o readme

## Rodando e testando

Primeiro instale o `Expo`, caso não tenha.
[Documentação detalhada para instalar](https://docs.expo.dev/get-started/installation/), ou digite o sguinte comando no terminal:

```bash
$ npm install --global expo-cli
```

A partir daí basta clonar este repositório, instalar as dependências do NodeJS e rodar `npm run start`.
Exemplo completo abaixo:

```bash
$ cd <pasta-deste-repositorio>
$ npm install
$ npm run start
```

Para testar, será necessário instalar o [App do Expo na Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US), ou na Apple Store se tiver um Iphone.
A partir do app do expo no seu celular é só scanear o QRCode que aparecerá na janela do terminal onde você rodou `npm run start`.

## Em que template essa estrutura de pastas se baseia

Esse repositório foi criado usando a `expo-cli`

```bash
# criando o projeto com o expo (template blank)
$ expo init react-native-exemplo-navegacao
# Instalando as dependências do react-navitaion para react native
$ npm install @react-navigation/native
$ npm install @react-navigation/stack
$ npm install @react-navigation/drawer
$ npm install @react-navigation/bottom-tabs
# dependências para o expo (https://reactnavigation.org/docs/5.x/getting-started)
$ expo install react-native-screens react-native-safe-area-context
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view


# instalando as dependências necessárias para trabalhar com a câmera
$ expo install expo-camera expo-contacts expo-sensors
```

## Referências

- React Navigation Getting Started DOC [https://reactnavigation.org/docs/getting-started](https://reactnavigation.org/docs/getting-started)
- Instalação da ferramenta ExpoCli [https://docs.expo.dev/get-started/installation/](https://docs.expo.dev/get-started/installation/)
- Utilização do `jsconfig.json` e diretiva de compilação `checkJs` [https://code.visualstudio.com/docs/languages/jsconfig](https://code.visualstudio.com/docs/languages/jsconfig)
