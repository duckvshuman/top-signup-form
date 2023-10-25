const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-pass')
const error = document.querySelectorAll('.error')

function isValid(e, errorIndex, message) {
    let errorElem = error[errorIndex]
    if (!e.target.checkValidity()) {
        errorElem.textContent = '* ' + message
        e.target.setAttribute('style', 'border-color: red')
    } else {
        errorElem.textContent = ''
        e.target.setAttribute('style', 'border-color: black')
    }
}

firstName.addEventListener('keyup', (e) => {isValid(e, 0, 'First name cannot be empty')})
lastName.addEventListener('keyup', (e) => {isValid(e, 1, 'Last name cannot be empty')})
email.addEventListener('keyup', (e) => {isValid(e, 2, 'Please enter valid email address')})
phone.addEventListener('keyup', (e) => {isValid(e, 3, 'Please enter valid phone number')})
password.addEventListener('keyup', (e) => {isValid(e, 4, 'Password cannot be empty')})

confirmPassword.addEventListener('keyup', (e) => {
    if (e.target.value !== password.value) {
        error[5].textContent = '* Passwords do not match'
        e.target.setAttribute('style', 'border-color: red')
    } else {
        error[5].textContent = ''
        e.target.setAttribute('style', 'border-color: black')
    }
})