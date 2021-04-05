// string litrals

const firstName = 'Yagnesh';

const lastName = 'Modh';

const fullName = firstName + '\t' + lastName;

const fullNameES6 = `${firstName}  


${lastName}`

console.log(fullNameES6);


console.log(fullName);

// Yagnesh's car

const poss = firstName + '\'s car';

console.log(poss);


const title = 'React Training'

const html = '<!DOCTYPE html>' +
'\n<html lang="en">' +
'\n<head>' +
    '\n\t<meta charset="UTF-8">' +
    '\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
    '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '\n\t<title>'+ title +'</title>' +
'\n</head>' +
'\n<body>' +
    '\n' +
'\n</body>' +
'\n</html>';

const slES6 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    
</body>
</html>`

console.log(html);

console.log(slES6);



