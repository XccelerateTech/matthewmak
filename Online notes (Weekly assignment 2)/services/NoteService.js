const JsonFile = require('../store/JsonFile')
class NoteService {

    constructor(jsonFile) {
        this.jsonFile = jsonFile;
        // this.user = user;
        if (this.user != undefined){
            console.log(`NoteService instantiated with: ${this.user}`)
            jsonFile.read((data) => {
                let maxId = data.notes[this.user].reduce((maxId, note) => {
                    if (maxId > note.id) {
                        return maxId;
                    } else {
                        return note.id;
                    }
                }, 0);
                this.nextId = maxId + 1;
            });
        }
    }

    create(note,user) {
        return this.jsonFile.write((data) => {
            note.id = this.nextId;
            this.nextId++;
            data.notes[user].push(note);
            return {
                id: note.id,
                data: data
            }
        })
    }

    delete(noteId,user){
        return this.jsonFile.write((data)=>{
            this.nextId--;
            data.notes[user].splice(noteId,1);
            data.notes[user].map((e)=>{
                if (e.id > noteId) {
                    e.id --;
                }
            })
            return {
                id: this.nextId - 1,
                data: data
            }
        })
    }

    list(user){
        return this.jsonFile.read((data)=>{
            return data.notes[user];
        })
    }

    update(noteId,input,user){
        return this.jsonFile.write((data)=>{
            data.notes[user][noteId].content = input;
            return {
                id: noteId,
                data: data,
            }
        })
    }

}

module.exports = NoteService;

//let noteService = new NoteService(new JsonFile('notes.json'));

// test add note
// noteService.create(
//     {
//         "id": 0,
//         "content": 'Hello'
//     });


// test delete note
// noteService.delete(2);

// test list note
// noteService.list().then((res)=>{
//     console.log(res);
//     }
// )

//test update
// noteService.update(2,'Hello');



