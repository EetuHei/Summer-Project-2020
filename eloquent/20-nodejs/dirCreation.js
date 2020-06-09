const { mkdir } = require("fs").promises;

// most of this is boiler plate code
methods.MKCOL = async function (request) {
  let path = urlPath(request.url);
  let stats;
  try {
    stats = await stat(path);
  } catch (e) {
    if (e.code != "ENOENT") throw e;
    // added await to make dir
    await mkdir(path);
    return  {status: 204};
  }
  if (stats.isDirectory()) return {status: 204};
  // changed else state to return bad req
  else return {status: 400, body: "Not a directory"};
};
