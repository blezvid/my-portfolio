const form = document.getElementById('user-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    alert('Form submitted!');

    const formData = new FormData(form)

    const data = Object.fromEntries(formData)

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
})


