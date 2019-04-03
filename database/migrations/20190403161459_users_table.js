exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(tbl) {
    tbl.increment(id);
    tbl
      .string("username", 128)
      .notNullable()
      .unique();
    tbl.string("password", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
