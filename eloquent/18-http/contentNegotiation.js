let url = "https://eloquentjavascript.net/author";

let mediaTypes = [
  "text/plain",
  "text/html",
  "application/json",
  "application/rainbows+unicorns",
];

for (let type of mediaTypes) {
  getResponse(url, type);
}

async function getResponse(url, type) {
  let response = await fetch(url, { headers: { accept: type } });
  response = await response.text();
  console.log(`\ntype: ${type}\n`, response, `-------------- end`);
}
