const jsonfile = require('jsonfile')

module.exports = class JsonFile {
    constructor(fileName){
        this.fileName = fileName;
    }

    write(transformer) {
        return new Promise((resolve, reject) => {
            jsonfile.readFile((__dirname  + '/'  +  this.fileName), (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    let result = transformer(data);
                    jsonfile.writeFile((__dirname + '/'  + this.fileName), result.data, {spaces: 2},  (err) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve([result.id]);
                        }
                    });
                }
            });
        })
    }

    read(transformer) {
        return new Promise((resolve, reject) => {
            jsonfile.readFile((__dirname + '/' + this.fileName), (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(transformer(data));
                }
            });
        });
    }
}