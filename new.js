// 1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
const genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
// 2) Create an unordered list using JavaScript and save it in a variable
let unoList = document.createElement("ul");

// 3) Cycle the array and create a list-item via JavaScript for every element

// 4) Insert the genere as text in the list-item
let listE = document.createElement("li");
listE.appendChild(document.createTextNode("genres"));
// 5) Append the list items in the unordered list
unoList.appendChild(listE);
// 6) Append the unordered list in the document. The list should appear in the page.
document.getElementsByTagName(unoList);

// i will revist this page 