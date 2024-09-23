function sortServices() {
    console.log("sortServices function called");

    var select = document.getElementById("sort-select");
    
    var sortServiceName = select.value.toUpperCase(); // Convert to uppercase for case-insensitive comparison

    var serviceBox = document.getElementById("service-box");
    var serviceContents = serviceBox.getElementsByClassName("service-content");

    for (var i = 0; i < serviceContents.length; i++) {
        var service = serviceContents[i];
        var serviceName = service.dataset.name.toUpperCase();
        console.log("Service name: ", serviceName);

        if (sortServiceName === "DEFAULT" || serviceName === sortServiceName) {
            service.classList.remove("hidden"); // Display matched service
            service.style.order = -1; // Move matched service to top
        } else {
            service.classList.add("hidden"); // Hide non-matched services
            service.style.order = 1; // Ensure hidden services maintain their order
        }
    }
}
function sortPortfolio() {
    console.log("sortPortfolio function called");

    var select = document.getElementById("sort-select-portfolio");
    
    var sortPortfolioName = select.value.toUpperCase(); // Convert to uppercase for case-insensitive comparison

    var portfolioWrapper = document.getElementById("portfolio-wrapper");
    var portfolioItems = portfolioWrapper.getElementsByClassName("portfolio-item");

    for (var i = 0; i < portfolioItems.length; i++) {
        var portfolio = portfolioItems[i];
        var portfolioName = portfolio.dataset.name.toUpperCase();
        console.log("Portfolio name: ", portfolioName);

        if (sortPortfolioName === "DEFAULT" || portfolioName === sortPortfolioName) {
            portfolio.classList.remove("hidden"); // Display matched service
            portfolio.style.order = -1; // Move matched service to top
        } else {
            portfolio.classList.add("hidden"); // Hide non-matched services
            portfolio.style.order = 1; // Ensure hidden services maintain their order
        }
    }
}
