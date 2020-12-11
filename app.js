



function getImage(){
    let breed = document.getElementById('breed').value;
    let url = `https://dog.ceo/api/breed/${breed}/images/random`;

    fetch(url)
        .then(response => response.json)
        console.log(response)
}


function handleSubmit(){
    $('main').submit(event => {
        event.preventDefault();
        getImage();

    })
}





function handleApp(){

};

$(handleApp());