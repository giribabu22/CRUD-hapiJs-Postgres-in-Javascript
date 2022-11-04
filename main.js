const hapi = require('@hapi/hapi');
const { handler } = require('@hapi/hapi/lib/cors');
const User = require('./services/crud.model');
const fun = new User();

(async ()=>{
    const app = hapi.Server({port:'8000',host:'localhost'})

    app.route([
        {
            method:'POST',
            path:'/create',
            handler: fun.insertData
        },
        {
            method: 'GET',
            path: '/read/{id}',
            handler: fun.getDataBy_id
        },
        {
            method: 'delete',
            path:'/delete/{id}',
            handler:fun.delete_user_By_Id
        },
        {
            method:'update',
            path:'/update/{id}',handler:fun.updateUserData
        },
        {
            method: 'get',
            path:'/read_all_data',
            handler:fun.getAllUsersData
        },
        {
            method:'patch',
            path:'/update_data/{id}',
            handler:fun.updateUserData
        }
    ])
    await app.start()
    console.log(app.info.uri);
})()