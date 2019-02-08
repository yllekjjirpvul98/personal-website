function flying(el) {
  $(el).addClass("fly");
}

function turnToNavigate(el){
  el.innerHTML = '<ul><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="#project">Project</a></li><li><a href="#contact">Contact</a></li><li><a href="#blog">Blog</a></li></ul>'
}


var projects = {'web-dev' : [{'Portfolio Website' : ['description', 'portfolio.png']}],
                'game-dev' : [{'Rolling Stone' : ['description', 'image.png']}]
              }

function displayAll(){
  var html = "";
  for (var key in projects) { //dictionary
    for (var dict in projects[key]) { //list
      for (var project in projects[key][dict]){
          var des = projects[key][dict][project][0];
          html += `<div class="wholecard"> <p><span class="text">Click to find more details :)</span></p><div class = "card"><img src="${projects[key][dict][project][1]}"><div class="card-container">  <p class="underlined"><center>${String(project)}</center></p> </div></div></div> `
      }
    }
  }
  document.getElementById('itemlist').innerHTML = html;
}

function displayWeb(){
  var html = "";
  for (var key in projects) { //dictionary
    if (key == 'web-dev'){
      for (var dict in projects[key]) { //list
        for (var project in projects[key][dict]){
            var des = projects[key][dict][project][0];
            html +=  `<div class="wholecard"> <p><span class="text">Click to find more details :)</span></p> <div class = "card"> <img src="${projects[key][dict][project][1]}"><div class="card-container">  <p class="underlined"><center>${String(project)}</p></center> </div></div></div> `
            document.getElementById('itemlist').innerHTML = html;
        }
      }

    }
  }
}

function displayGame(){
  var html = "";
  for (var key in projects) { //dictionary
    if (key == 'game-dev'){
      for (var dict in projects[key]) { //list
        for (var project in projects[key][dict]){
            var des = projects[key][dict][project][0];
            html += `<div class="wholecard"> <p><span class="text">Click to find more details :)</span></p><div class = "card"><img src="${projects[key][dict][project][1]}"><div class="card-container"> <p class="underlined"><center>${String(project)}</center></p> </div></div></div> `
            document.getElementById('itemlist').innerHTML = html;
        }
      }

    }
  }
}
