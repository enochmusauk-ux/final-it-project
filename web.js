// Function to set a cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    // Calculate the expiration date
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    // Set the cookie with name, value, and expiration date
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to get a cookie value by name
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        // Trim leading spaces
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        // If the cookie is found, return its value
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return ""; // Return empty string if not found
}

// Function to check if a user is identified and prompt for input if not
function checkIdentity() {
    let userId = getCookie("userId");
    if (userId !== "") {
        alert("Welcome back, user: " + userId);
    } else {
        // Generate a simple unique ID (for demonstration) or use a server-generated one
        userId = prompt("Please enter a unique ID (e.g., username):", "");
        if (userId !== "" && userId !== null) {
            // Set the cookie to expire in 365 days
            setCookie("userId", userId, 365);
        }
    }
}