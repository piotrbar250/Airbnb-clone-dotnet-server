async function checkApiConnection() {
    try {
        const response = await fetch('http://localhost:5004/api/healthcheck');

        if (response && response.ok) {
            console.log("API is connected.");
            return true;
        } else {
            console.error("API connection failed.");
            return false;
        }
    } catch (error) {
        console.error("Error checking API connection:", error);
        return false;
    }
}

function performApiCheck() {
    (async () => {
        const status = await checkApiConnection();
        if (status) {
            console.log("yep");
        } else {
            console.log("else");
        }
    })();
}

// Call this function when you want to check the API connection
performApiCheck();
