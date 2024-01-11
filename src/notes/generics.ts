function echo <T> (value:T):T {
    console.log(value);
    return value;
}

// constraining generics to certain types
function echoLength <T extends {length:number}> (value: T) : number {
    console.log(value.length);
    return value.length;
}

export {}