
var galery = {
  "images": [{
    "imgUrl": "image/c13.jpg"
    ,
     "imageName":  'Jaipur fort',
     "imgInfo": 'Near jaipur fort',
     "imgDate": "21 - May -2017"
  
 }, {"imgUrl" : "image/c27.jpg"
  ,
  "imageName":  'Jaipur fort',
     "imgInfo": 'Kids of Jaipur',
     "imgDate": "21 - May -2017"
  },
  {
    "imgUrl": "image/c25.jpg"
    ,
    "imageName":  'Jaipur fort',
     "imgInfo": 'Friends of Jaipur',
     "imgDate": "21 - May -2017"
  },
  {
    "imgUrl": "image/c3.JPG"
    ,
    "imageName":  'Tsukuba Graden',
     "imgInfo": ' Tsukuba, A city in Japan',
     "imgDate": "21 - June -2017"
  },
  {
    "imgUrl": "image/c8.jpg"
    ,
    "imageName":  'Tokyo Disney',

     "imgInfo": ' Tokyo Disneyland',
     "imgDate": "21 - May -2017"
  },
  {
    "imgUrl": "image/c6.jpg"
    ,
    "imageName":  'Antaragni\'14',
     "imgInfo": ' IIT Kanpur',
     "imgDate": "21 - July -2014"
  },
  {
    "imgUrl": "image/c7.jpg"
    ,
    "imageName":  'Tokyo Disney',
     "imgInfo": ' Tokyo Disneyland',
     "imgDate": "21 - May -2017"
  },
  {
    "imgUrl": "image/c4.JPG"
    ,
    "imageName":  'Tokyo Disney',
     "imgInfo": 'Tokyo Disneyland',
     "imgDate": "21 - May -2017"
  },
  {
    "imgUrl": "image/c9.jpg"
    ,
    "imageName":  'Cyberdyne',
     "imgInfo": 'Tokyo Museum',
     "imgDate": "31 - May -2017"
  }

  ]
};

galery.images.forEach( function(obj) {

  var x = document.createElement("DIV");
  var imge = new Image();
  imge.src = obj.imgUrl;
  imge.setAttribute("class", "galleryImage");
  imge.setAttribute("alt", obj.imageName);
  // imge.setAttribute("onclick", "imagePop(this);");
 // imge.setAttribute("display", "inline-block");
  x.appendChild(imge);
 document.getElementById("img-container").appendChild(x);
});

