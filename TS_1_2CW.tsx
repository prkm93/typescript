function greet(name:string): void {
     console.log(`Hello ${name}`)
}


// greet("Pradeep")


function addNumbers (a: number, b: number): void {
    console.log(a + b);
}

// addNumbers(2,3)


function calculateVolume (length: number, width: number, height: number) : number {
    return length*width*height;
}

console.log(calculateVolume(2,3,4));

function printInfo (info: string|number) : void {
    console.log(info);
}

printInfo("ravi")
printInfo(34)
