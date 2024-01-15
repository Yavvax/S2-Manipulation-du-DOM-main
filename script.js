const panier = {
    pommes : 0,
    poires : 0,
    prunes : 0,
    total : 0
}
const prix = {
    prixPommes : 0,
    prixPoires : 0,
    prixPrunes : 0,
    prixTotal : 0
}
const poids = {
    poidsPommes : 0,
    poidsPoires : 0,
    poidsPrunes : 0,
    poidsTotal: 0
}

//https://stackoverflow.com/questions/18410341/using-multiple-buttons-on-same-function-that-redirects-to-different-functions
function add(button)
{
    let x = button.id
    switch (x)
    {
        case '1' :
            addPomme(panier,prix,poids);
            break;
        case '2' :
            addPoire(panier,prix,poids);
            break;
        case '3' :
            addPrune(panier, prix, poids);
            break;
        default :
            return false;
    }





}
function addPomme(panier, prix, poids)
{
   panier.pommes = panier.pommes + 1
   prix.prixPommes = prix.prixPommes + 13.50
   poids.poidsPommes = poids.poidsPommes + 10
   panier.total = panier.total + 1
    prix.prixTotal= 13.50 + prix.prixTotal
    poids.poidsTotal = 10 + poids.poidsTotal
    document.querySelector("#qtePommes").textContent = panier.pommes;
    document.querySelector("#prixPommes").textContent = prix.prixPommes;
    document.querySelector("#poidsPommes").textContent = poids.poidsPommes;
    document.querySelector("#qteTotal").textContent = panier.total;
    document.querySelector("#prixTotal").textContent = prix.prixTotal;
    document.querySelector("#poidsTotal").textContent = poids.poidsTotal;



}
function addPoire(panier, prix, poids)
{
    panier.poires = panier.poires + 1
    prix.prixPoires = prix.prixPoires + 20
    poids.poidsPoires = poids.poidsPoires + 12
    panier.total = panier.total + 1
    prix.prixTotal= 20 + prix.prixTotal
    poids.poidsTotal = 12 + poids.poidsTotal
    document.querySelector("#qtePoires").textContent = panier.poires;
    document.querySelector("#prixPoires").textContent = prix.prixPoires;
    document.querySelector("#poidsPoires").textContent = poids.poidsPoires;
    document.querySelector("#qteTotal").textContent = panier.total;
    document.querySelector("#prixTotal").textContent = prix.prixTotal;
    document.querySelector("#poidsTotal").textContent = poids.poidsTotal;

}
function addPrune(panier, prix, poids)
{
    panier.prunes = panier.prunes + 1
    prix.prixPrunes = prix.prixPrunes + 22
    poids.poidsPrunes = poids.poidsPrunes + 15
    panier.total = panier.total + 1
    prix.prixTotal= 22 + prix.prixTotal
    poids.poidsTotal = 15 + poids.poidsTotal
    document.querySelector("#qtePrunes").textContent = panier.prunes;
    document.querySelector("#prixPrunes").textContent = prix.prixPrunes;
    document.querySelector("#poidsPrunes").textContent = poids.poidsPrunes;
    document.querySelector("#qteTotal").textContent = panier.total;
    document.querySelector("#prixTotal").textContent = prix.prixTotal;
    document.querySelector("#poidsTotal").textContent = poids.poidsTotal;

}









