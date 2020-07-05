const $gifArea = $("#gif-area");
const $searchInput = $("#search");

function addGif(res) {
    const numResults = res.data.length;
    if (numResults) {
        const randomIdx = Math.floor(Math.random() * numResults);
        const $newCol = $("<div>", {
            class: "col-md-4 col-12 mb-4"
        });
        const $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "w-100"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);

    }
}



$("form").on("submit", async function (evt) {
    evt.preventDefault();

    const searchTerm = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchTerm,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);
});


$("#remove").on("click", function () {
    $gifArea.empty();
});






// my giphy API Key:  rAK7gTXWvMbghwyyy90fxPcUpHrZYk4G