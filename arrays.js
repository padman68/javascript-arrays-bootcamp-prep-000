// TODO-1
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

// TODO-2
function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
}
 
function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...array]
  return array
}

// TODO-3
function addElementToEndOfArray(array, element) {
  array.push(element)
}

function destructivelyAddElementToEndOfArray(array, element) {
  [...array, element]
  return array
}

// TODO-4
function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
array.pop()
return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}


