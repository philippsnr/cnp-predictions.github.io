const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('clicked');

    Email.send({
        SecureToken : "05223d73-163a-4e20-a33e-cead4591f260",
        To : 'info@cnp-predictions.de',
        From : 'info@cnp-predictions.de',
        Subject : "message from: " + email.value,
        Body : message.value
    }).then(
      message => alert(message)
    );

    Email.send({
        SecureToken : "05223d73-163a-4e20-a33e-cead4591f260",
        To : email.value,
        From : 'info@cnp-predictions.de',
        Subject : "Contact Formula",
        Body : "We received your message via the contact formula and will reply soon. cnp-team"
    }).then(
      message => alert(message)
    );
})