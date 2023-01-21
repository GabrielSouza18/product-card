var imgAtual = "sofaestatico.png";
var imgPosterior = "sofa.gif";
function trocar() {
  document.getElementById("sofaestatico").src = imgAtual;
  let aux = imgAtual;
  imgAtual = imgPosterior;
  imgPosterior = aux;
}
//Codigo usado para trocar o JPG para GIF ao clicar no Botão com a imagem "360"
//No clique a ImgAtual Passa ser a imgPosterior, e ao clicar novamente a imgPosterior 
//Passa ser a imgAtual que seria a Estatica.