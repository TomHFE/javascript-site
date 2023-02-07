// call function

function bookmarked() {
  // get elements from dom

  const bookMarked = document.getElementById("book");

  // initialise variables

  let bookArr = [];

  bookArr = JSON.parse(window.localStorage.getItem("songs"));

  // spread data into html

  bookArr.forEach((item) => {
    let titleSaved = document.createElement("span");
    titleSaved.innerHTML = `${item.title} \n`;
    bookMarked.appendChild(titleSaved);
    let spaceTitle = document.createElement("br");
    bookMarked.appendChild(spaceTitle);

    let genreSaved = document.createElement("span");
    genreSaved.innerHTML = `${item.genre} \n`;
    genreSaved.style.color = "orange";

    bookMarked.appendChild(genreSaved);
    let spaceGenre = document.createElement("br");
    bookMarked.appendChild(spaceGenre);

    let reviewSaved = document.createElement("span");
    reviewSaved.innerHTML = `${item.review} \n`;
    reviewSaved.style.color = "grey";

    bookMarked.appendChild(reviewSaved);
    let spaceReview = document.createElement("br");
    bookMarked.appendChild(spaceReview);

    let forewordSaved = document.createElement("span");
    forewordSaved.innerHTML = `${item.foreword} \n`;
    bookMarked.appendChild(forewordSaved);
    let space = document.createElement("br");

    bookMarked.appendChild(space);
    let space1 = document.createElement("br");
    bookMarked.appendChild(space1);
    let space2 = document.createElement("br");
    bookMarked.appendChild(space2);
  });
}
// call function
bookmarked();
