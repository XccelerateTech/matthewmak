describe('Testing song class', () => {
    let Song = require('../script');
    let song;


    beforeEach(() => {
        song = new Song();
        song2 = new Song();
        song3 = new Song();
        song.name = 'Wonderwall';
        song.album = 'IDK';
        song.author = 'Oasis';
        song2.name = '21gun'
        song2.album = 'IDK';
        song2.author = 'Greenday'
        song3.name = 'Wonderwall';
        song3.album = 'IDK';
        song3.author = 'Oasis';
    });

    it('Test name', () => {
        expect(song.name).toEqual('Wonderwall');
    });

    it('Test album', () => {
        expect(song.album).toEqual('IDK');
    });

    it('Test author', () => {
        expect(song.author).toEqual('Oasis');
    });

    it('Test method', () => {
        expect(song.getDescription()).toEqual('The name of this song is Wonderwall and it is from the album IDK. It is written by Oasis');
    });

    it('Test check album method', () => {
        expect(song).toBeInTheSameAlbumAs(song2);
    });

    it('Test 2 songs with toBe', () => {
        expect(song).toBe(song3);
    });

    it('Test 2 songs with toEqual', () => {
        expect(song).toEqual(song3);    
    });


});

//toBe check if 2 objects are the same object
//toEqual check if the deep equility of objects, i.e. whether their content is exactly the same, with same properties and methods