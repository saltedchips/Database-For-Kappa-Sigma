const Models = require('../models');

class Services {
    constructor(sequelize){
        Models(sequelize);
        this.client = sequelize;
        this.models = sequelize.models;
    }


    async createUser({student_id, fname, lname, service_hrs, GPA, phone_num, street, city, state, zip, createdAt, updatedAt}){
        try{
            const user = await this.models.User.create({
                student_id, 
                fname, 
                lname, 
                service_hrs, 
                GPA, 
                phone_num, 
                street, 
                city, 
                state, 
                zip, 
                createdAt, 
                updatedAt
            })

            return user
        }catch(err){
            return err;
        }
    }

    async getAllUsersAttributes(){
        try {
            const users = await this.models.User.findAll({
                attrubites: {exclute: ['service_hrs']}
            })
            return users;
        }catch(err){
            return err;
        }
    }


    async findOneUser(){
        try{
            const users = await this.models.User.findOne({where: {student_id: document.getElementById('studentId').value }});
            return user;
        }catch(err) {
            return err;
        }
    }


    async getAllUsers(){
        try{
            const users = await this.models.User.findAll();
            return user;
        }catch(err) {
            return err;
        }
    }


    async getAllUsersWhere(){
        try{
            const users = await this.models.User.findAll({where: {/*IDK*/}})
            return user;
        }catch(err) {
            return err;
        }
    }

    async findOneUser(){
        try{
            const users = await this.models.User.destroy({where: {student_id: document.getElementById('studentId').value }})
            return user;
        }catch(err) {
            return err;
        }
    }




}

module.exports = Services;