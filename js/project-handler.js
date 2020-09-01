function switchProject() {
   var artifacts = document.getElementById("artifacts");
   var colleger = document.getElementById("colleger");

   if (colleger.style.display == "block") {
     colleger.style.display = "none";
     artifacts.style.display = "block";
   } else if (artifacts.style.display == "block") {
     artifacts.style.display = "none";
     colleger.style.display = "block";
   }
}
