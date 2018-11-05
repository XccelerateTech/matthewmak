let fs = require('fs');

let readAll = (path) => {
    fs.readdir(path, (err, files) => {
        files.forEach(file => {
            fs.stat(path + '/' + file,function(err,stats){
                if (stats.isDirectory()){
                    console.log(`${path + '/' + file} is a directory`);
                    readAll(path + '/' + file);
                } else if (stats.isFile()) {
                    console.log(`${path + '/' + file} is a file`);
                }
            })
        });
    })
}

readAll('./files');

// Refractor into promise

// let readDirAllSample = (path) =>{
//     return new Promise((res, rej)=>{
//         fs.readdir(path, (err, files)=>{
//             if(!err){
//                 resolve(files)
//             } else {
//                 reject(err)
//             }
//         })
//     })
// }

// let transverse = (path) =>{
    
// }

// let readdirAll = (path) => {
//     return new Promise((resolve,reject) => {
//         let arr = [];
//         fs.readdir(path, (err, files) => {
//             files.forEach(file => {
//                 arr.push(path + '/' + file);
//             });
//             resolve(arr);
//         })
//     })
// }

// let statAll = (filesPath) => {
//     return new Promise((resolve,reject) => {
//         let statArr = [];
//         filesPath.forEach(file => {
//             fs.stat(file, function(err,stats){
//                 statArr.push(stats);
//             })
//         })
//         resolve(statArr);
//     })
// }

// let determineAll = (statArr) => {
//     return new Promise((resolve,reject) => {
//         let strArr = [];
//         statArr.forEach(stats => {
//             if (stats.isDirectory()){
//                 // readdirAll(file);
//                 strArr.push(`\n${file} is a directory`)
//             } else if (stats.isFile()) {
//                 strArr.push(`\n${file} is a file`)
//             }
//         })
//     })
// }

// readdirAll('./files').then((filesPath) => {
//     return statAll(filesPath);
// }).then((statement) => {
//     for (let sen in statement) {
//         console.log(sen);
//     }
// })