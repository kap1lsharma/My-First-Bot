const fs = require('fs');
const {browserSync} = require('vibium');

//Launch a browser (headless for CI)
const vibe = browserSync.launch({ headless: true });

//Go to a URL
vibe.go('https://google.com')
console.log('Opened amazon.com')

//Take a screenshot and save it to disk
const screenshot = vibe.screenshot()
fs.mkdirSync('screenshots', { recursive: true });
const filename = `screenshots/screenshot_${Date.now()}.png`;
fs.writeFileSync(filename, screenshot)
console.log(`Saved screenshot to ${filename}`)

//Find and click a link
const link = vibe.find('a')
console.log('Clicking on link with text:', link.text())
link.click()
console.log('Clicked the link')

//Close the browser
vibe.quit()
console.log('Browser closed')