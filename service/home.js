module.exports = {
  register: async (name, pwd) => {
    let data;
    if (name === 'smallsun' && pwd === '123456') {
      data = `Hello, ${name}!`;
    } else {
      data = 'account error';
    }
    return data;
  }
}
