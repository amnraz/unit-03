   
    function changeBackground() {
      let color = document.getElementById("colorInput").value.trim();
      let  div = document.getElementById("outputDiv");

      // Check if color is valid using a test element
      let  test = document.createElement("div");
      test.style.backgroundColor = color;

      if (test.style.backgroundColor === "") {
        alert("Invalid color name!");
      } else {
        div.style.backgroundColor = color;
      }
    }

    function updateText() {
      const text = document.getElementById("textInput").value.trim();
      const div = document.getElementById("outputDiv");

      if (text === "") {
        alert("Please enter some text!");
      } else {
        div.textContent = text;
      }
    }

