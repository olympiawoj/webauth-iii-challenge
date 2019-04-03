const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("users").select("id", "username", "password");
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .first();
}

//this function is running an async function before returning the next async function
//since you need the id that is returned from `insert` before moving on, it's asynchronous

async function add(user) {
  const [id] = await db("users").insert(user);
  console.log(id);
  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
