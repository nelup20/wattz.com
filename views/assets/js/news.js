
var url = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=05619d354fd34a638c17ce96756ce349";
var req = new Request(url);

fetch(req).then(function(res){
    res.json();
}).then(function(r){
    console.log(r)
})