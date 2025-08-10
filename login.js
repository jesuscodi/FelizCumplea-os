function checkDate() {
    const input = document.getElementById('dob').value.trim();
    const correctDate = "07/07/2021"; // Cambia por la fecha real de Fátima

    if (input === correctDate) {
        window.location.href = "main.html";
    } else {
        alert("Ups... esa no es la fecha correcta 💔");
    }
}
