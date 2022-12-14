document.querySelectorAll("a").forEach((a)=>{
    // Jika di klik akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element)=>{
        computerChoice(element);
    })
})
function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");
    
    // membuat pilihan komputer dengan array
    let choice = ["Rock", "Paper","Scissors"];

    // pilihan random untuk komputer
    pilihanKomputer.innerHTML = choice[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilihan komputer(draw)
    if(pilihanUser == pilihanKomputer){
          setTimeout(()=>alert("DRAW"), 300)
    }

    // jika pilihan user yang menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER WIN");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER WINN");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("USER WINNN");
    }

    // jika pilihan user yang kalah
    if(pilihanUser == "Scissors" && pilihanKomputer == "Rock"){
        alert("USER LOSE");
    }else if(pilihanUser == "Rock" && pilihanKomputer == "Paper"){
        alert("USER LOSE");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Scissort"){
        alert("USER LOSE");
    }
}
