/**
 * @method 单选组件
 * 
 * @components have 4 states, the default 1
 * 1:禁用未选中 2:禁用选中 3:未选中 4:选中
 */
function RadioItem() {
    var status = 3;

    defineProp(this, "status", {
        set: function(val) {
            if(typeof val === 'number' && val >= 1 && val <= 4) {
                status = val;
            }
        },
        get: function() {
            return status;
        }
    });

}

RadioItem.prototype = {
    constructor: RadioItem,

    // 切换
    check: function(index) {
        if(this.status === 1 || this.status ===2) return;
        else this.status = this.status === 3? 4: 3;
    },

    // 禁用
    disable: function() {
        if(this.status === 1 || this.status ===2) return;
        else if(this.status == 3) this.status = 1;
        else if(this.status == 4) this.status = 2;
    },

    // 启用
    undisable: function() {
        if(this.status === 1) this.status = 3;
        else if(this.status === 2) this.status = 4;
    }

}
