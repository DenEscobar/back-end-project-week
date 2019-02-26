
exports.up = function(knex, Promise) {
    return knex.schema.createTable('catNotes', table =>{
        table.increments();
        table.string("title", 255).notNullable();
        table.text('textBody').notNullable();
        table.specificType('tags', 'text[]')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('catNotes')
};
