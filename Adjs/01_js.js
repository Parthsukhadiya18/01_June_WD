let text = "\"John\" \'Doe\'   Parth\\rolex ";
console.log(text);
let length = text.length
console.log(length);

let text1= "Banana";

console.log(text1.slice(0,6));
console.log(text1.slice(0,5));

let text2= "Parth Patel Vidhi Patel  Hemali Patel";
// console.log(text2.replace("Patel","Rolex"));

// console.log(text2.replace(/PATEL/i,"BMW"));
// console.log(text2.replaceAll("Patel","BMW"));
// console.log(text2.replaceAll(/BMW/g,"Patel"));
console.log(text2.replaceAll(/Patel/g,"BMW"));


let Nancy = "Hello Nancy!";
console.log(Nancy.toUpperCase());
console.log(Nancy.toLocaleLowerCase());


let text3 = "Hello";
let text4 = "World";
let text6 = "Welcome to Surat";
let text5 = text3.concat(" ",text4," ",text6);
console.log(text5);


let text7 = "     Hello World!       ";
// let Vidhi = text7.trim();
// let Vidhi = text7.trimStart();
let Vidhi = text7.trimEnd();
console.log(Vidhi);

let text8 = "*";
// let padded = text8.padStart(4,"0");
let padded = text8.padEnd(4,"0");
console.log(padded);

let text9 = "hello";
// console.log(text9.charAt(1));
console.log(text9.charCodeAt(0));

let text10 = "h,e,l,l,o";
const text11=text10.split(", ")
// console.log(text11);

let i;
text10 =" ";
for ( i = 0; i < text11.length; i++) {
    text10+= text11[i];
    
}
  console.log(text10);







