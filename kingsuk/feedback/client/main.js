window.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const slider = document.getElementById("slider");
    const emoji = document.querySelector(".emoji");
    const rate = document.getElementById("message");
    const colors = ["#d35e65", "#d3965c", "#cad48a", "#6ed494", "#18c574"];
    const emojis = [
    {
      text: "Awful",
      url: "https://assets.codepen.io/210284/Disappointed.svg"
    },
   {
      text: "Bad",
      url: "https://assets.codepen.io/210284/Sad.svg"
    },
    {
      text: "Okay",
      url: "https://assets.codepen.io/210284/Expressionless.svg"
    },
    {
      text: "Good",
      url: "https://assets.codepen.io/210284/Smile.svg"
    },
    {
      text: "Great",
      url: "https://assets.codepen.io/210284/Falling_in_love.svg"
    }]
  
    function setProperties(index) {
      emoji.src = emojis[index].url;
      rate.textContent = emojis[index].text;
      container.style.backgroundColor = colors[index];
    }
  
    slider.addEventListener("input", UpdateRating);
  
    function UpdateRating() {
      const value = slider.value;
  
      if (value >= 0 && value < 20) {
        setProperties(0);
      } else if (value >= 20 && value < 40) {
        setProperties(1);
      } else if (value >= 40 && value < 60) {
        setProperties(2);
      } else if (value >= 60 && value < 80) {
        setProperties(3);
      } else if (value >= 80 && value <= 100) {
        setProperties(4);
      }
    }
  });

  function goHome() {
    window.location.href = "index.html";
}
  function validateForm() {
    let x = document.forms["review"]["First Name"].value;
    let y = document.forms["review"]["Last Name"].value;
    let z = document.forms["review"]["phone"].value;
    let w = document.forms["review"]["email"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    if (y=="") {
      alert("Name must be filled out");
      return false;
    }
    if (z == "") {
      alert("Phone number must be filled out");
      return false;
    }
    if (w == "") {
      alert("Email must be filled out");
      return false;
    }
  }// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
