//............26-30..................//

// var prac = Math.round(2.5)
// console.log(prac)

// var hh = Math.random(4)
// console.log(hh)

// var uu = Math.ceil(5.4)
// console.log(uu)

// var rr = Math.ceil(5.4)
// console.log(rr)

// var ii = Number("11111")
// console.log(ii)


// var kk = 1111

// console.log(kk)
// var ll = kk.toString()

// console.log(ll)


// //.................chp21-25................//

// a code for making first letter capital 

var _name = prompt("enter your name")

var words = _name.split(" ")
var arr = []
for (var i=0; i<words.length; i++){
  var result =  words[i][0].toUpperCase() + words[i].slice(1);
  arr.push(result)
    console.log(result)

}
console.log(arr.join(" "))


// var find = "heloo, my name is Ahsan azeem"

// console.log(find.replace(`azeem`, `khan`))