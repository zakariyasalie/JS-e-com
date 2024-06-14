document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("save");
    const addBtn = document.getElementById("addBtn");
  
    // Function to save car data
    saveButton.addEventListener("click", function() {
      const id = document.getElementById("id").value;
      const name = document.getElementById("name").value;
      const description = document.getElementById("description").value;
      const price = document.getElementById("price").value;
      const image = document.getElementById("image").value;
  
      // You can process this data as needed, for example, send it to a server via AJAX
      console.log("ID:", id);
      console.log("Name:", name);
      console.log("Description:", description);
      console.log("Price:", price);
      console.log("Image:", image);
  
      // Clear input fields after saving
      document.getElementById("id").value = "";
      document.getElementById("name").value = "";
      document.getElementById("description").value = "";
      document.getElementById("price").value = "";
      document.getElementById("image").value = "";
    });
  
    // Function to add a new car modal
    addBtn.addEventListener("click", function() {
      // Do something when the "Add Car" button is clicked
      console.log("Add Car button clicked");
    });
  
    // You can add more functionality as needed here
  });
  