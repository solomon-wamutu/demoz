class bookmeeting {

  constructor(author, title, date) {
    this.author = author;
    this.title = title;
    this.date = date;
  }

bookmtg() {

  return "<div class = 'row'>" + "<span>" + this.date.toDateString() + ":</span>" + "<span>" + this.author + ", <cite>" + this.title + "</cite></span>" + "<span>" + "<input type = 'button' value = 'Delete' onclick = 'Dele(this.form);'>" + "</span>" + "</div>";
}
}

var bookmtglist = new Array();


 function addMtg(form) {

  var author;
  var title;
  var date;

 if(!form.checkValidity()){
  document.getElementById("error").style.display = "block";
 }

 else{

  document.getElementById("error").style.display = "none";
  document.getElementById("mtg").style.display = "block";
  document.getElementById("mtgs").style.display = "block";

  title = form.elements["title"].value;
  author = form.elements["author"].value;
  date = new Date(form.elements["date"].value);

  bookmtglist.push(new bookmeeting(author, title, date));


  // function SortBook(form){}
  
      // form.elements["author"].value = "";
      // form.elements["date"].value = "";
      // form.elements["title"].value = "";

    if(form.elements["sort"].value == "date") {
  
    //   form.elements["author"].value = "";
    //   form.elements["date"].value = "";
    //  form.elements["title"].value = "";

        bookmtglist.sort(
        function(a,b){
        return (a.date < b.date) ? -1 : (a.date > b.date) ? 1 :  0;
        }
      );
  
    }
  
    else
    if(form.elements["sort"].value == "author") {
  
        bookmtglist.sort(
        function(a,b){
        return (a.author < b.author) ? -1 : (a.author > b.author) ? 1 :  0;
        }
      );
  
    }
  
    else
    if(form.elements["sort"].value == "title") {
  
        bookmtglist.sort(
        function(a,b){
        return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 :  0;
        }
      );
  
    }

 
  displaylist();
 }
}

// function SortBook(form){

//   if(form.elements["sort"].value == "date") {
  
//     form.elements["author"].value = "";
//     form.elements["date"].value = "";
//     form.elements["title"].value = "";

//     // bookmtglist.sort(
//     //   function(a,b){
//     //   return (a.date < b.date) ? -1 : (a.date > b.date) ? 1 :  0;
//     //   }
//     // );
//   }
// }

function displaylist() {

  var displayls = "";

  for( let i = 0; i<bookmtglist.length; i++) {

    displayls += bookmtglist[i].bookmtg();
  }
  document.getElementById("list").innerHTML = displayls;
}
function Dele(form){
  var author;
  var title;
  var date;
  title = form.elements["title"];
  author = form.elements["author"].value;
  date = new Date(form.elements["date"].value);

  // alert("delete");
   bookmtglist = "";
   author.value = "";
   title.value = "";
   date.value = "";
}

  // if(form.elements["sort"].value == "date") {
    
// function SortBook(form){

  // bookmtglist.sort(
    // function(a,b){
    //  return
      // (a.date < b.date) ? -1 : (a.date > b.date) ? 1 :  0;
    // }
  // );
// }
// function SortAuthor(form){

//   bookmtglist.sort(
//     function(c,d){
//      return (c.author < d.author) ? -1 : (c.author > d.author) ? 1 :  0;
//     }
//   );
// }
// function SortTitle(form){

//   bookmtglist.sort(
//     function(e,f){
//      return (e.title < f.title) ? -1 : (e.title > f.title) ? 1 :  0;
//     }
//   );
// }

// function SortBook(form){

// }