// Compile css with webpack
require("../less/main.less");

// Watch markup
if (process.env.NODE_ENV !== "production") {
  require("../../html/index.html");
}

require("./main");
