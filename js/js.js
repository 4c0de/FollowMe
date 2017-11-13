      $(document).ready(function(){
        $(document).mousemove(function(event){
             var menu=document.querySelector("#menu");
             if (((event.pageX)>menu.offsetTop) || ((event.pageY)>menu.offsetLeft))
             {
                  menu.style.top=(event.pageY-85)+"px";
                  menu.style.left=(event.pageX-85)+"px";
                  menu.style.transition="2s"
              }
        });
      });