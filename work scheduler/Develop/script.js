var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.querySelector(".today").innerHTML = today

function text() {
   var listitem = document.getElementById("listitem").value;

   var listitemtext = localStorage.setItem("listitem", listitem)


   var listitemtext = localStorage.getItem("listitem", listitem)


}

$(document).ready(function () {
   var today = new Date();
   var dd = String(today.getDate()).padStart(2, '0');
   var mm = String(today.getMonth() + 1).padStart(2, '0');
   var yyyy = today.getFullYear();

   $('.row-time').each(function () {
      var $this = $(this);
      var $btn = $this.find('button');
      var $desc = $this.find('input.form-control');
       var time = $this.attr('data-time');
      console.info(time);
      var savedTime = localStorage.getItem(time);
      if (savedTime) {
         $desc.val(savedTime);
      }

      $btn.on('click', function () {
         var val = $desc.val();
         console.info(val);
         console.info(time);
         localStorage.setItem(time, val);

      });

   });


});
