let marvelAPI = {
    fetchAPI: function(){
        fetch('https://whenisthenextmcufilm.com/api')
        .then(response => response.json())
        .then(data => this.displayAPI(data))
    },
    displayAPI: function(title){
        // let title = data.title;
        // let type = title.type;
        // let airDate = title.airDate;
        // let description = title.description;
        // let cast = title.cast;
        // let director = title.director;
        // let image = title.image;
        // let nextMedia = title.nextMedia;
        const { title } = title;
        const { type } = title.type;
        console.log(title, type, airDate, description, cast, director, image, nextMedia);
        document.querySelector('.title').innerText = title;
        document.querySelector('.media').innerText = type;
    }
}
marvelAPI.fetchAPI();
