let A=Number(prompt("Calculemos las Raices de tu Polinomio grado dos p(x)=Ax2+Bx+C, Indica el valor A"));
let B=Number(prompt("Indica el valor B"));
let C=Number(prompt("Indica el valor C"));
let interiorDeterminante;
let raizUno;
let raizDos;

console.log(A);
console.log(B);
console.log(C);
interiorDeterminante = Math.pow(B,2)-4*A*C;


if(interiorDeterminante == 0){
    raizUno= (-B)/(2*A)
    alert("Tu cuadratica tiene una unica solucion y es " + raizUno);
} else if(interiorDeterminante<0){
    alert("Tu cuadratica no tiene solucion en el plano de los Reales");
} else{
    raizUno= ( -B+Math.sqrt(Math.pow(B,2)-4*A*C))/(2*A);
    raizDos= ( -B-Math.sqrt(Math.pow(B,2)-4*A*C))/(2*A);
    alert("Tu cuadratica tiene dos soluciones y son " + raizUno + " y " + raizDos);
}
