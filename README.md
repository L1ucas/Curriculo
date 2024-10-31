# Meu Curriculum Vitae


Trabalho em processo de fazer um Currículo usando HTML + CSS. Eu pensei em 
fazer em LaTeX, mas acredito que CSS irá ser mais flexível. Utilizei 
browser-sync porque preciso de hot reloading para não precisar ficando F5 no
navegador toda hora.

Passos para compilar o currículo:
```bash
$ cp TEMPLATE.json info.json
$ npm install
$ npm run serve
```
As minhas informações pessoais não estão presentes no currículo, o cliente 
no navegador utiliza um `fetch()` para conseguir as informações do arquivo 
`info.json`. Esse arquivo precisa ser criado manualmente por enquanto.

Acredito que colocar as informações do currículo em um arquivo json é melhor
devido aos seguintes motivos:

- Caso seja necessário traduzir o currículo, só é preciso mudanças mínimas nas informações
- Caso eu mude o layout do documento, as informações não precisam ser mudadas

Basicamente são os mesmos motivos que arquivos json são usados em sites 
modernos. Decidi não utilizar uma framework como o Express.js porque é meio 
overkill pra esse projeto.


As seguintes tecnologias foram utilizadas:

- Node.js
- browser-sync

