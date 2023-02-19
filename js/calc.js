function calc() {
    this.add = function (n1, n2) {
        return n1 + n2
    }
    this.mult = function (n1, n2) {
        return n1 * n2
    }
    this.divid = function (n1, n2) {
        if (n2 === 0)
            return "На 0 ділити не можна"
        else
            return n1 / n2
    }
    this.diff = function (n1, n2) {
        return n1 - n2
    }
}

let calculator = new calc()

console.log(calculator.add(4, 3))
console.log(calculator.mult(2, 4))
console.log(calculator.divid(2, 2))
console.log(calculator.diff(2, 0))
