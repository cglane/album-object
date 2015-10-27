$(document).ready(function () {
  albumPage.init();
});

var albumPage = {
  init:function(){
    albumPage.loadAlbums();
    albumPage.loadButtons();
    albumPage.events();
  },
  styling:function(){
    loadPage();
  },
  events:function(){
    $('aside button').on('click',function(event){
      event.preventDefault();
      var clickedSelection = "#" + $(this).attr('rel');
      var clickedSelectionP = "#" + $(this).attr('rel')+ " " + "p";

      console.log(clickedSelection);
      var siblings = $('clickedSelection').siblings('section');
      var children = $('section').children();
      console.log(siblings);
      $(clickedSelection).children().css({"display":"inline-block", "width":"30%"});
      $(clickedSelectionP).css({"width": "50%", "margin-left":"35%"});
      $(clickedSelection).css({"display":"inline-block ", "width":"100%"});
      $(clickedSelection).siblings().css({"display":"none  ", "width":"100%"});

    });
    $('section .albumDiv p').on('click',function(event){
      var clickedSelection = $(this).closest("div");
      var siblings = clickedSelection.siblings();
      var clickedSelectionP = $(this);
      event.preventDefault();
      $('aside button').css({"display":"block"});
      $(siblings).css({"display":"none"});
      $(clickedSelection).css({"width":"800px"});
      $(clickedSelection).children().css({"display":"inline-block","width": "30%"});
      $(clickedSelectionP).css({"width": "70%", "margin-left":"35%"});
      $(clickedSelection).children().children().css({"width":"20%","display":"inline-block"});
    });
    $('section .albumDiv img').on('click',function(event){
        $($(this)).css({"display": "block", "width": "69%","margin":"auto"});
        $($(this)).siblings().css({"display":"none", "width": "50"});
    });
  },
  loadAlbums: function(){
    _.each(albums,function(item){
      var photo;
      albumName = item.albumName;
      var albumDiv = "#"+ albumName;
      var tpl = _.template(templates.albumDivs);
      $('section').append(tpl(albumName));
      albumPage.loadImages(item,albumDiv);

    });
  },
  loadButtons:function(){
      _.each(albums,function(item){
        albumName = item.albumName;
        var tpl = _.template(templates.albumButtons);
        $('aside').append(tpl(albumName));
      });
  },
loadImages:function(item,div){
  _.each(item.photos,function(el){
    var tpl= _.template(templates.photoImages);
    photo = el;
    $(div).append(tpl(photo));
    console.log(photo);
  });
}



};
