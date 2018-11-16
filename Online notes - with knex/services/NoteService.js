class NoteService {

    constructor(knex) {
        this.knex = knex;
    }

    async create(user) {
        let user_id;
        await this.knex('noteuser').select('id').where('username',user).then((rows) => { user_id = rows[0]['id'] })
        return await this.knex('note').insert({content:'', user_id:(user_id)})
    }

    async delete(noteId){
        return await this.knex('note').where('id',noteId).delete()
    }

    async list(user){
        let user_id;
        await this.knex('noteuser').select('id').where('username',user).then((rows) => { user_id = rows[0]['id'] })
        return await this.knex('note').select('id','content').where('user_id',user_id);
    }

    async update(noteId,input){
        return await this.knex('note').update({content:input}).where('id',noteId)
    }

}

module.exports = NoteService;



