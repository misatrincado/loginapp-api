var express = require('express');
var cors = require('cors');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var mysql = require('./src/db');
const util = require('util');
const query = util.promisify(mysql.query).bind(mysql);

var schema = buildSchema(`
  type Login {
      message: String!,
      status: Boolean!
  }

  type ObtainUsers {
    id: Int!,
    user: String!,
    email: String!,
    pass: String!
  }

  type Query {
    login(user : String, pass: String): Login
    createUser(user:String!, email:String!, pass:String!): String
    obtainUsers : [ObtainUsers!]!
  }

  type Mutation {
    updateUser(id: Int!, user: String, email: String, pass: String) : String
  }
`);

var root = {
  login: async ({ user, pass }) => {
    const key = 'SELECT * FROM users WHERE user=? and pass=?;';
    const rows = await query(key, [user, pass])
    return {
      message: rows.length > 0 ? 'Logeado!🎊' : 'No existe el usuario 😞',
      status: rows.length > 0 ? true : false
    };
  },
  createUser: async ({ user, email, pass }) => {
    const key = 'INSERT INTO users (user, email, pass) VALUES (?,?,?);'
    await query(key, [user, email, pass])
    return 'Creado!';
  },
  obtainUsers: async () => {
    const key = 'SELECT * FROM users;';
    const rows = await query(key)
    return rows;
  },
  updateUser: async ({ id, user, email }) => {
    const key = 'UPDATE users SET user=?, email=? WHERE id=?';
    const rows = await query(key, [user, email, id])
    return 'Actualizado!';
  },
};

var app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);

console.log('Running at http://localhost:4000/graphql 🚀');