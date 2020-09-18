const currentDate = new Date();
console.log(currentDate);

  const currentYear = currentDate.getFullYear();
  console.log(currentYear);
  
  document.getElementById("currentYear").innerHTML =  currentYear;
  const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]