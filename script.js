function fetchCatFact() {
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            document.getElementById("cat-fact").textContent = data.fact;
        })
        .catch(error => {
            console.error("Kļūda ielādējot kaķu faktu:", error);
            document.getElementById("cat-fact").textContent = "Neizdevās ielādēt faktu. Pamēģini vēlreiz!";
        });
}


function showRandomBoxingTip() {
    const tips = [
        "Strādā pie kāju kustības – labs bokseris ir ātrs uz kājām!",
        "Neaizmirsti par aizsardzību – pacel rokas un turies aizsardzības pozīcijā!",
        "Katrs sitiens sākas no kājām – lieto visu ķermeni, lai iegūtu spēku!",
        "Īsa un precīza elpošana ir svarīga – izelpo, kad sit!",
        "Ēnošanas bokss (shadowboxing) ir lielisks veids, kā uzlabot tehniku!",
        "Trenē savu izturību – lec ar lecamauklu vismaz 10 minūtes dienā!",
        "Neaizmirsti par ķermeņa sitieniem – sitieni pa korpusu var nogurdināt pretinieku!",
        "Acu kontakts ar pretinieku – mācies paredzēt viņa nākamos gājienus!",
        "Strādā ar boksa maisu – attīsti spēku un izturību!",
        "Iesildīšanās ir svarīga – izvairies no traumām, veicot dinamisko iesildīšanos!"
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    
    document.getElementById("boxing-tip").textContent = randomTip;
}

