import { on } from '@zerva/core'
import { Logger } from 'zeed'

const log = Logger('apple')

const json = {
  applinks: {
    details: [
      {
        appIDs: ['8SS3YPUJH9.de.holtwick.Briefing'],
        components: [
          {
            '/': '/ng/*',
            'comment': 'Enter a room https://brie.fi/ng/example-room-name',
          },
          // {
          //   '/': '/',
          //   'comment': 'Open Briefing app',
          // },
        ],
      },
    ],
  },
  webcredentials: {
    apps: ['8SS3YPUJH9.de.holtwick.Briefing'],
  },
  appclips: {
    apps: ['8SS3YPUJH9.de.holtwick.Briefing.BriefingAppClip'],
  },
}

export function useApple() {
  log('setup')

  on('httpInit', ({ get }) => {
    get(/(^|\/)apple-app-site-association/gim, () => {
      // res.set("Content-Type", "application/pkcs7-mime")
      return json
    })
  })
}
