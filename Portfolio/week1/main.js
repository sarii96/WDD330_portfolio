const currentDate = new Date();
console.log(currentDate);

  const currentYear = currentDate.getFullYear();
  console.log(currentYear);
  
  document.getElementById("currentYear").innerHTML =  currentYear;

  function loadStory(){
     let storyName = document.getElementById("name_input").value;
     let storyHTML = localStorage.getItem(storyName);
     document.getElementById("story_editor").value = storyHTML;
    }
    function saveStory(){
   let storyName = document.getElementById("name_input").value;
   let storyHTML = document.getElementById("story_editor").value;
    localStorage.setItem(storyName, storyHTML);
    }
   function displayStory(){
    let storyHTML = document.getElementById("story_editor").value;
   
    document.getElementById("story_display").innerHTML = storyHTML;
   
   }