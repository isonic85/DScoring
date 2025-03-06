const video = document.getElementById("video");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const toggleBtn = document.getElementById("toggleBtn");

let stream;
let currentStream;
let currentDevice = "user"; // Starta med främre kameran (user)

startBtn.addEventListener("click", startCamera);
stopBtn.addEventListener("click", stopCamera);
toggleBtn.addEventListener("click", switchCamera);

function startCamera() {
    // Stoppa kameran om den redan är igång
    if (stream) {
        stopCamera();
    }

    // Hämta den aktuella kameran
    navigator.mediaDevices.getUserMedia({ video: { facingMode: currentDevice } })
        .then((newStream) => {
            currentStream = newStream;
            video.srcObject = newStream;
            stream = newStream;
        })
        .catch((err) => {
            console.log("Fel vid åtkomst till kamera: ", err);
            alert("Kameratillgång nekades. Var god tillåt kameran i din webbläsare.");
        });
}

function stopCamera() {
    if (stream) {
        // Stoppa alla video tracks
        let tracks = stream.getTracks();
        tracks.forEach(track => track.stop()); // Stoppa alla strömmar
        video.srcObject = null; // Frigör strömmen från videoelementet
        stream = null;
    }
}

function switchCamera() {
    // Växla mellan främre och bakre kameran
    currentDevice = currentDevice === "user" ? "environment" : "user"; // Byt mellan 'user' (främre) och 'environment' (bakre)
    
    if (stream) {
        stopCamera(); // Stoppa kameran för att byta
        startCamera(); // Starta om med den nya kameran
    }
}
