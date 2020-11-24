// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    const newDriver = Object.assign({}, driver, { [key]: value });
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver
}

function deleteFromDriverByKey(driver, key){
    let newDriver = updateDriverWithKeyAndValue(driver, key, driver.key)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}
