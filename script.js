function onJson(json) {
    console.log('JSON ricevuto');
    console.log(json);
    const sezione = document.querySelector('#film-visualizzati');
    sezione.innerHTML = '';
    const num_risultati = json.results;
    if(num_risultati > 10)
      num_risultati = 10;
    for(let i=0; i<num_risultati; i++) {
      const film_data = results[i]
      const title = film_data.title;
      const images = film_data.image;
      const film = document.createElement('div');
      film.classList.add('film');
      const img = document.createElement('img');
      img.src = images;
      const caption = document.createElement('span');
      caption.textContent = title;
      film.appendChild(img);
      film.appendChild(caption);
      sezione.appendChild(film);
    }
  }
  
  function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json();
  }
  
  function search(event) {
    event.preventDefault();
    const titolo_input = document.querySelector('#titolo');
    const titolo_value = encodeURIComponent(titolo_input.value);
    console.log('Eseguo ricerca: ' + titolo_value);
    rest_url ='https://imdb-api.com/API/SearchAl/' + api_key + '/?title=' + titolo_value;
    console.log('URL: ' + rest_url);
    fetch(rest_url).then(onResponse).then(onJson);
  }
  

  const api_key = 'k_zmr77b1a';

  const form = document.querySelector('form');
  form.addEventListener('submit', search)
  
  


  
  let tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  let done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
  }