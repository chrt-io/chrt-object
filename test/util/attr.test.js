import chrtObject from '~/charts/chrtObject';

describe('Testing attr functions', () => {
  // test('Test attr()', async () => {
  //   const chrtObj = new chrtObject();
  //
  //   const id = 'abc123';
  //   chrtObj.id(id)
  //
  //   expect(chrtObj.attr()).toMatchObject(chrtObj)
  // });
  //
  // test('Test attr(\'name\') and attr(\'name\', value)', async () => {
  //   const chrtObj = new chrtObject();
  //   const value = '0123456789';
  //   chrtObj.attr('name', value)
  //   const attr = chrtObj.attr('name')();
  //   expect(attr).toEqual(value)
  // });
  //
  // test('Test attr(\'name\') and attr(\'name\', func)', async () => {
  //   const chrtObj = new chrtObject();
  //   const value = 0;
  //   const func = (d) => d + 1;
  //   chrtObj.attr('add', func)
  //   console.log(chrtObj.attr('add'))
  //   const attr = chrtObj.attr('add')(value);
  //
  //   expect(attr).toEqual(value + 1)
  // });

  test('Test attr as a object method with a value', async () => {
    const chrtObj = new chrtObject();
    function time(value) {
      return this.attr('time', value)
    }
    chrtObj.time = time;

    const now = new Date();

    chrtObj.time(now);

    expect(chrtObj.time()()).toEqual(now)
  });

  test('Test attr as a object method with a function', async () => {
    const chrtObj = new chrtObject();
    function add10(value) {
      return this.attr('add10', value)
    }
    chrtObj.add10 = add10;

    chrtObj.add10(d => {
      return d + 10;
    });

    expect(chrtObj.add10()(10)).toEqual(20)
  });
})
