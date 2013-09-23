//Anúncios
function ads(){
	//Esta função oculta as páginas e exibe os anúncios
	document.getElementById('ads').style.display='block';
	document.getElementById('App').style.display='none';
	document.getElementById('Blogs').style.display='none';
	document.getElementById('ChangeLog').style.display='none';
	document.getElementById('Editions').style.display='none';
	document.getElementById('Games').style.display='none';
	document.getElementById('Home1').style.display='none';
	document.getElementById('opensource').style.display='none';
	document.getElementById('programacao').style.display='none';
	document.getElementById('projetos').style.display='none';
	document.getElementById('sobre').style.display='none';
	document.getElementById('videos').style.display='none';
}
function noads(){
	document.getElementById('ads').style.display='none';
}
//Exibe as Páginas
function app(){
	noads();
	document.getElementById('App').style.display='block';
}
function blog(){
	noads();
	document.getElementById('Blogs').style.display='block';
}
function cg(){
	noads();
	document.getElementById('ChangeLog').style.display='block';
}
function edition(){
	noads();
	document.getElementById('Editions').style.display='block';
}
function game(){
	noads();
	document.getElementById('Games').style.display='block';
}
function homep1(){
	noads();
	document.getElementById('Home1').style.display='block';
}
function opens(){
	noads();
	document.getElementById('opensource').style.display='block';
}
function prog(){
	noads();
	document.getElementById('programacao').style.display='block';
}
function proj(){
	noads();
	document.getElementById('projetos').style.display='block';
}
function sob(){
	noads();
	document.getElementById('sobre').style.display='block';
}
function video(){
	noads();
	document.getElementById('videos').style.display='block';
}