fetch("https://www.googleapis.com/books/v1/volumes?q=ColleenHoover")
.then(function(res) {
    return res.json();
  })
 .then(function(results) {
  var str = ' ';
  document.getElementById("results").innerHTML = str;
  str = '<ul>'

  results.items.forEach(function(book) {
    str += '<li>'+'Title:'+' '+ book.volumeInfo.title + '</li>';
    str += '<ul>';
    str += '<li>'+'Author'+ ' '+ book.volumeInfo.authors + '</li>';
    str += '<li>'+'Publish Date:'+' '+ book.volumeInfo.publishedDate + '</li>';
    str += '<li>'+'Sinopsis:'+' '+ book.volumeInfo.description + '</li>';
    str += '<img src='+ book.volumeInfo.imageLinks + '>';
    str += '</ul>';
  }); 
  
  str += '</ul>';
  document.getElementById("results").innerHTML = str;


 }),
function(error) {
       console.log(error);
  
      };

    //  str += '<li>'+ book.volumeInfo.buyLink + '</li>';


  //  .then(function (result) {
  //   items = result.items;
  //   console.log(items);
  // }),
  // function (error) {
  //   console.log(error);

//  title = results.items[0].volumeInfo.title;
// authors = results.items[0].volumeInfo.authors;
//  publishedDate = results.items[0].volumeInfo.publishedDate;
//  description = results.items[0].volumeInfo.description;
//  imageLinks = results.items[0].volumeInfo.imageLinks;
//   buyLink = results.items[0].volumeInfo.buyLink
  
// console.log(title);
// console.log(authors);
//  console.log(publishedDate);
//  console.log(description);
//   console.log(imageLinks); 