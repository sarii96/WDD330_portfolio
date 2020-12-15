
//Wire up button
function searchApi(searchString) {
  fetch("https://www.googleapis.com/books/v1/volumes?q=" + searchString)
  .then(function(res) {
    return res.json();
  })
 .then(function(results) {
   let resultString = "<ul>";
    results.items.forEach(function(book) {
      resultString += '<li>'+'<strong>'+'Title:'+'</strong>'+' '+ book.volumeInfo.title + '</li>';
      resultString += '<ul>';
      resultString += '<img src="'+ book.volumeInfo.imageLinks.thumbnail + '">';
      resultString += '<li>'+'<strong>'+'Author:'+'</strong>'+' '+ book.volumeInfo.authors + '</li>';
      resultString += '<li>'+'<strong>'+'Publish Date:'+'</strong>'+' '+ book.volumeInfo.publishedDate + '</li>';
      resultString += '<li>'+'<strong>'+'Sinopsis:'+'</strong>'+' '+ book.volumeInfo.description + '</li><br>';
      resultString += '</ul>';
    }); 
    
    resultString += '</ul>';
    document.getElementById("results").innerHTML = resultString;
  }).catch(function(error) {
    console.log(error);
    document.getElementById("results").innerHTML = 'Error';
  });

  
}

function buttonClicked() {
  let submitText = document.getElementById("search").value;
  searchApi(submitText);
}

document.getElementById("button").addEventListener("click", buttonClicked);


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