function deepEqual(obj1, obj2) {
    if (!(typeof obj1 == 'object' && obj1 != null) && !(typeof obj2 == 'object' && obj2 != null)) return false;
    
    let keysObj1 = Object.keys(obj1);
    let keysObj2 = Object.keys(obj2);
    
    if (keysObj1.length != keysObj2.length) return false;
    
    for (let key of keysObj1){
        if (!keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
}

var obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(obj, {nome: "Sweyd"}));