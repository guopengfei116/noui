/**
 * @method 创建组件的工厂
 * 
 * @param {*} name 组件名称
 * 
 * @return 组件实例
 */
function getComponent(name) {
    var componentsMap = {
        "radio": RadioItem
    }

    return new componentsMap[name]();
}
