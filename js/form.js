document.getElementById('firebaseForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // Collecting form data
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Sending form data to Firebase
    const res = await fetch("https://form-c1570-default-rtdb.firebaseio.com/saurabhform.json", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            phone,
            subject,
            message
        })
    });

    // Handling the response
    if (res.ok) {
        alert("Data submitted successfully!");
        document.getElementById('firebaseForm').reset(); // Clear the form fields
    } else {
        alert("Failed to submit data.");
    }
});