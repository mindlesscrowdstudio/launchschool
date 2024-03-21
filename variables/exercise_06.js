/**
 * Will this program produce an error when run? W
 * Why or why not?
 */
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);