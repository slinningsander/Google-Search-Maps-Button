browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});



function addMapsButton(currentSearchTerm) {
    let targetDiv = document.querySelector('.IUOThf');
    if (targetDiv && !document.querySelector('.mapsButton')) {
        console.log("I found the target div");

        let wrapperDiv = document.createElement('div');
        wrapperDiv.style = "pointer-events: auto;";

        let mapsButton = document.createElement('a');
        mapsButton.href = 'https://www.google.com/maps/search/' + encodeURIComponent(currentSearchTerm);
        mapsButton.className = 'LatpMc nPDzT T3FoJb mapsButton'; // Added 'mapsButton' for identification
        mapsButton.setAttribute('jsname', 'VIftV');
        mapsButton.setAttribute('role', 'link');

        let buttonContentDiv = document.createElement('div');
        buttonContentDiv.setAttribute('jsname', 'bVqjv');
        buttonContentDiv.className = 'GKS7s';

        let buttonTextSpan = document.createElement('span');
        buttonTextSpan.className = 'FMKtTb UqcIvb';
        buttonTextSpan.setAttribute('jsname', 'pIvPIe');
        buttonTextSpan.textContent = 'Maps';

        buttonContentDiv.appendChild(buttonTextSpan);
        mapsButton.appendChild(buttonContentDiv);
        wrapperDiv.appendChild(mapsButton);
        targetDiv.appendChild(wrapperDiv);
    }
}

//MutationObserver setup
const observerCallback = function(mutationsList, observer) {
    const searchInput = document.querySelector('input[name="q"]');
    if (searchInput) {
        console.log("Search input detected.");
        observer.disconnect(); // Optional: disconnect observer after finding the input
        addMapsButton(searchInput.value); // Now passing the search term directly
    }
};

const observer = new MutationObserver(observerCallback);
observer.observe(document.body, { childList: true, subtree: true });


