class Song {
    constructor(){
        this.name;
        this.album;
        this.author;

    }

    getDescription(){
        return `The name of this song is ${this.name} and it is from the album ${this.album}. It is written by ${this.author}`
    }

    isInSameAlbum(othersong){
        if (othersong.album == this.album) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Song;