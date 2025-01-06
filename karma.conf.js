module.exports = function (config) {
  config.set({
    basePath: "../..",
    frameworks: ["jasmine"],
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/iobcredit-monitoring"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },
  });
};

// {
//     coverageReporter: {
//     dir: require('path').join(__dirname, './coverage/<project-name>'),
//     subdir: '.',
//     reporters: [
//       { type: 'html' },
//       { type: 'text-summary' }
//     ],
//     check: {
//       global: {
//         statements: 80,
//         branches: 80,
//         functions: 80,
//         lines: 80
//       }
//     }
//   }
// }
