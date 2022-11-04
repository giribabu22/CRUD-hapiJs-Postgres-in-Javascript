try{const config = require('../knexfile')['development'];
    const knex = require('knex')(config)
    module.exports = knex
}
catch{
    console.log(error);
}
    // const config = require('../knexfile')['development'];
    // const knex = require('knex')(config)
    // knex.schema.hasTable('userData').then((result) => {
    //     if (!result) {
    //         knex.schema.createTable("userData", function (table) {
    //             table.increments("id");
    //             table.string("Name").notNullable();
    //             table.string("Surname").notNullable();
    //             table.string("email").unique().notNullable();
    //             table.string("password").notNullable();
    //             table.string("city").notNullable();
    //         }).then((result) => {
    //             console.log('created')
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    //     }
    // }).catch((errors) => {
    //     console.log(errors.meassage);
    // });
    
    // module.exports = knex