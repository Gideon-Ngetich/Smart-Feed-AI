const endpoint = "http://localhost:3000";

const login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");
  try {
    if (email === "" || password === "") {
      message.innerHTML = "Email and password are required";
      console.log("Email and password required")
      return;
    }
    console.log(email, password);
    const response = await fetch(`${endpoint}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data.user.email);

    if (data.success) {
      localStorage.setItem("user", data.user.email);
      window.location.href = "Homepage.html";
    }
    else{
      console.log("wrong login details")
    }
  } catch (err) {
    console.error(err);
  }
};