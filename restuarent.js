var retter;
window.addEventListener('load', sidenErKlar)

function sidenErKlar() {
    $.getJSON("restuarent.json", function (dataRetter) {
        //console.log(dataRetter);
        retter = dataRetter;
    }).done(function (retter) {
        dataErHentet(retter);
    })

}

function dataErHentet(data) {
    data.retter.forEach(visRetter);
    //console.log(data)
}



function visRetter(retter) {

    var klon = document.querySelector("#retter_template").content.cloneNode(true);
    //console.log(klon);

    klon.querySelector(".data_navn").textContent = retter.navn;
    klon.querySelector(".data_billede").src = retter.billede;
    klon.querySelector(".modal .data_billede").src = retter.billede;
    klon.querySelector(".data_pris").textContent = retter.pris;


    klon.querySelector(".data_langbeskrivelse").textContent = retter.langbeskrivelse;
    klon.querySelector(".data_udsolgtStatus").textContent = retter.udsolgtStatus;
    klon.querySelector(".data_rabatPris").textContent = retter.rabatPris;
    klon.querySelector(".data_vegetarEgnethed").textContent = retter.vegetarEgnethed;


    klon.querySelector(".modal").id = "myModal" + retter.id;
    klon.querySelector("button.modalknap").dataset.target = "#myModal" + retter.id;

    //console.log(retter.id);

    document.querySelector(".produktliste .row").appendChild(klon);



}
