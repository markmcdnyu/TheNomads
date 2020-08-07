$(document).ready(function() {
    // Getting jQuery references to the product body, title, form, and category select
    var bodyInput = $("#body");
    var titleInput = $("#title");
    var listingForm = $("#listing");
    var categorySelect = $("#categories");
    // Adding an event listener for form submission
    $(listingForm).on("submit", handleFormSubmit);
    var url = window.location.search;
    var productId;
    var categoryId;
    // Sets a flag for whether or not we're updating a product to be false initially
    var updating = false;



 // Pulls product Id from url
    if (url.indexOf("?product_id=") !== -1) {
        productId = url.split("=")[1];
        getProductData(productId, "product");
      }
      // Allows categories us to preset category select box
      else if (url.indexOf("?category_id=") !== -1) {
        categoryId = url.split("=")[1];
      }
  
      // Get categories, and their products
      getCategories();
  
      // function for once a new product is submitted
      function handleFormSubmit(event) {
        event.preventDefault();
        if (!titleInput.val().trim() || !bodyInput.val().trim() || !categorySelect.val()) {
          return;
        }
        // Creating a newProduct object to put in DB
        var newProduct = {
          title: titleInput
            .val()
            .trim(),
          body: bodyInput
            .val()
            .trim(),
          CategoryId: categorySelect.val()
        };
        
        // Run updateProduct to literally update product and submitPost to create new post
        if (updating) {
            newProduct.id = productId;
            updateProduct(newProduct);
          }
          else {
            submitProduct(newProduct);
          }
        }
    }
);


    
        