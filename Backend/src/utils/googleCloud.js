const { Storage } = require("@google-cloud/storage");

const storage = new Storage({
  keyFilename: "/etc/secrets/spurti.json",
});

const bucket = storage.bucket("image_video_document_storage");
module.exports = { storage, bucket };
