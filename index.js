function receivesAFunction (callback){
    callback();
}

function returnsANamedFunction(){
    const namedFunction = ()=>'name';
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return ()=>'test'
}