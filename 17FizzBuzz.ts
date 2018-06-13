 interface IFizzer {
    num : number, 
    name : string
}

function fizzBuzz(upTo : number, fizzers : IFizzer[]){
    const list=[]
    for(let i=1; i<=upTo; i++) {
        list.push(fizzBuzzGen(i, fizzers));
    }
    return list.join('\r\n');
}

function fizzBuzzGen(n : number, fizzers : IFizzer[]) :string {
    let output = '';
    fizzers.forEach(fizz => {
        if(n%fizz.num === 0) {
            output += fizz.name;
        }
    })
    if(output === '') {
        output = String(n);
    }

    return output;
}

const fizzBuzzConf = [
    {num: 3, name: "Fizz"},
    {num: 5, name: "Buzz"},
    {num: 7, name: "Bazz"}
]