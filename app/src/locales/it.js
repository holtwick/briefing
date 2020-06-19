export default {
  welcome: {
    start: 'Avvia Video Chat',
    abstract: 'Video chat di gruppo secura e diretta',
    help: 'Per saperne di più',
    created: 'Creato da',
  },
  share: {
    title: 'Condivi',
    link_info: 'Si prega di inviare questo link a tutti i partecipanti:',
    button_copy: 'Copia',
    qr_info: 'Puoi anche scansionare questo codice QR con una fotocamera del dispositivo mobile:',
    feedback: 'Per feedback scrivere a <a href="mailto:support@holtwick.de?subject=Briefing">support@holtwick.de</a>',
    message: 'Invita inviando il link premendo sul tasto\n' +
      '          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">\n' +
      '            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>\n' +
      '            <polyline points="16 6 12 2 8 6"></polyline>\n' +
      '            <line x1="12" y1="2" x2="12" y2="15"></line>\n' +
      '          </svg>\n' +
      '          symbol.',
  },
  settings: {
    title: 'Impostazioni',
    video: 'Sorgente video',
    audio: 'Sorgente audio',
    desktop: 'Condividi schermo o finestra',
    blur: 'Sfocatura dello sfondo',
    blur_info: 'Sperimentale: un algoritmo di intelligenza artificiale è in grado di individuare le forme delle persone e sfocare lo sfondo rimanente. Questo aggiunge un po di privacy visiva alla tua chiamata. Ma attenzione, questa è una funzione che consuma molto energia e molto probabilmente non funzionerà su dispositivi mobili! ',
    bandwidth: 'Applica ottimizzazioni della larghezza di banda',
    bandwidth_info: 'Sperimentale: con questa impostazione, il briefing cerca di ridurre la larghezza di banda assottigliando i dati video e audio.',
    fill: 'Scala video',
    fill_info: 'Il briefing cerca di sfruttare il più possibile lo spazio disponibile sullo schermo ridimensionando il video in modo da adattarlo alla sua cornice visiva. Quando è spento, vedrai invece l\'intero video ma con bordi attorno.',
    subscribe: 'Iscriviti a questa stanza',
    subscribe_info: 'Sperimentale: iscrivendoti riceverai una notifica quando qualcun altro entra in questa stanza. È quindi possibile partecipare alla conversazione con un clic. Le notifiche verranno visualizzate solo se il browser è in esecuzione.',
    sentry: 'Consenti rilevamento bug',
    sentry_info: `Quando riscontriamo un errore di programmazione o altre informazioni utili utili per migliorare l'app,invieremo i dati di debug a una chiamata di servizio <a href="https://sentry.io">sentry.io</a>.`,
    sentry_confirm: 'Grazie per aver permesso il tracciamento dei bug. Conferma per ricaricare la pagina ora.',
  },
}
