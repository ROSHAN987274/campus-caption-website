// let links = document.querySelectorAll(".box a");

// // for(i=0; i<links.length; i++){
// //     links[i].style.color = "purple";
// // }

// for(link of links){
//     link.style.color = "yellow";
// }





// let p1 = document.createElement("p");

// p1.innerText = "Hey it's me Roshan Chaurasiya";
// document.querySelector('body').append(p1);

 
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked.")
// });


 let form = document.querySelector("form");

        form.addEventListener("submit" , function(event){
            // event.preventDefault();  // just stops the default action to performed
            alert("form Submitted");
        });
        