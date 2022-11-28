btn.addEventListener("click", f_out);
function f_out (){
    console.log(f1.checked);
    console.log(f2.checked);
    console.log(f3.checked);
    console.log(f4.checked);

    if (f3.checked){
        alert("Ви молодець! Правильна відповідь.");
    }
    else{
        alert("Спробуйте ще раз :(");
    }

}