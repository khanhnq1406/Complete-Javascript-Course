const imgContainer = document.querySelector(".images");

const wait = function (second) {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

// Part 1
// const loadNPause = async function () {
//   try {
//     let img = await createImage("../00-Utils/images/Dom.png");
//     console.log("Image 1 loaded");
//     await wait(2);
//     img.style.display = "None";

//     img = await createImage(
//       "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
//     );
//     console.log("Image 2 loaded");
//     await wait(2);
//     img.style.display = "None";
//   } catch (err) {
//     console.error(err);
//   }
// };

// loadNPause();

// Part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (val) => await createImage(val));
    console.log(imgs);
  } catch (error) {
    console.log(error);
  }
};
loadAll([
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "../00-Utils/images/Dom.png",
]);
