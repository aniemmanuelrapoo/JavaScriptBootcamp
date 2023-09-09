// This is a single line of code
// go to the begining or end of the code hold shift up or down to select or right or left
//ctl + left or right to move cursor fast

/*
Multi-line Comment
console.log(100);

console.log('Hello World')

console.log(20, 'Hello', true)
*/
const x = 100;

console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({ name: 'Rapoo', email: 'emmanuelrapoo.com' });

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'background-color:#fff; padding:10px; color:green;';

console.log('%cHello World', styles)