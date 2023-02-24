---
date: 2022-09-30
title: Briefing 2.0
---

# Briefing 2.0

Briefing entstand vor zwei Jahren zu Beginn der Corona-Pandemie. Danke seines einfachen, offener Aufbaus wurde es schnell beliebt und hat nun auch auf Github fast die tausender Marke an Sternen erreicht. In dieser Zeit hat sich technisch viel getan, daher habe ich den Code modernisiert und an die aktuellen technischen Standards angepasst.

## Vite statt Webpack

Zunächst wurde [Webpack](https://webpack.js.org/) durch [Vite](https://vitejs.dev/) ersetzt. Vite ist das Build-Tool der Wahl für heutige Web-Projekte. Es ist rasend schnell und erlaubt eine ganz neue Art des Entwickelns, bei der das Ergebnis im Moment des Speicherns des Codes schon im Browser sichtbar ist. Es unterstützt auch [Typescript](https://www.typescriptlang.org/) out-of-the-box und somit kann Briefing nun auch unkompliziert zu dieser Sprache migriert werden.

## Zerva als Server Unterbau

Der Signaling-Server war bisher getrennt von dem Code der Clientseite von Briefing. In den letzten Jahren habe ich das Open Source Projekt [Zerva](https://github.com/holtwick/zerva) vorangetrieben, dass die Entwicklung auf der Serverseite stark vereinfacht.

Erstens, weil es mit "Events" arbeitet, sodass jede Komponente an der Stelle einsetzen kann, an der sie benötigt wird. Zweitens weil das Zusammenspiel mit Vite und Vue optimiert wurde. Zerva integriert Vite in seinen Prozess und nur ein Aufruf startet sowohl den Server als auch die Website. Das Beste aus beiden Welten inklusive Hot-Reload auf beiden Seiten.

So ist es logisch, dass der Signaling Server jetzt in Zerva realisiert wurde. Auch [socket.io](https://socket.io/) konnte so endlich auf Altenteil geschickt werden, weil Zerva seine eigene Websocket Implementierung mitbringt, die sich durch ein sehr robustes Polling auszeichnet, sodass Verbindungen kaum verloren gehen kann.

## Ausblick

Technisch bleibt nun noch auf der Agenda die Modernisierung von Vue 2 zu 3 und eine umfangreichere Verwendung von Typescript, zur Qualitätssicherung des Codes.

**Der Code steht als Open Source wie zuvor unter <https://github.com/holtwick/briefing/> zur Verfügung und die App zur freien Benutzung unter <https://brie.fi/ng>.**
