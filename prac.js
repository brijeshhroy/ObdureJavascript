
getting();
async function getting() {
    var w;

    let url = 'https://dummyjson.com/products';
    let response = await fetch(url);
    let z = await response.json();
    console.log("this ");
    console.log(z);

    /*
     
    fetch('https://dummyjson.com/products').then(details => {
         w= details.json()
         //return w;  // console.log("Hello")
         w.then(
               info => console.log(info)
           )
        })

        */
        //  k = '{"name":"John", "age":30, "city":"New York"}' ;
    /*    console.log( "=== ==================, ", Object.keys(z.products).length );

        let a = z.products[0]
        console.log(a);

        */
       
        let a = Object.keys(z.products[0]).length;  //finding number of keys in one single object element of  product which is an array of object 
        console.log(a);
       // console.log(Object.keys(z.products[0])[0]);
        let b =  z.products.length ;
       console.log(b);
        
        for(i=1;i<=a;i++)
        {
            const cell = document.createElement("th");
            cell.innerText = (Object.keys(z.products[0])[i-1]).toUpperCase();
            tabll.appendChild(cell);
            
        }
        
        /*
        var q =  Object.keys(z.products[0]);
        console.log(typeof q[0])
        console.log(q);
        console.log(z.products[0][q[1]]);
       */
      let c = Object.keys(z.products[0]);
       
        for(j=1;j<=b;j++)
        {   const cel = document.createElement("tr");
             tabll.appendChild(cel);
             for(k=0;k<a;k++)
             { 
             const  det =  document.createElement("td") ;
             if(k==9 || k==10)
             {
                const im = document.createElement("img");
                im.src = z.products[j-1][c[k]] ;
                det.appendChild(im);
             }
             else
             det.innerText = z.products[j-1][c[k]];
             tabll.appendChild(det);    
             }


        }


}
