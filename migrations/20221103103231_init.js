/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Userdata',table =>{
    table.increments('id');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('gmail').notNullable();
    table.string('password').notNullable();
    }).then((result) => {
        console.log('created')
    }).catch((err) => {
        console.log(err);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Userdata')
};
