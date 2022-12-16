//if else

const num = 50;

if (num < 50) {
    console.log('Error');
} else if (num > 100) {
    console.log('too much');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!'): console.log('Error!');



//switch

const numnum = 50;

switch (num) {
    case 49:
        console.log('Nope');
        break;
    case 100:
        console.log('Nope again');
        break;
    case 50:
        console.log('Yep!');
        break;
    default:
        console.log('tresh');
        break;
}