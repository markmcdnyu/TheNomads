//Js file for the products / items (below)


$(document).ready(function () {
    // product container that will hold the listings
    var productsContainer = $(".products-container");
    var productCategorySelect = $("#category");

    // Click events for the edit / delete
    $(document).on("click", "button.delete", handleProductDelete);
    $(document).on("click", "button.edit", handleProductEdit);

    // variable to hold the product listings
    var products;

    // Need something for when there is a item listening for a specific category
    // Looks for a query param in the url for category_id

    var url = window.location.search;
    var categoryId;
    if (url.indexOf("?author_id=") !== -1) {
        categoryId = url.split("=")[1];
        getProducts(categoryId);
    }

    // if there is no id, get all the products
    else {
        getProducts();
    }

    // function to get all products from db and then updates
    function getProducts(category) {
        categoryId = category || "";
        if (categoryId) {
            categoryId = "/?category_id=" + categoryId;
        }
        $.get("/api/products" + categoryId, function (data) {
            console.log("Products", data);
            products = data;
            if (!products || !products.length) {
                displayEmpty(category);
            }
            else {
                initializeRows();
            }
        });
    }

    //[may//may not keep b/c we dont have authentication], 
    //but function that does an API call to delete products/items
    function deleteProduct(id) {
        $.ajax({
            method: "DELETE",
            url: "/api/products/" + id
        })
            .then(function () {
                getProducts(productCategorySelect.val());
            });
    }


    //function to append all the built post HTML inside products container
    function initializeRows() {
        productsContainer.empty();
        var productsToAdd = [];
        for (var i = 0; i < products.length; i++) {
            productsToAdd.push(createNewRow(products[i]));
        }
        productsContainer.append(productsToAdd);
    }



    // function to construct the post html



    // function to find product to be delete, then deletes


    // function to fin which product to update, then takes to the appropriate url


    // function to display a message when there are no


});

// end