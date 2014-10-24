(function(){

  window.isPhoneGap = false;

  var ajaxFunction = function(){
    var ajaxRequest; // The variable that makes Ajax possible!
    try{
        ajaxRequest = new XMLHttpRequest();
    }catch(e1){
      try {
        ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
      }catch(e2){
        try {
            ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e3){

        }
      }
    }
    return ajaxRequest;
  };

  try {

    var totalCount = APP.Assets.templates.length;
    console.log(APP);

  }catch(e){

  }

  var ready = 0;

  function loadPage(url) {
console.log(url);
    var xmlhttp = ajaxFunction();
    xmlhttp.onreadystatechange=function(){
      if (xmlhttp.readyState === 4){
        totalCount--;
        document.getElementById('templates').innerHTML += xmlhttp.responseText;
        if(totalCount === 0){
          ready++;
          startApp();
        }
      }
    };
    xmlhttp.open("GET", url , true);
    xmlhttp.send();

  }

  try{
    for(var i = 0; i < APP.Assets.templates.length; i++){
      loadPage(APP.Assets.templates[i]);
    }
  } catch(e){

  }

  function handleOnComplete(event){
    ready++;
    startApp();
  }

  function startApp(){
    if(ready === 2){
      APP.initialise();
    }
  }

  if(window.APP.Config.enviroment === 'development'){

    var queue = new createjs.LoadQueue();
    queue.addEventListener("complete", handleOnComplete);
    queue.maintainScriptOrder = true;

    queue.loadManifest(APP.Assets.scripts);
    // queue.loadManifest();

  }else{

    var domIsReady = function(){
      var queue = new createjs.LoadQueue(false);
      queue.addEventListener("complete", handleOnComplete);
      queue.maintainScriptOrder = true;
      queue.loadManifest(['js/include-ck.js']);
    };

    if (isPhoneGap) {
      document.addEventListener("deviceready", domIsReady, false);
    } else {
      domIsReady();
    }

  }

}());
