let panier = [
    [0 ,0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
const prix = {
    prixPommes : 13.50,
    prixPoires : 20,
    prixPrunes : 22,

}
const poids = {
    poidsPommes : 10,
    poidsPoires : 12,
    poidsPrunes : 15,

}

//https://stackoverflow.com/questions/18410341/using-multiple-buttons-on-same-function-that-redirects-to-different-functions
function add(panier,prix,poids,button)
{
    let x = button.id
    switch (x)
    {
        case '1' :
            panier[0][0] += 1;
            panier[0][1] += prix.prixPommes;
            panier[0][2] += poids.poidsPommes;
            panier[3][0] += 1;
            panier[3][1] += prix.prixPommes;
            panier[3][2] += poids.poidsPommes;

            document.querySelector("#qtePommes").textContent = panier[0][0];
            document.querySelector("#prixPommes").textContent = panier[0][1].toFixed(2);
            document.querySelector("#poidsPommes").textContent = panier[0][2];
            document.querySelector("#qteTotal").textContent = panier[3][0];
            document.querySelector("#prixTotal").textContent = panier[3][1];
            document.querySelector("#poidsTotal").textContent = panier[3][2];
            break;
        case '2' :
            panier[1][0] += 1;
            panier[1][1] += prix.prixPoires;
            panier[1][2] += poids.poidsPoires;
            panier[3][0] += 1;
            panier[3][1] += prix.prixPoires;
            panier[3][2] += poids.poidsPoires;

            document.querySelector("#qtePoires").textContent = panier[1][0];
            document.querySelector("#prixPoires").textContent = panier[1][1].toFixed(2);
            document.querySelector("#poidsPoires").textContent = panier[1][2];
            document.querySelector("#qteTotal").textContent = panier[3][0];
            document.querySelector("#prixTotal").textContent = panier[3][1];
            document.querySelector("#poidsTotal").textContent = panier[3][2];
            break;
        case '3' :
            panier[2][0] += 1;
            panier[2][1] += prix.prixPrunes
            panier[2][2] += poids.poidsPrunes
            panier[3][0] += 1;
            panier[3][1] += prix.prixPrunes;
            panier[3][2] += poids.poidsPrunes;

            document.querySelector("#qtePrunes").textContent = panier[2][0];
            document.querySelector("#prixPrunes").textContent = panier[2][1].toFixed(2);
            document.querySelector("#poidsPrunes").textContent = panier[2][2];
            document.querySelector("#qteTotal").textContent = panier[3][0];
            document.querySelector("#prixTotal").textContent = panier[3][1];
            document.querySelector("#poidsTotal").textContent = panier[3][2];
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
    document.querySelector("#qteTotal").textContent = panier[4][0];
    document.querySelector("#prixTotal").textContent = panier[4][1];
    document.querySelector("#poidsTotal").textContent = panier[4][2];



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









