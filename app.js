

function displayImage(responseJson){
    console.log(responseJson.message);
    let imageHTML =`<img src="${responseJson.message}" class="results-img">`;
    console.log(imageHTML)
    $('main').append(imageHTML);

}

function getImage(){
    let breed = document.getElementById('breed').value;
    
    let url = `https://dog.ceo/api/breed/` + breed + `/images/random`;

    fetch(url)
      .then(response => response.json())
      .then(responseJson => displayImage(responseJson))
      .catch(error => alert('Something went wrong. Try again later'));

}


function handleSubmit(){
    $('main').submit(event => {
        event.preventDefault();
        getImage();

    })
}





function handleApp(){
    handleSubmit();
};

$(handleApp());