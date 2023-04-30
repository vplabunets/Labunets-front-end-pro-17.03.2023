const dataBase = {
  1: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg",
  2: "https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_960_720.jpg",
  3: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg",
  4: "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg",
  5: "https://cdn.pixabay.com/photo/2017/03/14/14/49/cat-2143332_960_720.jpg",
  6: "https://cdn.pixabay.com/photo/2016/11/21/14/47/kitten-1845789_960_720.jpg",
  7: "https://cdn.pixabay.com/photo/2020/11/26/11/48/cat-5778777_960_720.jpg",
  8: "https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_960_720.jpg",
  9: "https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673_960_720.jpg",
};

const wrapperEl = document.querySelector(".wrapper");
const dataBaseLength = Object.keys(dataBase).length;
const randomiser = Math.round(Math.random() * (dataBaseLength - 1) + 1);

wrapperEl.innerHTML = `<img src="${dataBase[randomiser]}" alt="cat picture" width="400" height="300">`;
