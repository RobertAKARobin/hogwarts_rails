function toggle(what){
  var tags = document.body.getElementsByTagName('*'),
      tag,
      onOrOff = "?";
  for(x = 0; x < tags.length; x++){
      tag = tags[x];
      if(tag.id.indexOf(what) > -1){
        if(onOrOff == "?") onOrOff = tag.checked;
        tag.checked = !onOrOff;
      }
  }
}