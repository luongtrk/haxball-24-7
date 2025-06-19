// haxball.js (tối giản chỉ để khởi tạo room)
module.exports = async () => {
  const { JSDOM } = require('jsdom');
  const dom = await JSDOM.fromURL("https://www.haxball.com/headless", {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true
  });
  return new Promise((resolve) => {
    dom.window.addEventListener("load", () => {
      resolve(dom.window.HBInit);
    });
  });
};
