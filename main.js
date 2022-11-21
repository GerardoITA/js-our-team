let teamArray = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "immagine": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "immagine": "angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "immagine": "walter-gordon-office-manager"
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "immagine": "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "immagine": "scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "immagine": "barbara-ramos-graphic-designer.jpg"
    }

]

console.log(teamArray)

for (let i = 0; i < teamArray.length; i++){
    let teamMember = teamArray[i];
    document.getElementById("paint").innerHTML += `
            <div class="box">${teamMember.nome}, ${teamMember.ruolo}, ${teamMember.immagine}</div>
        `;

}

