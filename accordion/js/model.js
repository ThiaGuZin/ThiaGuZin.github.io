var acc = document.getElementsByClassName("btn");
var i;
var acc2 = document.getElementsByClassName("btn2");



for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("ativa");

    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
for (i = 0; i < acc2.length; i++) {
    acc2[i].addEventListener("click", function() {
      this.classList.toggle("ativa");
  
      
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

