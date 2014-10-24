window.APP = {};

window.APP.Views = {};
window.APP.Models = {};
window.APP.Collections = {};
window.APP.Routers = {};

window.APP.Views.Pages = {};

window.APP.Title = "Kosovo APP";


window.APP.Config = {

  enviroment: 'development',
  version: "0.0.1"

};

window.APP.Assets = {
  scripts: [
    'js/lib/jquery/jquery.js',
    'js/lib/underscore/underscore.js',
    'js/lib/backbone/backbone.js',
    'js/lib/backbone-super/backbone-super/backbone-super.js',
    'js/lib/bootstrap/dist/js/bootstrap.js',
    //Helpers
    // 'js/app/helpers/APP.Helpers.Global.js',
    //Models
    'js/app/models/APP.Models.Master.js',
    'js/app/models/APP.Models.Auth.js',
    //Views
    'js/app/views/APP.Views.Master.js',
    'js/app/views/APP.Views.Pages.Master.js',
    'js/app/views/APP.Views.Pages.Home.js',
    //Routers
    'js/app/routers/APP.Routers.Master.js',
    'js/app/routers/APP.Routers.Main.js',
    'js/app/app.js'
  ],

  templates: [
    'templates/login.html',
    'templates/register.html',
    // 'templates/weather.html',
    'templates/home.html'
  ]
}
