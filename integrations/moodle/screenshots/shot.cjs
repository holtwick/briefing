// Title image for the Moodle Marketplace listing, see ../README.md.
//
//   node shot.cjs      renders hero.html to 1-hero.png
//
// 2-call.png is the room shot of the Nextcloud listing (../../nextcloud/screenshots),
// 3-activity.png a screenshot of the activity page on a test Moodle.
const { resolve } = require('node:path')
const { pathToFileURL } = require('node:url')
const { chromium } = require(resolve(__dirname, '../../../app/node_modules/@playwright/test'))

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 })
  await page.goto(pathToFileURL(`${__dirname}/hero.html`).toString())
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(300)
  await page.screenshot({ path: `${__dirname}/1-hero.png` })
  console.log(`${__dirname}/1-hero.png`)
  await browser.close()
})()
