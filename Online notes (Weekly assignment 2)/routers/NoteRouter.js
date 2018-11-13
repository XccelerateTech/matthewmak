const express = require('express');

class NoteRouter {

    constructor(noteService){
        this.noteService = noteService;
    }

    router(){
        let router = express.Router();

        router.get('/',(req,res)=>{
            let user = Buffer.from(req.headers.authorization.slice(6),'base64').toString('utf8').split(':')[0];
            return this.noteService.list(user)
                .then((data)=>{
                    res.json(data);
                }).catch((err)=>{
                    res.status(500).json(err);
                })
        })

        router.put('/:id',(req,res)=>{
            let user = Buffer.from(req.headers.authorization.slice(6),'base64').toString('utf8').split(':')[0];
            console.log(req.body);
            return this.noteService.update(req.params.id,req.body.content,user)
                .then(()=>{
                    this.noteService.list(user)
                        .then((data)=>{
                            res.json(data);
                        })
                }).catch((err)=>{
                    res.status(500).json(err);
                })
        })

        router.post('/',(req,res)=>{
            let user = Buffer.from(req.headers.authorization.slice(6),'base64').toString('utf8').split(':')[0];
            return this.noteService.create({},user)
                .then(()=>{
                    this.noteService.list(user)
                        .then((data)=>{
                            res.json(data);
                        })
                }).catch((err)=>{
                    res.status(500).json(err);
                })
        })

        router.delete('/:id',(req,res)=>{
            let user = Buffer.from(req.headers.authorization.slice(6),'base64').toString('utf8').split(':')[0];
            return this.noteService.delete(req.params.id,user)
                .then(()=>{
                    this.noteService.list(user)
                        .then((data)=>{
                            res.json(data);
                        })
                }).catch((err)=>{
                    res.status(500).json(err);
                })
        })

        return router;
    }

}

module.exports = NoteRouter;