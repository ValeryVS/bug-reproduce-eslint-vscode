import constants from 'constants';
import myvars from 'myvars';
import longPathVar from 'longPath';
import nonExist from 'nonExist';

const result = `constants: ${constants}; myvars: ${myvars}; longPathVar: ${longPathVar}`;

// eslint-disable-next-line no-console
console.log(result);
