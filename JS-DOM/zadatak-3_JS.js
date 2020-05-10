let boja = ["black","blue"];
let tekst = document.getElementById("tekst");
broj = 0;
function f1(){
    tekst.style.backgroundColor = boja[broj];
    broj = (broj + 1) % boja.length
}
