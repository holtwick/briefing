const links = {
  'twitter': 'https://twitter.com/holtwick',
  'twitter2': 'https://twitter.com/apperdeck',
  'twitter3': 'https://twitter.com/dirkholtwick',
  'youtube': 'https://www.youtube.com/user/dirkholtwick',
  'linkedin': 'https://www.linkedin.com/in/holtwick/',
  'xing': 'https://www.xing.com/profile/Dirk_Holtwick/cv',
  'github': 'https://github.com/holtwick',
  'stackoverflow': 'https://stackoverflow.com/users/140927/holtwick',
  'paypal': 'https://www.paypal.me/apperdeck',

  // Briefing
  'holtwick': 'https://holtwick.de?ref=briefing',
  'privacy': 'https://holtwick.de/privacy?ref=briefing',
  'imprint': 'https://holtwick.de/imprint?ref=briefing',

  'producthunt': 'https://www.producthunt.com/posts/briefing-2',
  'appstore-windows': 'https://www.microsoft.com/p/briefings/9pcs356fc2jf',
  'pwa': 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Developer_guide/Installing',
  'alternative-to': 'https://alternativeto.net/software/brie-fi-ng/about/',
  'issues': 'https://github.com/holtwick/briefing/issues/',
  'bug': 'https://github.com/holtwick/briefing/issues/new?assignees=&labels=bug_report&template=bug_report.md&title=',
  'feature':
    'https://github.com/holtwick/briefing/issues/new?assignees=&labels=feature_request&template=feature_request.md&title=',
  'api': 'https://github.com/holtwick/briefing/',
  'peer-school': 'https://peer.school/?ref=peer.school',
}

export function gotoUrl(name: string) {
  return links[name]
}
