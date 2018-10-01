/**
 * @method 创建组件的工厂
 * 
 * @param {String} name   组件名称
 * @param {Array}  params 参数列表
 * 
 * @return 组件实例
 */
function getComponent(name, params = []) {
    var componentsMap = {
        radio: Radio,
        radioItem: RadioItem
    }

    return new componentsMap[name](...params);
}
