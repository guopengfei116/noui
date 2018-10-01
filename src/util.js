function defineProp(obj, prop, desc) {
    defaultDesc = {
        configurable: true,
        enumerable: true
    };

    Object.defineProperty(obj, prop, Object.assign(defaultDesc, desc));
}
