const fs = require('fs');
const {browserSync} = require('vibium');

//Launch a browser ( you will see it open)
const vibe = browserSync.launch({ headless: false });

//Go to a URL
vibe.go('https://amazon.com')
console.log('Opened amazon.com')

//Take a screenshot and save it to disk
const screenshot = vibe.screenshot()
fs.writeFileSync('example.png', screenshot)
console.log('Saved screenshot to example.png')

//Find and click a link
const link = vibe.find('a')
console.log('Clicking on link with text:', link.text())
link.click()
console.log('Clicked the link')

//Close the browser
// vibe.close()
// console.log('Browser closed')