const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
 
(async () => {
  const files = await imagemin(["images/*.jpg"], {
    destination: "compressed-images",
    plugins: [
      imageminMozjpeg({quality: 50})
    ]
  });
})();