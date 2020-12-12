

function displayImage(responseJson){
    console.log(responseJson.message);
    let imageHTML =`<img src="${responseJson.message}" class="results-img">`;
        $('.results-container').html(imageHTML);

}

function getImage(){
    $('.error-message').hide();
    let breed = document.getElementById('breed').value;
    
    let url = `https://dog.ceo/api/breed/` + breed + `/images/random`;

    fetch(url)
      .then(response => {
          if (response.ok){
              return response.json();
          }
            throw new Error(response.status);
      })
      .then(responseJson => displayImage(responseJson))
      .catch(err => {
          $('#js-err-message').text(`Something went wrong: Not a listed dog breed`);
          $('.error-message').show();
      });
    
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