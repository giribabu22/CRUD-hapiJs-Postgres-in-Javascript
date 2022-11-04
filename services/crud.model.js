const knex = require('../config/con')
const Userdata = require("../module/joi")

class Users {

    async insertData(data) {
        try {
            const { first_name, last_name, gmail, password } = data.payload
            if (first_name === undefined || last_name === undefined || gmail === undefined || password === undefined) return { status: "error", message: "body data is empty..." }
            const presentData = await Userdata.query().where({ gmail: data.payload.gmail })
            if (presentData.length > 0) {
                return { status: "error", message: "users allready exist...", hint: "please try another email accaunt...." }
            } else {
                const userr = await Userdata.
                query().insert({ first_name, last_name, gmail, password })
                return {
                    status: "success", message: "users details inserted successfully...", users: {
                        first_name, last_name, gmail, password, id: userr.id
                    }
                }
            }
        } catch (err) {
            console.log(err);
            return { status: "error", message: err.message }
        }
    }

    async getDataBy_id(data) {
        try {
            let id = data.params.id
            console.log(id);
            const presentData = await Userdata.query().findById(id)
            if (presentData === undefined) {
                return { status: "error", message: "id not found..." }
            } else {
                return { status: "success", userData: presentData }
            }
        } catch (err) {
            return { status: 'error', message: err.message }
        }
    }

    async delete_user_By_Id(data) {
        try{
            let id = data.params.id
            let bool = await knex('Userdata').where({id:id}).delete()
            if (bool){
                return {status:'deleted successfully',}
            }else{
                return {status:'id not found'}
            }
        }catch(errors){
            return {status: "error",message: errors.message}
        }
    }

    async updateUserData(data) {
        try {
            let id = data.params.id
            const { first_name, last_name } = data.payload
            const updateData = await Userdata.query().findById(id).patch({first_name,last_name })
            if (updateData > 0) {
                return { status: "success", message: "user details updated successfully..." }
            } else {
                return { status: "error", message: "id not found..." }
            }
        } catch (error) {
            return { status: 'error', message: error.message }
        }
    }

    async getAllUsersData(data) {
        try {
            const AllUsers = await Userdata.query()
            if (AllUsers.length > 0) {
                return { status: "success", message: "all users fetched successfully......", count: AllUsers.length, Users: AllUsers }
            } else {
                return { status: "error", message: "any users dosn't exists..." }
            }

        } catch (error) {
            return { status: "error", message: error.message }
        }
    }

}

module.exports = Users;