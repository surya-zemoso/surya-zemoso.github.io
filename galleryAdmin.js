// Jason file of the image. I have stored data here.
var galery = {
  "images": [{
    "imgUrl": "image/c13.jpg"
    ,
     "imageName":  'Jaipur fort',
     "imgInfo": 'A great Place to visit in india, Known as pink city!',
     "imgDate": "2017-09-21"
  
 }, {"imgUrl" : "image/c27.jpg"
  ,
  "imageName":  'Jaipur fort',
     "imgInfo": 'Masti with kids',
     "imgDate": "2017-09-22"
  },
  {
    "imgUrl": "image/c25.jpg"
    ,
    "imageName":  'Jaipur fort',
     "imgInfo": 'Ice cream gonna make you relax in hot',
     "imgDate": "2017-09-22"
  },
  {
    "imgUrl": "image/c3.JPG"
    ,
    "imageName":  'Tokyo Diary',
     "imgInfo": 'Tsukuba, A science city of Japan',
     "imgDate": "2016-06-23"
  },
  {
    "imgUrl": "image/c8.jpg"
    ,
    "imageName":  'Tokyo',

     "imgInfo": 'Bar is the best place to find new buddies!',
     "imgDate": "2016-05-28"
  },
  {
    "imgUrl": "image/c6.jpg"
    ,
    "imageName":  'Home IIT Kanpur',
     "imgInfo": 'Antaragni\'14',
     "imgDate": "2014-07-21"
  },
  {
    "imgUrl": "image/c7.jpg"
    ,
    "imageName":  'Tokyo Diary',
     "imgInfo": ' Tokyo Disneyland theater',
     "imgDate": "2016-05-21"
  },
  {
    "imgUrl": "image/c4.JPG"
    ,
    "imageName":  'Tokyo Diary',
     "imgInfo": 'Tokyo Disneyland fall',
     "imgDate": "2016-05-21"
  },
  {
    "imgUrl": "image/c9.jpg"
    ,
    "imageName":  'Tokyo Diary',
     "imgInfo": 'Cyberdyne Museum',
     "imgDate": "2016-05-28"
  }

  ]
};

// var galery = require('image.json');

var list=galery.images.forEach(imgShow);

function imgShow(obj) {

  var x = document.createElement("DIV");
  var imge = new Image();
  imge.src = obj.imgUrl;
  imge.setAttribute("id", "galleryImage");
  imge.setAttribute("alt", obj.imageName);
  imge.setAttribute("onclick", "imagePop(this)");
  // imge.setAttribute("onclick", "showIntro(this)");

 // imge.setAttribute("display", "inline-block");
  x.appendChild(imge);
 document.getElementById("img-container").appendChild(x);
};



function showIntro(data){
    // var data = obj.src;
    // console.log(data);

   var p=data.replace('https://surya-zemoso.github.io/','');

        document.getElementById('url').value=p;

        for(var i=0;i<galery.images.length;i++){
              if(galery.images[i].imgUrl===p){
                document.getElementById('name').value=galery.images[i].imageName;
                document.getElementById('information').value=galery.images[i].imgInfo;
                document.getElementById('uDate').value=galery.images[i].imgDate;
                // indexNo= i;
                return;
              }
          }

}
var dta;

function imagePop(element){

        dta= element.src;
          //console.log(dta);
        var modal=document.getElementById('myModal');
        var imgInd=document.getElementById('img01');
        modal.style.display = "block";
        imgInd.src = dta;
        // var intro = document.getElementsByClassName("intro");
        
        showIntro(dta);

        var spanClose = document.getElementsByClassName("closeN")[0];
        var spanDelete=document.getElementsByClassName("delete")[0];

        var spanEdit= document.getElementsByClassName("edit")[0];
        // var spanEdit= document.getElementsById(editMe');


         // When the user clicks on <span> (x), close the modal
        spanClose.onclick = function() { 
          modal.style.display = "none";
        } 
        var n=dta.replace('https://surya-zemoso.github.io/','');

//delete
      
      spanDelete.onclick= function(){

         if(confirm("Are you sure to delete this item!!")){


             for(var i=0; i<galery.images.length;i++){

             // console.log(dta + " " +galery.images[i].imgUrl );
                    if(galery.images[i].imgUrl===n){
                       galery.images.splice(i,1);
                       alert("image successfully deleted");
                       modal.style.display= "none";
                       var mylist=document.getElementById("img-container");
                       mylist.removeChild(mylist.childNodes[i]);
                       //galery.images.forEach(imgShow);
                       return;
                    }
             }
         }else{
             alert("You have cancel the process of deletion");
             modal.style.display= "none";
         }
      }


//edit

         spanEdit.onclick=function(){

          var x =document.getElementById('url').value ;
          var y=[];
          // y[0]=x;
          // console.log(n);
          // // console.log(galery.images[i].imgUrl);
          // console.log(x);

          for(var i=0;i<galery.images.length;i++){
              if(galery.images[i].imgUrl===n){

                y[0] = x;
                y[1] = document.getElementById('name').value;
                y[2] = document.getElementById('information').value;
                y[3] = document.getElementById('uDate').value;

             if(x.match(/\.(jpeg|jpg|gif|png)$/)==null){
                alert("Invalid Image Url!!");
                return false;
              }
              if(y[1]=="")
              {
                alert("Image Name must be filled!!");
                return false;
              }
              if(y[2]==""){
                alert("information must be filled!!");
                return false;
              }
              var dateReg = /^\d{4}([./-])\d{2}\1\d{2}$/;
              if(y[3].match(dateReg) ==null){
                alert("Please enter correct date!");
                return false;
              }
              if(isValidDate(y[3])===false){
                alert("Probably you should edit on that date!");
                return false;
              }

                galery.images[i].imgUrl = x;
                galery.images[i].imageName = y[1];
                galery.images[i].imgInfo = y[2];
                galery.images[i].imgDate = y[3];
               


               var z = document.createElement("DIV");
               var imge = new Image();
               imge.src = x;
               imge.setAttribute("id", "galleryImage");
               imge.setAttribute("onclick", "imagePop(this)");
               z.appendChild(imge);
               var mylist=document.getElementById("img-container");

                mylist.replaceChild(z, mylist.childNodes[i]);
                modal.style.display= "none";
                return;
              }

          }
      }
  }

//popup for add image
function addImgPopup(){


                  var modal=document.getElementById('addImgModal');
                  addImgModal.style.display= "block";


                  var spanClose = document.getElementsByClassName("closeN")[1];
                  spanClose.onclick = function() { 
                  addImgModal.style.display = "none";
            }
}

// Adding a image
function addImgfn(){


        var modal=document.getElementById('addImgModal');

        var k = galery.images.length;
        console.log(k);

        var nUrl=document.getElementById('url2').value;
        console.log(nUrl);
        var nName=document.getElementById('name2').value;
        var nInformation=document.getElementById('information2').value;
        var nUdate=document.getElementById('uDate2').value;
        console.log(nUdate);
        if(nUrl.match(/\.(jpeg|jpg|gif|png)$/)==null){
          alert("Invalid Image Url!!");
          return false;
        }
        if(nName=="")
        {
          alert("Image Name must be filled!!");
          return false;
        }
        if(nInformation==""){
          alert("information must be filled!!");
          return false;
        } 
        var dateReg = /^\d{4}([./-])\d{2}\1\d{2}$/;
              if(nUdate.match(dateReg) ==null){
              alert("Please enter correct date!");
                return false;}
        if(isValidDate(nUdate)===false){
          alert("You can't upload a future image!");
          return false;
        }
        galery.images.push({
          "imgUrl" : nUrl,
          "imageName" :nName,
          "imgInfo" :nInformation,
          "imgDate" :nUdate
        });

                       var p = galery.images.length;
                       imgShow(galery.images[p-1]);
                       // mylist2.appendChild(mylist2.childNodes[p]);
                       modal.style.display= "none";


}

// checking whether date is valid or not
function isValidDate(dat){
        console.log(dat);
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 
today = mm + '/' + dd + '/' + yyyy;
console.log(today);
// document.write(today);
var data1 = dat.split('-');
console.log(data1);
if (data1[0] > yyyy){
// alert("You can't upload a future image!");
return false;}
if(data1[0] == yyyy){
      if (data1[1] > mm){
        // alert("You can't upload a future image!");
return false;}
      else {if (data1[1] == mm && data1[2] > dd){
        // alert("You can't upload a future image!");
return false;}
}
 }
}




