var ImageKit = require("imagekit");

exports.initImageKit = () => {
  var imagekit = new ImageKit({
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT_URL,
  });

  return imagekit;
};
