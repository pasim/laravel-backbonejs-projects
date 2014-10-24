APP.Views.Pages.Home = APP.Views.Pages.Master.extend({

  templates: {
    'main' : _.template( $('#template-pages-home').html() )
  },

  className: 'home-page',

  events: {
    "click .help": "showHelp"
  },

  initialize: function () {

    this._super();

    return this;

  },

  render: function () {

    this._super({
      //user: APP.User.toJSON()
    });

    this.renderGrid();

    this.addEvents();

    return this;

  },

  destroy: function () {

  },

  addEvents: function () {
    this.resize();
  },

  resize: function () {
    var self = this;

    $(window).resize( function () {
      self.renderGrid();
    });
  },

  renderGrid: function () {

    var $columns = this.$el.find('.col-1-3');

    var windowHeight = $(window).height();
    var columnTop = $columns.offset().top;
    var calculatedHeight = windowHeight-columnTop-55;

    $columns.height(calculatedHeight);

    _.each($columns, function (column) {
      var $currentColumn = $(column);

      var $tiles = $currentColumn.find('.tile');
      var $proportionalRects = $currentColumn.find('.proportional-rect');

      var combinedTileHeight = 0;

      _.each($tiles, function (tile) {
        var $currentTile = $(tile);
        var currentNumberTiles = $currentColumn.find(tile).length+1;

        if ($currentTile.hasClass('proportional-square')) {
          $currentTile.height(calculatedHeight/currentNumberTiles);
        }

        if (!$currentTile.hasClass('proportional-rect')) {
          combinedTileHeight = combinedTileHeight + $currentTile.height();
        }
      });

      $proportionalRects.height($currentColumn.height() - combinedTileHeight);
    });

  },

  showHelp: function(){

    console.log("HELP!!!!");

  }

});
