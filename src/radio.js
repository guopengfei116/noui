class Radio {

    /**
     *Creates an instance of Radio.
     * @param {Number} quantity 单选数量
     * @param {Array} values    单选按钮选中后对应的值，默认与被选按钮的下标一直
     * @memberof Radio
     */
    constructor(quantity = 2, values) {
        this.disabled = false;
        this.checkedIndex = 0;

        // Array(quantity)创建的数组元素为空，无法调用forEach、map等遍历方法，必须先fill
        this.values = values
            || Array(quantity).fill().map((v, i) => i);

        this.items = Array(quantity).fill()
            .map(() => getComponent("radioItem"));

        defineProp(this, "value", {
            get() {
                return this.values[this.checkedIndex];
            }
        });

        this._init();
    }

    // 默认选中第一个
    _init() {
        this.check(this.checkedIndex);
    }

    check(checkedIndex) {
        if(this.disabled) return;
        
        this.checkedIndex = checkedIndex;
        this.items.forEach((item, i) => {
            if(i == checkedIndex) item.check();
            else item.uncheck();
        });
    }

    disable() {
        this.disabled = !this.disabled;
        this.items.forEach(item => item.disable());
    }

    undisable() {
        this.disabled = !this.disabled;
        this.items.forEach(item => item.undisable());
    }

}
