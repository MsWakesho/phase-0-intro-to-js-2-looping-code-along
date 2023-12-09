const sinon = require('sinon');

function writeCards(names, occasion) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${occasion} gift!`);
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  describe('index.js', () => {
    let spy;
  
    beforeEach(() => {
      spy = sinon.spy(console, 'log');
    });
  
    afterEach(() => {
      spy.restore();
    });
})

