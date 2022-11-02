/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

recVolume = function (height) {
  let n = 3
  let volume
  let area

  return getlengthandwidth = function (dimension) {

    n--

    if (n === 2) {

      area = height * dimension
      return getlengthandwidth

    }

    if (n === 1) {

      volume = area * dimension
      return volume

    }

    if (n <= 0) {

      return volume

    }


  }

}


console.log(getlengthandwidth = recVolume(2))
console.log(getlengthandwidth(5))
console.log(getlengthandwidth(6))
console.log(getlengthandwidth())
console.log(getlengthandwidth())






/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
