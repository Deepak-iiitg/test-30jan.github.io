

function searchUniversity(query){
    const url = `http://universities.hipolabs.com/search?country=${query}`;
    fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
        var len = jsonData.length;
        for(var i=0;i<len;i++){
             document.write(jsonData[i].name+"<br>");
        }
    });
}
window.onload = () =>{
    const search = document.querySelector("input[type='text']");
    search.onkeyup = (event) => {
        searchUniversity(search.value);
    }
}
