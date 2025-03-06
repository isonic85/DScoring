const video = document.getElementById("video");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    // Försök att få tillgång till webbkamera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((err) => {
            console.log("Fel vid åtkomst till kamera: ", err);
            alert("Kameratillgång nekades. Var god tillåt kameran i din webbläsare.");
        });
});
