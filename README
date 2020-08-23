# LoginApp Api

Api basado en una authenticacióm simple con GraphQl y una conexión a una DB Mysql
en local dentro de un contenedor Docker.

# Documentación

La Api consta de un endpoint que valida el usuario

## URL > http://localhost:4000/graphql 

### POST

REQUEST:
```
  query Login($user: String!, $pass: String!) { 
      login(user: $user, pass: $pass) {
        message
      }
    }
  variables: {
    user: 'misatrincado',
    pass: '123'
  }
```

Auth exitoso
```json
{
  "data": {
    "login": {
      "message": "Logeado!🎊",
      "status": true
    }
  }
}

```

Auth Error
```json
{
  "data": {
    "login": {
      "message": "No existe el usuario 😞",
      "status": false
    }
  }
}
```
