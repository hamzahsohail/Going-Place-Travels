function sendEmail() {
  Email.send({
    SecureToken : "80f7879b-c119-4b90-8315-828c45cfe9af",
    To: "hamzahsohail1@gmail.com",
    From: document.getElementById('email').value,
    Subject: document.getElementById('tel').value + " New Inquiry",
    Body: document.getElementById('name').value + ": " + document.getElementById('message').value
  }).then((message) => alert(message));
}
