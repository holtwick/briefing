// https://web.dev/customize-install/

/* @media all and (display-mode: standalone) {
  body {
    background-color: yellow;
  }
} */

// let deferredPrompt
//
// window.addEventListener('beforeinstallprompt', (e) => {
//   // Prevent the mini-infobar from appearing on mobile
//   e.preventDefault()
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e
//   // Update UI notify the user they can install the PWA
//   alert('You can install')
// })

// buttonInstall.addEventListener('click', (e) => {
//   // Hide the app provided install promotion
//   hideMyInstallPromotion()
//   // Show the install prompt
//   deferredPrompt.prompt()
//   // Wait for the user to respond to the prompt
//   deferredPrompt.userChoice.then((choiceResult) => {
//     if (choiceResult.outcome === 'accepted') {
//       console.log('User accepted the install prompt')
//     } else {
//       console.log('User dismissed the install prompt')
//     }
//   })
// })

// window.addEventListener('appinstalled', (evt) => {
//   console.log('a2hs installed')
// })

export function isPWAInstalled() {
  return (
    navigator.standalone || matchMedia("(display-mode: standalone)").matches
  )
}

// window.addEventListener('load', () => {
//   if (navigator.standalone) {
//     console.log('Launched: Installed (iOS)');
//   } else if (matchMedia('(display-mode: standalone)').matches) {
//     console.log('Launched: Installed');
//   } else {
//     console.log('Launched: Browser Tab');
//   }
// });
