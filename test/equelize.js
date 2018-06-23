var db = require('../db/db'),
    timeLine = require('../model/timeline');
describe('DB', function(){
    it('insert', function(done) {
        var test = { altitude: '0',
        heading: '0',
        latitude: '34.5104144',
        accuracy: '13.70300006866455',
        speed: '0',
        longitude: '135.5471851',
        timestamp: '1528722441649'}
        db.sync().then(()=>timeLine.create(test)).then(jane => {
            console.log(jane);
            done();
        });
    });
});