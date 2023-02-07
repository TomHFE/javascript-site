// call function

function contact() {
  // initialise arrays
  let contacArray = [];
  let ideaArr = [];
  // form for people to leave comments
  function ideaing() {
    // elements from html
    let idea = document.getElementById("ideas");
    let ideaSubmit = document.getElementById("submit-idea");
    // event listener which captures idea.value and stores it in local storage as well as idea array
    ideaSubmit.addEventListener("click", (e) => {
      if (idea.value === "") {
        alert("your text field is empty");
      } else {
        if (ideaArr === null) {
          ideaArr = [idea.value];
          localStorage.setItem("ideas", JSON.stringify(ideaArr));
          ideaArr = JSON.parse(localStorage.getItem("ideas"));
        } else {
          ideaArr.push(idea.value);
          localStorage.setItem("ideas", JSON.stringify(ideaArr));
          ideaArr = JSON.parse(localStorage.getItem("ideas"));
        }
      }
    });

    ideaArr = JSON.parse(localStorage.getItem("ideas"));
    // function to display ideas
    if (ideaArr != null) {
      ideaArr.forEach((idea) => {
        const ideaShow = document.getElementById("idea-show");

        let shown = document.createElement("p");
        shown.innerHTML = `${idea} \n`;
        ideaShow.appendChild(shown);
        let spaceIdea = document.createElement("br");
        ideaShow.appendChild(spaceIdea);
      });
    }
  }
  ideaing();
  // contact

  function contacing() {
    // fetching IDs from html

    let contacs = document.getElementById("contact");
    let contacSubmit = document.getElementById("submit-contact");
    let phone = document.getElementById("number");
    let email = document.getElementById("email");

    function contactObject(phone, email, contact) {
      this.phone = phone;
      this.email = email;
      this.contact = contact;
    }

    // adding event listener for sumbit button

    contacSubmit.addEventListener("click", (e) => {
      // create object to store contact info
      let newContact = new contactObject(
        phone.value,
        email.value,
        contacs.value
      );
      if (contacs.value === "") {
        alert("your text field is empty");
      } else {
        // push new obj to array and store in local storage

        if (contacArray === null) {
          contacArray = [newContact];
          localStorage.setItem("contacs", JSON.stringify(contacArray));
          contacArray = JSON.parse(localStorage.getItem("contacs"));
        } else {
          contacArray.push(newContact);
          localStorage.setItem("contacs", JSON.stringify(contacArray));
          contacArray = JSON.parse(localStorage.getItem("contacs"));
        }
      }
    });

    contacArray = JSON.parse(localStorage.getItem("contacs"));
    // display all contact information
    if (contacArray != null) {
      contacArray.forEach((contac) => {
        const contacShow = document.getElementById("contact-show");

        let box = document.createElement("p");
        contacShow.appendChild(box);

        function space() {
          let space = document.createElement("br");
          box.appendChild(space);
        }

        let shownPhone = document.createElement("span");
        shownPhone.innerHTML = `phone: ${contac.phone} \n`;
        box.appendChild(shownPhone);
        space();

        let shownEmail = document.createElement("span");
        shownEmail.innerHTML = `email: ${contac.email}
        \n`;
        box.appendChild(shownEmail);
        space();
        space();
        let shownContact = document.createElement("span");
        shownContact.innerHTML = `contact; ${contac.contact}
        \n`;
        box.appendChild(shownContact);
      });
    }
  }
  // call function
  contacing();
}
// call main function
contact();
