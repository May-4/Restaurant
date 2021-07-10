
function add_include(){
    let include= document.querySelector(".form_include");
    let is_include= include.getAttribute("include_html");
    console.log(include);

    let req=new XMLHttpRequest();
    if(is_include){
        req.onreadystatechange= ()=>{
            include.innerHTML = req.responseText;
        }
    }
    req.open('GET',`../${is_include}`);
    req.send();
}

let login_btn= document.querySelector(".acc_login");
login_btn.addEventListener("click",add_include);
