### Tarea 1 Postulación

# LoginApp Api


Api basado en una authenticacióm simple con GraphQl y una conexión a una DB Mysql
en local dentro de un contenedor Docker.

# Documentación

La Api consta de varios endpoints que administran los usuarios

## URL > http://localhost:4000/graphql 

### Login

REQUEST:
```
  query Login($user: String!, $pass: String!) { 
      login(user: $user, pass: $pass) {
        message
      }
    }
```

### ObtainUsers

REQUEST:
```
 query {
    obtainUsers {
      id,
      user,
      email,
    }
  }
```


### CreateUser

REQUEST:
```
  query Login($user: String!, $email: String!, $pass: String!) {
      createUser(user: $user, email: $email ,pass: $pass)
  }
```


### UpdateUser

REQUEST:
```
   mutation UpdateUser($id: Int!, $user: String, $email: String) {
      updateUser(id: $id,user: $user, email: $email)
    }
```

