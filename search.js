// JavaScript code
function search_bar() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('flex-container');
    let hidden = document.getElementById
    let mycount = 0;
        if (input.length > 0){
            for (i = 0; i < x.length; i++) { 
                if (!x[i].innerHTML.toLowerCase().includes(input)) {
                    x[i].style.display="none";
                }
                else {
                    x[i].style.display="flex-container";                 
                }
            }
        }
        else{
            for (k = 0; k < x.length; k++){
                x[k].style.display=""; 
            }
        }
}