# Titulo do Projeto

Teste-Ubistart
### Executing program
* Renomear .env-example para .env
* Rodar o Docker
```
docker-compose up
```
* Rodar o projeto
```
npm run start:dev
```
### Routes
* Para criar um usuário você deve acionar este endpoint POST com o exemplo de json a seguir.
* IMPORTANTE : COPIAR O ID DO USUÁRIO QUE FOI GERADO E RETORNADO PRA USO FUTURO EM OUTROS ENDPOINTS;
* Muito importante a senha ter caracteres minusculos, maiusculos e especial, isso é tratado ao enviar também.
@POST
```
http://localhost:3000/api/v1/users
```
* Ex JSON:
{
  "email": "teste@hotmail.com",
  "password": "Teste@123" 
}

* Para logar no sistema você deve acionar este endpoint POST com seu email e senha e copiar o TOKEN que ele irá retornar pra consultas futuras a partir dai.
@POST
```
http://localhost:3000/api/auth/login
```
* Ex JSON:
{
  "email": "teste@hotmail.com",
  "password": "Teste@123"
}

* Para criar um novo TODO você deve acionar este endpoint com o exemplo de JSON a seguir;
* Necessário configurar seu header Authorization com o Bearer (SEU TOKEN) que foi gerado ao logar.
@POST
```
http://localhost:3000/api/v1/todos
```
* Ex JSON:
{
	"idUsuario" : "seu id de usuario aqui",
	"task" : "joao-create-56555",
	"prazo": "2020-10-10 10:00:00",
	"isDone": 0
}

* Para listar os TODO do seu usuário use o endpoint a seguir com seu ID de usuário que foi gerado ao cadastrar usuário e retornado pra você.
* Necessário configurar seu header Authorization com o Bearer (SEU TOKEN) que foi gerado ao logar.
@GET
```
http://localhost:3000/api/v1/todos/allTasks/COLE SEU ID AQUI
```

* Para dar update em um TODO você deve acionar o endpoint a seguir do tipo @PUT.
* Necessário configurar seu header Authorization com o Bearer (SEU TOKEN) que foi gerado ao logar.
@PUT
```
http://localhost:3000/api/v1/todos/ID DA TASK AQUI
```
* Ex JSON:
{
	"task" : "joao-ssss-56555",
	"prazo": "2020-10-10 10:00:00",
	"isDone": 0
}


* Para deletar uma task você deve acionar o endpoint a seguir do tipo @DELETE.
* Necessário configurar seu header Authorization com o Bearer (SEU TOKEN) que foi gerado ao logar.
* Se o retorno for 204 foi deletado, pode conferir no endpoint de busca de TODOS
@DELETE
```
http://localhost:3000/api/v1/todos/ID DA TASK AQUI
```








## Authors

Contributors names and contact info

Richelmy Lopes  
