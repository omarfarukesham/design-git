function a(){
    var x = 10
    return function b(){
        console.log(x)
    }
}
a()
console.dir(a())