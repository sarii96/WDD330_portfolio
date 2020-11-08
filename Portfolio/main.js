const currentDate = new Date();
console.log(currentDate);

const currentYear = currentDate.getFullYear();
console.log(currentYear);

document.getElementById("currentYear").innerHTML =  currentYear;
const links = [
  {
    label: "Week01",
    url: "week1/week1.html"
  },
  {
    label: "Week02",
    url: "week2/week2.html"
  },
  {
    label: "Week03",
    url: "week3/week3.html"
  },
  {
    label: "Week04",
    url: "week4/week4.html"
  },
  {
    label: "Week05",
    url: "week5/week5.html"
  },
  {
    label: "Week06",
    url: "week6/week6.html"
  },
  {
    label: "Week07",
    url: "week7/week7.html"
  },
  {
    label: "Week08",
    url: "week8/week8.html"
  }

];
let htmlLinks = "";
for (let linkObject of Object.values(links)) {
  htmlLinks += '<li><a href="' + linkObject.url + '">' + linkObject.label + '</a> </li>';
}
document.getElementById("tableOfContents").innerHTML =htmlLinks ;
