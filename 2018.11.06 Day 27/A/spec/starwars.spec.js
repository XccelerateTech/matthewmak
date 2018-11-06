const sw = require('../starwars');


describe('Testing starwars.js: ', () => {

    let obiwan;
    let anakin;

    beforeEach(() => {
        obiwan = new sw.Jedi("Obiwan Kenobi", 70, 700);
        anakin = new sw.Sith("Anakin Skywalker", 100, 1000);

        spyOn(obiwan, 'attack').and.callThrough();;
        spyOn(obiwan, 'injure').and.callThrough();;
        spyOn(anakin, 'attack').and.callThrough();;
        spyOn(anakin, 'injure').and.callThrough();;
        spyOn(sw, 'duel').and.callThrough();
        sw.duel(obiwan, anakin);
        jasmine.clock().install();
    });
    
    afterEach(() => {
        jasmine.clock().uninstall();
    });


    it('Duel called', () => {
        expect(sw.duel.calls.any()).toEqual(true);
    });
    
    it('Duel called count', () => {
        expect(sw.duel.calls.count()).toEqual(1);
    });
    
    it('Anakin attacked', () => {
        expect(anakin.attack).toHaveBeenCalled();
    });

    it('Anakin attack count', () => {
        expect(anakin.attack.calls.count()).toEqual(6);
    });

    it('Anakin injure', () => {
        expect(anakin.injure.calls.argsFor(1)).toBeLessThan(71);
    });

    it('Obiwan attacked', () => {
        expect(obiwan.attack).toHaveBeenCalled();
    });

    it('Obiwan attack count', () => {
        expect(obiwan.attack.calls.count()).toEqual(6);
    });

    it('Obiwan injure', () => {
        expect(obiwan.injure.calls.argsFor(1)).toBeLessThan(101);
    });

    it('Anakin revival', () => {
        sw.duel(obiwan, anakin);
        jasmine.clock().tick(5001);
        expect(anakin.health).toEqual(800);
    });

});

