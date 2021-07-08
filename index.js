const employee = { 
    name:'Sam',
    streetAddress: '11 Broadway'
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key]: value });
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
} 
function deleteFromEmployeeByKey(obj, key, value) {
    return Object.assign({}, obj, { [key]: value });
    delete deleteFromEmployeeByKey.key; 
}
function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;
    delete destructivelyDeleteFromEmployeeByKey.key
    return obj;
}




 