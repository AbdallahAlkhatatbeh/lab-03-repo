"use strict";
$(document).ready(function() {
    function Gallery(img) {
      this.title = img.title;
      this.image_url = img.image_url;
      this.description = img.description;
      this.keyword = img.keyword;
      this.horns = img.horns;
         gallery.all.push(this);
  
  }
  gallery.all=[];

   Gallery.prototype.render = function() {
          let $imgTemplate = $("#gallery").html();
          var rendered = Mustache.render($imgTemplate , this);
          $('section').append(rendered);
 };
  
//   }
//    Gallery.prototype.render = function() {
//           let $imgClone = $("#gallery").clone();
//           $imgClone.find("h2").text(this.title);
//           $imgClone.find("img").attr("src", this.image_url);
//           $imgClone.find("#p1").text(this.description);
//           $imgClone.find("#p2").text(this.keyword);
//           $imgClone.find('#p3').text(this.horns);
//           // $imgClone.removeClass("img-template");
//           $imgClone.removeAttr("id");
//           $imgClone.attr("id", this.title);
//           $("main section:first").append($imgClone);
// };
$( "#but1" ).click(function() {
  $("div").remove();
  readJson();
  

});

$( "#but2" ).click(function() {
  $("div").remove();
  readJson2();
  

});
// Gallery.prototype.filler = function(){
//   if(!options.includes(this.keyword)){
//     options.push(this.keyword);
//       $('#dropdown').append(`<option>${this.keyword}</option>`);
//   }else {
//     console.log('we already have that');

//   }
// };




        const readJson = () => {
          $.ajax("data/page-1.json", { method: "GET", dataType: "JSON" }).then(data => {
            data.forEach(imgItem => {
              let img = new Gallery(imgItem);
              img.render();
              
            });
          });
        };
        readJson();
    
      const readJson2 = () => {
        $.ajax("data/page-2.json", { method: "GET", dataType: "JSON" }).then(data => {
          data.forEach(imgItem => {
            let img = new Gallery(imgItem);
            img.render();
          });
        });
      };
    });
    //   $( "#gallery" ).select(function() {
        
    //     }
    //   });
      // {
      //     "image_url": "https://images.unsplash.com/photo-1514036783265-fba9577fc473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      //     "title": "Happy Jackson's Chameleon",
      //     "description": "These are really common in Hawaii",
      //     "keyword": "chameleon",
      //     "horns": 2
      //   },