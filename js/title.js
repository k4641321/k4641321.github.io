var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         // $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '别走啊，再多看看呗(*´I`*)';
         clearTimeout(titleTime);
     }
     else {
         //$('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '欢迎回来ᴖᗜᴖ' //+ OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
 
