# Connect_Lab_Backend
API nestjs utilizando typeorm

## Primeiros passos

Para instalar as dependencias é preciso executar o comando **npm**:

```
$ npm install
```

## Comandos

No diretório do projeto, você pode executar:

### **dev**

Executa o aplicativo no modo de desenvolvimento. Que ficará exposto em: http://localhost:3000

```
$ npm run start:dev
```

## Configurações

Para rodar o projeto é preciso criar o arquivo .env na raiz do projeto, adicionar a uri de conexão do mongo e a porta que será executado, além da secret que servirá para gerar os tokens de autenticação.

```
# JWT
JWT_SECRET

# POSTGRESQL
DB_DIALECT=postgres
DB_HOST
DB_PORT
DB_USER
DB_PASS
DB_NAME=intelbras
```

## Endpoints disponiveis

### Criar Usuário:

```
POST: http://localhost:3000/auth/signup
Headers: {
	"Content-Type": "application/json"
}
Body{
"nome": Nome Usuário",
	"email": "usuario@gmail.com",
	"senha": "12345678",
	"confirmaSenha": "12345678",
	"endereco": {
		"cep":"12121-000",
		"logradouro": "Rua sebastião",
		"numero": "12",
		"bairro":"São Jorge",
		"cidade":"Luares",
		"estado": "SC"
	}
}
```
**Resultado:**
```
{
	"message": "Cadastro realizado."
}
```

### Fazer Login: 
```
POST: http://localhost:3000/auth/signin
Headers: {
	"Content-Type": "application/json"
}
Body{
	"email": "usuario@gmail.com",
	"senha": "12345678"
}
```
**Resultado:**
```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywibm9tZSI6IkVkdWFyZGEiLCJmb3RvVVJMIjoiaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vODM3NjQ3MDEvMjEwMjQ5Nzg2LTJiMmJlOTg5LWI3ZWQtNDFlZS04NTZmLTg3NmRkODAwMzBlMi5wbmciLCJlbWFpbCI6ImVkYUBnbWFpbC5jb20iLCJpYXQiOjE2NzM3ODQ4NTYsImV4cCI6MTY3Mzc4NTIxNn0.4bCSb7OnW-gvdBan0DNkuEqQsFBcHGi8KnYkiB9tAl8"
}
```

### Modificação de senha:
```
PACTH: http://localhost:3000/users/updatePassword
Headers{
	"Content-Type": "application/json"
  "Authorization": "Bearer token"
}
Body{
"email": "usuario@gmail.com",
	"senhaAtual": "12345678",
	"senha": "11122233",
	"confirmaNovaSenha":"11122233"
}
```
**Resultado:**
```
{
  message: `Senha atualizada com sucesso!`
}
```

### Perfil: 
```
GET: http://localhost:3000/users/profile
Headers{
  "Content-Type": "application/json"
  "Authorization": "Bearer token"
}
```

#### Resultado
```
{
	"nome": "Nome do usuário",
	"fotoURL": "https://user-images.githubusercontent.com/83764701/210249786-2b2be989-b7ed-41ee-856f-876dd80030e2.png",
	"email": "usuario@gmail.com",
	"endereco": {
		"id": 1,
		"cep": "12121-000",
		"logradouro": "Rua sebastião",
		"numero": "12",
		"bairro": "São Jorge",
		"cidade": "Luares",
		"estado": "SC"
	}
}
```

### Listar Dispositivos do Usuário:
```
GET: http://localhost:3000/devices/userDevices/?local
Headers{
  "Content-Type": "application/json"
  "Authorization": "Bearer token"
}
```

#### Resultado
```
[
  {
		"id": 13,
		"nome": "Detector de Fumaça Smart Intelbras",
		"tipo": "Detector",
		"fabricante": "Intelbras",
		"status": "Desligado",
		"info": "Protocolo de comunicação ZigBee",
		"ip": "109.42.103.133",
		"enderecoMAC": "9F-56-EF-38-02-CD",
		"local": "sala"
	}
]
```

### Vincular um dispositivo com usuário:
```
PATCH: http://localhost:3000/devices/addDeviceUser/
Headers{
  "Content-Type": "application/json"
  "Authorization": "Bearer token"
}
Body{
	"idDevice": 13,
	"local": "sala"
}
```

#### Resultado
```
{
	"message": "Dispositivo vinculado com sucesso!"
}
```

### Listar Detalhes de um dispositivo:
```
GET: http://localhost:3000/devices/detail?id
Headers{

}
```

#### Resultado
```
{
	"id": 3,
	"nome": "Lâmpada LED Wi-Fi Smart",
	"tipo": "Lâmpada",
	"fabricante": "Intelbras",
	"status": "Desligado",
	"info": "Lâmpada: 10W",
	"ip": "244.233.94.148",
	"enderecoMAC": "E7-A0-4D-C4-3D-49",
	"local": null
}
```

