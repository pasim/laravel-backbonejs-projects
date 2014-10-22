  (function(){
  if(window.APP.Config.enviroment === 'development'){

    var queue = new createjs.LoadQueue(false);
    // queue.addEventListener("complete", handleOnComplete);
    queue.maintainScriptOrder = true;

    console.log(APP);

    queue.loadManifest(APP.Assets.scripts);

  }
}());
