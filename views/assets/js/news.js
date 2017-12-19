var url = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=05619d354fd34a638c17ce96756ce349";
var req = new Request(url);

function generateArticle(articleIMG, articleDescription, articleURL, rightSide) {
    var template1 = `<div class="row">
                    <div class="article">
                    <a href="${articleURL}" target="_blank"><img src="${articleIMG}" class="articleImg"></a> <span>----</span> ${articleDescription}
                    </div>
                    </div>`
    var template2 = `<div class="row">
                        <div class="article rightSided">
                        <a href="${articleURL}" target="_blank"><img src="${articleIMG}" class="articleImg rightSide"></a> <span class="rightSide">----</span> <span class="rightSideDescription">${articleDescription}</span>
                        </div>
                        </div>`

    rightSide === true ? $("#articleContainer").append(template2) : $("#articleContainer").append(template1);
};

$.get(url, function (data) {
    for (var i = 0; i < data.articles.length; i++) {
        var rightSide = false;
        i % 2 === 0 ? rightSide = false : rightSide = true;
        generateArticle(data.articles[i].urlToImage, data.articles[i].description, data.articles[i].url, rightSide);
    }
});