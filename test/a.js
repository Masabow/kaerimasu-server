var count = 1;

class test{
    constructor() {
        this.cnt = count++;
    }

    getCnt() {
        return this.cnt;
    }
}

module.exports = new test();