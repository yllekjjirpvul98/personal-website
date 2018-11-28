function flying(el) {
  $(el).addClass("fly");
}

function turnToNavigate(el){
  el.innerHTML = '<ul><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="#project">Project</a></li><li><a href="#contact">Contact</a></li><li><a href="#blog">Blog</a></li></ul>'
}
