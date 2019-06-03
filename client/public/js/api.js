function fetchImage() {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(response => response.json())
        .then(imageResource => { 

            for (let i = 0; i < 5; i++) {
            let imgElement = document.createElement('img');
            imgElement.src = imageResource[i]['url'];
            imgElement.style.height = "200px";
            imgElement.style.width = "240px";            
            document.body.appendChild(imgElement);
            }                        
        });
} 

function fetchProjects() {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        .then(response => response.json())
        .then(imageResource => { 

            for (let i = 1; i < 3; i++) {
                // Elements to be created
                let figcaption = document.createElement('figcaption');
                let img = document.createElement('img');

                let figcaptionNode = document.createTextNode("Description: " + imageResource[i]['title']);

                img.src = imageResource[i]['url'];
                img.style.height = "200px";
                img.style.width = "240px";

                document.getElementById("project-stack").appendChild(img);
                figcaption.appendChild(figcaptionNode);
                document.getElementById("project-stack").appendChild(figcaption);
            }                        
        });
}