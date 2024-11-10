let btn = document.querySelectorAll(".num");
let screen = document.querySelector('.screen');

let num1 = '', num2 = '',val, opt;

btn.forEach((el) => {

   el.addEventListener("click", () => {

      val = el.value;

      if (val == "=")
      {
         try{
            screen.innerHTML = eval(screen.innerHTML);
         } catch(error) {
            screen.innerHTML = "Error!";
         }
     
      }
      else if (val == "ac")
      {
         reset();
      }
      else if (val == "<=")
      {
         screen.innerHTML = (screen.innerHTML).slice(0, -1);
      }
      else
      {
        disOnScreen(val.replaceAll("undefined"));
      }
        
   })
})

function disOnScreen(equation) {
   screen.innerHTML += equation;
}

function reset() {
   screen.innerHTML = '';
}