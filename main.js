function f() {
    function f1() {
    $('.i1').css({"opacity" : "1"})
    $('.i5').css({"opacity" : "0"})
}

f1()

function f2() {
    $('.i2').css({"opacity" : "1"})
    $('.i6').css({"opacity" : "0"})
}

setTimeout(f2, 400)

function f3() {
    $('.i3').css({"opacity" : "1"})
    $('.i1').css({"opacity" : "0"})
}

setTimeout(f3, 900)

function f4() {
    $('.i4').css({"opacity" : "1"})
}

setTimeout(f4, 1200)

function f5() {
    $('.i5').css({"opacity" : "1"})
    $('.i2').css({"opacity" : "0"})
    $('.i3').css({"opacity" : "0"})
}

setTimeout(f5, 1400)

function f6() {
    $('.i6').css({"opacity" : "1"})
    $('.i4').css({"opacity" : "0"})
}

setTimeout(f6, 1900)
}

f()

setInterval(f, 2200)