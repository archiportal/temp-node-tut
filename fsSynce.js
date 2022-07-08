const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

writeFileSync('./content/result-sync.txt',   //overriding the file
`Here is the result :\n${first}\n${second}`,
{flag: 'a'} //node will append this
)