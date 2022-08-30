function circulo(r){
    let area = (3,14 * (r*r));
    return area;
}
function triangulo(ladoA,ladoB){
   let area= (ladoA*ladoB)/2;
   return area;
}
function rectagulo(ladoA,ladoB){
   let area= ladoA*ladoB;
   return area;
}
function imprimirArea(area){
   console.log("El area es:"+area)
}

do{

   let areaCalcular=prompt(" Ingresa una opcion \n 1 para calcular el area de un ciculo \n 2 para el area de un triangulo \n 3 para el area de un rectangulo")
  
   switch(areaCalcular){
  
       case "1":
           imprimirArea(circulo(parseInt(prompt("ingrese el radio del circulo"))))
          
           break;
       case "2":
           imprimirArea(triangulo(parseInt(prompt("ingrese la medida de un lado del triangulo adyasente al angulo de 90°")),parseInt(prompt("ingrese el otro lado andayasente al agulo de 90°"))))
           break;
       case "3":
           imprimirArea(rectagulo(parseInt(prompt("ingrese el alto del rectangulo")),parseInt(prompt("ingrese el ancho del retangulo"))))
           break;
       default:
           alert("no se selecionno una opcion correcta")
           break;
   }
  
   let continuar= true;
   let volver=prompt("¿deseas vovler a calcular otra area ?")
   if(volver== "NO"|| volver=="No" || volver=="no"){
       continuar= false;
   }

}while(continuar);


