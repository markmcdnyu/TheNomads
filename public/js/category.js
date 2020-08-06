//Js file for the categories of items (below)


$(document).ready(function () {
  // Getting references to the name input and category container and table body
  var nameInput = $("#category-name");
  var categoryList = $("tbody");
  var categoryContainer = $(".category-container");


  // Adding event listeners to the form to create a new object, and the button to delete
  $(document).on("submit", "#category-form", handleCategoryFormSubmit);
  $(document).on("click", ".delete-category", handleDeleteButtonPress); // delete will be handled in CreateCategory row function

  // Getting the initial list of categories

  //function when the form is submitted to create a new category
  function handleCategoryFormSubmit(event) {
    event.preventDefault();

  }

  // call the function and pass the value of the name input

  //function for creating a category. Calls getcategory once complete

  //function for creating a new list row for categories 

  //function for retrieving categories & then almost getting them to the page

  //function for rendering the list of categories on the page

  // alert function for what to render when there are no categories for a product

  //function for what happens for the delete button
  function handleDeleteButtonPress() {

  }

});

//end