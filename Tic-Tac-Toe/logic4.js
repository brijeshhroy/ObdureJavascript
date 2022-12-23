var p = new Array();
function crate() {
   let z = 1;
   var i = 0;
   document.getElementById("firstd").textContent = '';
   for (i = 1; i <= 9; i++) {

      const inn = document.createElement('input');
      inn.type = "Text";            // 
      inn.size = "1";

      inn.id = z;

      firstd.appendChild(inn);
      inn.addEventListener('input', function(){res(inn.id,inn.value)});
      z++;
      if (z == 4 || z == 7)
         firstd.appendChild(document.createElement('br'));
      //firstd.appendChild(inn);
   }


}


function res(x,y) {
    p[x-1] = y ;
  // console.log(x ,y);
  // console.log("element is " , p[x-1]);
      
      if(p[0] == p[1] && p[0] == p[2] && p[0] != undefined)
      document.getElementById("ree").innerText = y + " is the winner" ;

      if(p[3] == p[4] && p[3] == p[5] && p[3] != undefined)
      document.getElementById("ree").innerText = y + " is the winner" ;

      if(p[6] == p[7] && p[6] == p[8] && p[6] != undefined)
      document.getElementById("ree").innerText = y + " is the winner" ;

      if(p[0] == p[3] && p[0] == p[6] && p[0] != undefined)
      document.getElementById("ree").innerText = y + " is the winner" ;

      if(p[1] == p[4] && p[1] == p[7] && p[1] != undefined)
      document.getElementById("ree").innerText = y + " is the winner" ;

      if(p[2] == p[5] && p[2] == p[8] && p[2] != undefined)
      document.getElementById("ree").innerText = y + " is the winner" ;

      if(p[0] == p[4] && p[0] == p[8] && p[0] != undefined)
      document.getElementById("ree").innerText = y + " is the winner" ;

      if(p[2] == p[4] && p[2] == p[6] && p[2] != undefined)
      document.getElementById("ree").innerText = y + " is the winner" ;


   


}