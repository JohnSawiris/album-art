function Showcase(name, year, title, image) {
  this.name = name;
  this.year = year;
  this.title = title;
  this.image = image;
}

Showcase.prototype.albumInfo = function (id) {
  var div = document.createElement('div'),
      img = document.createElement('img'),
      name = document.createElement('p'),
      title = document.createElement('p'),
      year = document.createElement('p');

  div.classList.add('col-sm-3', 'card');
  img.src = this.image;
  name.innerHTML = "Artist: " + this.name;
  title.innerHTML = "Album Title: " + this.title;
  year.innerHTML = "Release Year: " +this.year;

  div.appendChild(img);
  div.appendChild(name);
  div.appendChild(title);
  div.appendChild(year);

  document.getElementById(id).appendChild(div);
};

document.addEventListener('DOMContentLoaded', function() {
  var formBtn = document.getElementById('form-btn'),
      cancelBtn = document.getElementById('cancel-btn'),
      overlay = document.querySelector('.overlay'),
      inputs = document.querySelectorAll('.album input'),
      header = document.querySelector('.header'),
      addAlbum = document.getElementById('add-btn');

  formBtn.addEventListener('click', function() {
    var artistName = document.querySelector('input[name="artist"]').value,
        releaseYear = document.querySelector('input[name="release-date"]').value,
        albumTitle = document.querySelector('input[name="album-title"]').value,
        albumImage = document.querySelector('input[name="image-uri"]').value;

    var newAlbum = new Showcase(artistName, releaseYear, albumTitle, albumImage);
    newAlbum.albumInfo('albums');

    artistName.innerText = "";
    overlay.classList.remove('show');
    for(var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  });//form Btn

  addAlbum.addEventListener('click', function(event) {
    event.preventDefault();
    overlay.classList.add('show');
  });//add btn

  cancelBtn.addEventListener('click', function() {
    overlay.classList.remove('show');
    for(var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  });//cancel btn
});
