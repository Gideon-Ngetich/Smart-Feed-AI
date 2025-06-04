    const createAccount = async (e) => {
        console.log('clicked')
        // e.preventDefault(); 
        
            // Get user input values
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Create a data object to send to the backend
            const userData = {
                email: email,
                password: password
            };

            console.log(userData)
            // Send the data to the backend (API endpoint)
            const response = await fetch('http://localhost:1899/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })

            if (response.status === 201) {
                window.location.href = 'login.html';
                console.log(`Account created successfully`)
                console.log("Account successfully created")
            }}