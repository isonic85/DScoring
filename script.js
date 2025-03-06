const video = document.getElementById("video");

// Försök att få tillgång till webbkamera
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        // Tilldela streamen från kameran till videoelementet
        video.srcObject = stream;
    })
    .catch((err) => {
        console.log("Fel vid åtkomst till kamera: ", err);
        alert("Kameratillgång nekades. Var god tillåt kameran i din webbläsare.");
    });
