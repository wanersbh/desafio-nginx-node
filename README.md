# Desafio Nginx como Proxy Reverso

Este projeto consiste em aplicar os conceitos de utilização do Nginx como proxy reverso. O objetivo é configurar o Nginx para encaminhar solicitações dos usuários para uma aplicação Node.js. Essa aplicação, por sua vez, realizará operações de registro em um banco de dados MySQL, cadastrando um nome na tabela "people".

Ao acessar o Nginx, o usuário verá a seguinte resposta:

```
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.
```

## Funcionamento

1. O Nginx recebe a solicitação do usuário.
2. O Nginx encaminha a solicitação para a aplicação Node.js.
3. A aplicação Node.js adiciona um registro na tabela "people" do banco de dados MySQL.
4. A aplicação Node.js responde ao Nginx com a mensagem "\<h1>Full Cycle Rocks!\</h1>" seguida da lista de nomes cadastrados no banco de dados.

## Execução

Para executar o projeto, basta rodar o comando:

```
docker-compose up -d
```

Isso iniciará os containers necessários e disponibilizará a aplicação na porta 8080.

## Tecnologias Utilizadas

- Nginx
- Node.js
- MySQL
- Docker

## Entrega

O código-fonte e os arquivos de configuração devem ser disponibilizados em um repositório Git. Após a conclusão do projeto, faça a entrega através do repositório fornecido.

**Linguagem de Programação:** Node.js/JavaScript