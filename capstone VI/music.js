// call function

function music() {
  // get parent element from dom
  const songs = document.querySelectorAll(".gridContainerMusic");
  // initalise array
  let songArr = [];
  // create object format
  function songObject(title, genre, review, foreword) {
    this.title = title;
    this.genre = genre;
    this.review = review;
    this.foreword = foreword;
  }
  songs.forEach((song) => {
    // call parent element and add a bookmark class

    const title = song.querySelector(".GridItemMusic2");

    let bookmark = document.createElement("span");
    bookmark.setAttribute("class", "bookmark");
    // this button has been here since the first submission it saves the song to the bookmarked tab as clarified above
    bookmark.innerHTML = ` SAVE FOR LATER `;
    title.appendChild(bookmark);

    bookmark.addEventListener("click", (e) => {
      // for each element attached to the parent element add there inner html to the appropriate place within the new object and push to array
      if (bookmark.classList.contains("checked")) {
        alert("this has already been checked");
      } else {
        bookmark.setAttribute("class", "checked");
        title.appendChild(bookmark);

        console.log("clicked");

        console.log(song.querySelector(".GridItemMusic1").innerHTML);

        songArr = JSON.parse(localStorage.getItem("songs"));

        let newLike = new songObject(
          song.querySelector(".GridItemMusic2").innerHTML,
          song.querySelector(".GridItemMusic3").innerHTML,
          song.querySelector(".GridItemMusic4").innerHTML,
          song.querySelector(".GridItemMusic5").innerHTML
        );

        if (songArr === null) {
          songArr = [newLike];
          alert(`you have ${songArr.length} songs in your save for later file`);
          localStorage.setItem(`songs`, JSON.stringify(songArr));
        } else {
          songArr.push(newLike);
          console.log(songArr);

          alert(`you have ${songArr.length} songs in your save for later file`);

          localStorage.setItem(`songs`, JSON.stringify(songArr));
        }
      }
    });

    // create like button

    let like = document.createElement("span");
    like.innerHTML = `   like`;
    title.appendChild(like);

    like.addEventListener("click", (e) => {
      e.target.classList.toggle("liked");
    });

    // make song array equal to local storage

    songArr = JSON.parse(localStorage.getItem("songs"));

    console.log(songArr);
  });
}
music();
