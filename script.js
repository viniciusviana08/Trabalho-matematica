function teste() {
  alert('teste');
}

function okbutton() {
  var txt1 = document.getElementById('poligno_name');
  var txt2 = document.getElementById('poligno_value');
  var txt3 = document.getElementById('medida_alt')
  var txtvalue = (txt1.value);
  var txtvalue2 = (txt2.value);
  var txtvalue3 = (txt3.value)
  var p_name = document.getElementById('n_p');
  var solid = document.getElementById('solid');
  var s_name = document.getElementById('n_s');
  var txtvalue2_2 = txtvalue2 * txtvalue2;
  var btn2 = document.getElementById('teste');

  btn2.addEventListener("click", teste); // Ligue o event listener aqui

  if (txtvalue == 1){
    raio = txtvalue2 / 2;
    circunferencia = raio ** 2
    area = 3.14 * circunferencia
    volume1 = (raio ** 3) * 3.14
    volume2 = (3 / 4) * volume1
    p_name.innerHTML = `Circulo<hr><br>Area: ${area.toFixed(2)}</h3>`;
    s_name.innerHTML = `Esfera<hr><br>Volume: ${volume2.toFixed(2)}</h3>`;
    txt2.style.opacity = 1;
    txt1.style.opacity = 0;
    txt2.style.top = 0;

  }
  else if (txtvalue == 3){
    area = (txtvalue2_2 * Math.sqrt(3)) / 4;
    p_name.innerHTML = `Triângulo Equilátero<hr><br>Area: ${area.toFixed(2)}</h3>`;
    // s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`;
    txt2.style.opacity = 1;
    txt1.style.opacity = 0;
    txt2.style.top = 0;
    
     if (txtvalue2 > 0) {
      txt3.style.opacity = 1;
      txt2.style.opacity = 0;
      txt3.style.top = 0;
      volume = (area * txtvalue3) / 3
    solid.innerHTML = `Piramide de base triangular<hr><br>Volume: ${volume.toFixed(2)}`;
     }

  }
  else if (txtvalue == 4) {
    qualquercoisaai = txtvalue2 ** 2;
    p_name.innerHTML = `Quadrado <hr><br>Area: ${qualquercoisaai.toFixed(2)} </h3>`;
    solid.innerHTML = `Cubo<hr><br>Volume:`;
    // s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`;
    txt2.style.opacity = 1;
    txt1.style.opacity = 0;
    txt2.style.top = 0; 


  }

   else if (  txtvalue == 5 ) {
    area = (5 * txtvalue2_2 * Math.sqrt(3)) / 4
    p_name.innerHTML = `Pentágono <hr><br>Area: ${area.toFixed(2)}</h3>`
    solid.innerHTML = `Piramide de base pentagonal<hr><br>Volume:`
    // s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    txt2.style.opacity = 1
    txt1.style.opacity = 0
    txt2.style.top = 0

    
    if (txtvalue2 > 0) {
      txt3.style.opacity = 1;
      txt2.style.opacity = 0;
      txt3.style.top = 0;
      volume = (area * txtvalue3) / 3
    solid.innerHTML = `Piramide de base pentagonal<hr><br>Volume: ${volume.toFixed(2)}`;

     }
     
   }
   else if (  txtvalue == 6 ) {
    area = (6 * txtvalue2_2 * Math.sqrt(3)) / 4

    p_name.innerHTML = `Hexágono <hr><br>Area: ${area.toFixed(2)}</h3>`
    // s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    txt2.style.opacity = 1
    txt1.style.opacity = 0
    txt2.style.top = 0

    if (txtvalue2 > 0) {
      txt3.style.opacity = 1;
      txt2.style.opacity = 0;
      txt3.style.top = 0;
      volume = (area * txtvalue3) / 3
    solid.innerHTML = `Piramide de base hexagonal<hr><br>Volume: ${volume.toFixed(2)}`;
    
     }
    

   }

   else if (  txtvalue == 7 ) {
    area = (7 * txtvalue2_2 * Math.sqrt(3)) / 4

    p_name.innerHTML = `Heptágono <hr><br>Area: ${area.toFixed(2)}</h3>`
    // s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    txt2.style.opacity = 1
    txt1.style.opacity = 0
    txt2.style.top = 0

    if (txtvalue2 > 0) {
      txt3.style.opacity = 1;
      txt2.style.opacity = 0;
      txt3.style.top = 0;
      volume = (area * txtvalue3) / 3
    solid.innerHTML = `Piramide de base heptagonal<hr><br>Volume: ${volume.toFixed(2)}`;
    
     }


   }
   else if (  txtvalue == 8 ) {
    area = (8 * txtvalue2_2 * Math.sqrt(3)) / 4

    p_name.innerHTML = `Octógono <hr><br>Area: ${area.toFixed(2)}</h3>`
    solid.innerHTML = `Piramide de base octogonal<hr><br>Volume:`
    // s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    txt2.style.opacity = 1
    txt1.style.opacity = 0
    txt2.style.top = 0

    if (txtvalue2 > 0) {
      txt3.style.opacity = 1;
      txt2.style.opacity = 0;
      txt3.style.top = 0;
      volume = (area * txtvalue3) / 3
    solid.innerHTML = `Piramide de base heptagonal<hr><br>Volume: ${volume.toFixed(2)}`;
    
     }


   }
   else if (  txtvalue == 9 ) {
    area = (9 * txtvalue2_2 * Math.sqrt(3)) / 4

    p_name.innerHTML = `Eneágono <hr><br>Area: ${area.toFixed(2)}</h3>`
    solid.innerHTML = `Piramide de base eneagonal<hr><br>Volume:`
    // s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    txt2.style.opacity = 1
    txt1.style.opacity = 0
    txt2.style.top = 0

    if (txtvalue2 > 0) {
      txt3.style.opacity = 1;
      txt2.style.opacity = 0;
      txt3.style.top = 0;
      volume = (area * txtvalue3) / 3
    solid.innerHTML = `Piramide de base heptagonal<hr><br>Volume: ${volume.toFixed(2)}`;
    
     }

   }
   else if (  txtvalue == 10 ) {
    area = (10 * txtvalue2_2 * Math.sqrt(3)) / 4
    p_name.innerHTML = `Decágono <hr><br>Area: ${area.toFixed(2)}</h3>`
    solid.innerHTML = `Piramide de base decagonal<hr><br>Volume:`
    // s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    txt2.style.opacity = 1
    txt1.style.opacity = 0
    txt2.style.top = 0

    if (txtvalue2 > 0) {
      txt3.style.opacity = 1;
      txt2.style.opacity = 0;
      txt3.style.top = 0;
      volume = (area * txtvalue3) / 3
    solid.innerHTML = `Piramide de base heptagonal<hr><br>Volume: ${volume.toFixed(2)}`;
    
     }


   }

   else if (  txtvalue == 11 ) {
    area = (11 * txtvalue2_2 * Math.sqrt(3)) / 4
    p_name.innerHTML = `Undecagono <hr><br>Area: ${area.toFixed(2)}</h3>`
    solid.innerHTML = `Piramide de base undecogonal<hr><br>Volume:`
    // s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    txt2.style.opacity = 1
    txt1.style.opacity = 0
    txt2.style.top = 0

    if (txtvalue2 > 0) {
      txt3.style.opacity = 1;
      txt2.style.opacity = 0;
      txt3.style.top = 0;
      volume = (area * txtvalue3) / 3
    solid.innerHTML = `Piramide de base heptagonal<hr><br>Volume: ${volume.toFixed(2)}`;
    
     }


   }
   else if (  txtvalue == 20 ) {
    area = (20 * txtvalue2_2 * Math.sqrt(3)) / 4
    p_name.innerHTML = `Icoságono <hr><br>Area: ${area.toFixed(2)}</h3>`
    solid.innerHTML = `Piramide de base icosagonal<hr><br>Volume:`
    // s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    txt2.style.opacity = 1
    txt1.style.opacity = 0
    txt2.style.top = 0

    if (txtvalue2 > 0) {
      txt3.style.opacity = 1;
      txt2.style.opacity = 0;
      txt3.style.top = 0;
      volume = (area * txtvalue3) / 3
    solid.innerHTML = `Piramide de base heptagonal<hr><br>Volume: ${volume.toFixed(2)}`;
    
     }


   }

   else {

    p_name.innerText = '❌'
     s_name.innerText = '❌'
     alert('Numero Invalido!')

   }

if ( txtvalue2 == 3){
  // s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
   } 

else if ( txtvalue2 == 6){
    //  s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
     }  
    
}




function heron_click() {
  var txta = document.getElementById('a')
  var txtb = document.getElementById('b')
  var txtc = document.getElementById('c')
  var a = (txta.value)
  var b = (txtb.value)
  var c = (txtc.value)
  var txt_res = document.getElementById('res')
  var l1 = (a + b + c) / 2
  var l2 = Math.sqrt( l1 * (l1 - a) * (l1 - b ) * (l1 - c) ) 
  txt_res.innerHTML = `O resultado é: ${l2.toFixed(2)}`

}