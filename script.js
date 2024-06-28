
console.log('hello')



var form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    var fullName = document.getElementById('exampleFormControlFullname').value
    console.log(fullName)
    var emailAddress = document.getElementById('exampleFormControlInput1').value
    console.log(emailAddress)
    var visitorMessage = document.getElementById('exampleFormControlTextarea1').value
    console.log(visitorMessage)
})

