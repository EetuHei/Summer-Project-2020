const path = require("path");
const fs = require("fs");

function fromDir(filter) {
  let startPath = "./";
  // check if directory is found
  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  // find files in directory
  let files = fs.readdirSync(startPath);
  // loop filenames
  for (let i = 0; i < files.length; i++) {
    let filename = path.join(startPath, files[i]);
    // get info about filename
    let stat = fs.lstatSync(filename);
    // check if file is found in directory
    if (stat.isDirectory()) {
      //recurse
      fromDir(filename, filter);
      // check filename indexof filter and then log found files
    } else if (filename.indexOf(filter) >= 0) {
      console.log("-- found: ", filename);
    }
  }
}

// call for function, take argument from command line
// default argument to empty string if user dosn't provide argument (this way it will list all files in directory)
// else take user argument from command line and find files based on that
if (process.argv[2] == undefined) {
  fromDir("");
  console.log(
    `No argument provided, listed all files in ${__dirname} directory`
  );
} else {
  fromDir(process.argv[2]);
}
