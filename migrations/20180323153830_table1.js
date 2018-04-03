
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('resolutions', function(table) {
      table.increments('id')
      table.date('dueDate')
      table.string('resolution')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('resolutions')
    ])
};
