export default {
  welcome: {
    start: 'Start Video Chat',
    abstract: 'Secure direct group video chat',
    help: 'Learn More',
    created: 'Created by'
  },
  share: {
    title: 'Invite',
    link_info: 'Please share this link with everyone you want to invite to this session:',
    button_copy: 'Copy',
    qr_info: 'You can also scan this QR Code with a mobile device camera:',
    feedback: 'For feedback write to <a href="mailto:support@holtwick.de?subject=Briefing">support@holtwick.de</a>',
    message: 'Invite by sending the link via pressing on the\n' +
      '          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">\n' +
      '            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>\n' +
      '            <polyline points="16 6 12 2 8 6"></polyline>\n' +
      '            <line x1="12" y1="2" x2="12" y2="15"></line>\n' +
      '          </svg>\n' +
      '          symbol.',
  },
  settings: {
    title: 'Settings',
    video: 'Video Source',
    audio: 'Audio Source',
    desktop: 'Share screen or window',
    blur: 'Blur background',
    blur_info: 'Experimental: A smart artifical intelligence algorithm is able to indetify the shapes of persons and will blur out the remaining background. This adds some visual privacy to your call. But attention, this is a very power consuming feature and will very likely not work on mobile devices! ',
    bandwidth: 'Apply bandwidth optimizations',
    bandwidth_info: 'Experimental: With this setting Briefing tries to reduce bandwith by thinning video and audio data.',
    fill: 'Scale up video',
    fill_info: 'Briefing tries to use up the available screen space as much as possible by scaling up the video in a way that makes it fit in its visual frame. When turned off you will see the whole video instead but with borders around it.',
    subscribe: 'Subscribe to this room',
    subscribe_info: 'Experimental: By subscribing you will receive a notification when somebody else enters this room. You can then join the conversation with one click. Notifications will only be shown if the browser is running.',
    sentry: 'Allow bug tracking',
    sentry_info: `When encounting a programming error or other relevant information that is useful improving the app, we will send debug data to a service called <a href="https://sentry.io">sentry.io</a>.`,
    sentry_confirm: 'Thanks for allowing bug tracking. Please confirm to reload the page now.',
  },
}
