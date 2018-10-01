function defineProp(obj, prop, desc) {
    defaultDesc = {
        configurable: true,
        enumerable: true
    };

    Object.defineProperty(obj, prop, Object.assign(defaultDesc, desc));
}

function random(min, max) {
    min = min || 0;
    max = max || 100;
    return Math.round(Math.random() * (max - min)) + min;
}
