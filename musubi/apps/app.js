function MusuWriter(app) {
  this.appContext = app;
}

var musu;
Musubi.ready(function(context) {
    musu = new MusuWriter(context);

	$("#post_button").click(function(e) {
    	var text = "POOOOOOOOO";
    	var html = text;
    	var content = { "__html" : html, "text" : text};
      	var obj = new SocialKit.Obj({type : "game_start", json: content})
      	musu.appContext.feed.post(obj);
 		//musu.appContext.quit();
    }); 
});	
	