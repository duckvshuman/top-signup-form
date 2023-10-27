const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-pass')
const error = document.querySelectorAll('.error')


function errorStyle(msgElem, text, target, color) {
    msgElem.textContent = text
    target.setAttribute('style', `border-color: ${color}`)
}


function isValid(target, errorIndex, message) {
    let errorElem = error[errorIndex]
    if (!target.checkValidity()) {
        errorStyle(errorElem, '* ' + message, target, 'red')
    } else {
        errorStyle(errorElem, '', target, 'black')
    }
}

firstName.addEventListener('keyup', (e) => {isValid(e.target, 0, 'First name cannot be empty')})
lastName.addEventListener('keyup', (e) => {isValid(e.target, 1, 'Last name cannot be empty')})
email.addEventListener('keyup', (e) => {isValid(e.target, 2, 'Please enter valid email address')})
phone.addEventListener('keyup', (e) => {isValid(e.target, 3, 'Please enter valid phone number')})
password.addEventListener('keyup', (e) => {isValid(e.target, 4, 'Password cannot be empty')})

confirmPassword.addEventListener('keyup', (e) => {
    let errorElem = error[5]
    if (e.target.value !== password.value) {
        errorStyle(errorElem, '* Passwords do not match', e.target, 'red')
    } else {
        errorStyle(errorElem, '', e.target, 'black')
    }
})