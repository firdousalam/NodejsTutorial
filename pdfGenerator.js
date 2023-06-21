//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs-extra");

// Read HTML Template
var html = fs.readFileSync("./public/userDetails.html", "utf8");
var options = {
    format: "A3",
    orientation: "portrait",
    border: "20mm",
    header: {
        height: "55mm",
        contents: '<div style="text-align: center;">Author: Technophile Firdous</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};
var users = [
    {
      name: "Shyam",
      age: "26",
    },
    {
      name: "Navjot",
      age: "26",
    },
    {
      name: "Vitthal",
      age: "26",
    },
    {
      name: "Zuni",
      age: "4",
    }
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./UserList.pdf",
    type: "",
  };
  // By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.

  pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });