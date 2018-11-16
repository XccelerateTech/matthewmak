const express = require('express');

class NoteRouter {

    constructor(noteService){
        this.noteService = noteService;
    }

    router(){
        let router = express.Router();

        router.get('/',(req,res)=>{
            return this.noteService.list(this.decode(req))
                .then((data)=>{
                    res.json(this.sorted(data));
                }).catch((err)=>{
                    res.status(500).json(err);
                })
        })

        router.put('/:id',(req,res)=>{
            return this.noteService.update(req.params.id,req.body.content)
                .then(()=>{
                    this.noteService.list(this.decode(req))
                        .then((data)=>{
                            res.json(this.sorted(data));
                        })
                }).catch((err)=>{
                    res.status(500).json(err);
                })
        })

        router.post('/',(req,res)=>{
            return this.noteService.create(this.decode(req))
                .then(()=>{
                    this.noteService.list(this.decode(req))
                        .then((data)=>{
                            res.json(this.sorted(data));
                        })
                }).catch((err)=>{
                    res.status(500).json(err);
                })
        })

        router.delete('/:id',(req,res)=>{
            return this.noteService.delete(req.params.id)
                .then(()=>{
                    this.noteService.list(this.decode(req))
                        .then((data)=>{
                            res.json(this.sorted(data));
                        })
                }).catch((err)=>{
                    res.status(500).json(err);
                })
        })

        return router;
    }

    decode(req){
        return Buffer.from(req.headers.authorization.slice(6),'base64').toString('utf8').split(':')[0];
    }

    sorted(data){
        return data.sort((a,b) => {
            return a.id - b.id;
        })
    }

}

module.exports = NoteRouter;