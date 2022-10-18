import spiderMan from '../img/spider-man.jpg'

class Image {
  insertImg() {
    const img = document.createElement('img');

    img.src = spiderMan;

    img.width = 200;

    document.querySelector('body').appendChild(img);
  }
}

export default Image;