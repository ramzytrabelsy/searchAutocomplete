let items = [];

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos');
xhr.responseType = 'json';
xhr.onload = function(e) {
  if (this.status == 200) {
    items = this.response;
  }
};
xhr.send();