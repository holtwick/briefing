export default {
  welcome: {
    start: 'Sitzung starten...',
    abstract: 'Sicherer direkter Video-Chat für Gruppen',
    help: 'Mehr Informationen',
    created: 'Erstellt von'
  },
  share: {
    title: 'Einladen',
    link_info: 'Gib diesen Link weiter an jeden der an dieser Sitzung teilnehmen soll:',
    button_copy: 'Kopieren',
    qr_info: 'Oder scanne diesen QR-Code mit einer Kamera:',
    feedback: 'Feedback bitte an <a href="mailto:support@holtwick.de?subject=Briefing">support@holtwick.de</a>',
    message: 'Einladungs-Link verschicken durch Klick auf das ' +
      '          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">\n' +
      '            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>\n' +
      '            <polyline points="16 6 12 2 8 6"></polyline>\n' +
      '            <line x1="12" y1="2" x2="12" y2="15"></line>\n' +
      '          </svg>-Symbol.',
  },
  settings: {
    title: 'Einstellungen',
    video: 'Video Geräte',
    audio: 'Audio Geräte',
    desktop: 'Bildschirm oder Fenster teilen',
    blur: 'Hintergrund verschwommen',
    blur_info: 'Experimentell: Ein intelligenter Algorithmus der künstlichen Intelligenz ist in der Lage, die Konturen von Personen zu identifizieren und den verbleibenden Hintergrund zu verwischen. Dies fügt Ihrem Anruf etwas visuelle Privatsphäre hinzu. Aber Achtung, dies ist eine sehr energieintensive Funktion und wird auf mobilen Geräten sehr wahrscheinlich nicht funktionieren!',
    bandwidth: 'Bandbreitenoptimierungen',
    bandwidth_info: 'Experimentell: Bei dieser Einstellung versucht Briefing, die Bandbreite durch geringer Qualität der Video- und Audiodaten zu reduzieren.',
    fill: 'Video ausfüllend',
    fill_info: 'Briefing versucht, den verfügbaren Bildschirmplatz so weit wie möglich auszunutzen, indem das Video so skaliert wird, dass es in den ganzen sichtbaren Rahmen passt. Ansonsten sehen Sie stattdessen das gesamte Video, jedoch mit einem Rahmen um das Video.',
    subscribe: 'Diesen Raum abonnieren',
    subscribe_info: 'Experimentell: Wenn Sie den Raium abonnieren, erhalten Sie eine Benachrichtigung, wenn jemand anderes diesen Raum betritt. Sie können dann mit einem Klick in das Gespräch einsteigen. Die Benachrichtigungen werden nur angezeigt, wenn der Browser läuft.',
    sentry: 'Fehleranalyse erlauben',
    sentry_info: `Wenn wir auf einen Programmierfehler oder andere relevante Informationen stoßen, die zur Verbesserung der Anwendung nützlich sind, senden wir Debug-Daten an einen Dienst namens <a href="https://sentry.io">sentry.io</a>.`,
    sentry_confirm: 'Danke, dass Sie die Fehleranalyse erlauben. Bitte bestätigen Sie, dass die Seite jetzt neu zu geladen werden darf.'
  },
}
