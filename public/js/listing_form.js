$(document).ready(function() {
    // Getting jQuery references to the post body, title, form, and author select
    var bodyInput = $("#body");
    var titleInput = $("#title");
    var listingForm = $("#listing");
    var categorySelect = $("#categories");
    // Adding an event listener for when the form is submitted
    $(listingForm).on("submit", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
    var url = window.location.search;
    var productId;
    var categoryId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;
}