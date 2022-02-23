//var myName = "John Doe" 
//alert ("Whats up " + myName)
var myButton = document.querySelector('button')

myButton.addEventListener('click', dataPrompt)

function dataPrompt() {
    //var firstName = prompt('Enter your first name', 'First Name')
    //var lastName = prompt('Enter your last name', 'Last Name')
    var firstNumber = prompt('Enter your first number', 'First Number')
    var secondNumber = prompt('Enter your last number', 'Second Number')
    var result = Number(firstNumber) + Number(secondNumber)
    //regular string concatation
    //alert("Hello World! " + firstName + " " + lastName)
    //example of using string literal
    //alert(`Hello World and Hello ${firstName} ${lastName}`)
    alert(`The result is ${result}`)
    document.querySelector('span').innerHTML = `The Result is ${result}`
    console.log(`The result is ${result}`)
}

       


