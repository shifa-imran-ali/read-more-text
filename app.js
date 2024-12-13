const readMoreLink = document.getElementById("readMoreLink");
const extraText = document.getElementById("extraText");
const readMoreLink2 = document.getElementById("readMoreLink2");
const extraText2 = document.getElementById("extraText2");
const readMoreLink3 = document.getElementById("readMoreLink3");
const extraText3 = document.getElementById("extraText3");
const readMoreLink4 = document.getElementById("readMoreLink4");
const extraText4= document.getElementById("extraText4");

readMoreLink.onclick = () =>{
    if(extraText.style.display === "none"){
        extraText.style.display = "inline";
        readMoreLink.textContent = "Read Less"
    }
    else{
        extraText.style.display = "none";
        readMoreLink.textContent = "Read More"
    }
}
readMoreLink2.onclick = () =>{
    if(extraText2.style.display === "none"){
        extraText2.style.display = "inline";
        readMoreLink2.textContent = "Read Less"
    }
    else{
        extraText2.style.display = "none";
        readMoreLink2.textContent = "Read More"
    }
}
readMoreLink3.onclick = () =>{
    if(extraText3.style.display === "none"){
        extraText3.style.display = "inline";
        readMoreLink3.textContent = "Read Less"
    }
    else{
        extraText3.style.display = "none";
        readMoreLink3.textContent = "Read More"
    }
}
readMoreLink4.onclick = () =>{
    if(extraText4.style.display === "none"){
        extraText4.style.display = "inline";
        readMoreLink4.textContent = "Read Less"
    }
    else{
        extraText4.style.display = "none";
        readMoreLink4.textContent = "Read More"
    }
}