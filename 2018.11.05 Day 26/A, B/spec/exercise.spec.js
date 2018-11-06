describe('Name of the group', () => {

    it('first it',()=>{
        console.log('I am the it block 1!');
    })
    
    it('second it',()=>{
        console.log('I am the it block 2!');
    })
    
    it('third it',()=>{
        console.log('I am the it block 3!');
    })
    
    it('forth it',()=>{
        console.log('I am the it block 4!');
    })

    it('fifth it with error',()=>{
        throw new Error('I am the it block 5 but I fail');
    })
    
});