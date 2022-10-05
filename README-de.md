# Brie.fi/ng

<img src="public/sample.jpg" height="200" align="right" style="padding-left: 2rem;"> Der Datenschutz ist die zentrale Idee hinter diesem Projekt. Es werden ausschließlich offene Technologien (wie [WebRTC](https://webrtc-security.github.io/)) verwendet, die in allen modernen Browsern funktionieren. Somit ist keine Installation von zusätzlicher Software notwendig und der Ansatz bleibt zukunftssicher.

Über [Brie.fi/ng](https://brie.fi/ng) kann sofort gratis eine Unterhaltung begonnen werden. Eine [kostenlose iOS-App](https://apps.apple.com/app/briefing-video-chat/id1510803601) steht ebenfalls zur Verfügung.

Features wie Desktop-Sharing, Text Chat und einfache Einladungslinks sind vorhanden. Weitere können leicht mit Kenntnissen in Javascript und Vue hinzugefügt werden.

## Schnellstart für Entwickler

Lade oder klone das Projekt auf deinen lokalen Rechner und schon geht es los:

```sh
npm install
npm run start
```

## Verwendung in eigenen Projekten

Es gibt aber auch die Möglichkeit, die App in eigenen Projekte zu verwenden. Folgende Optionen stehen zur Verfügung:

1. Erstelle über [Brie.fi/ng](https://brie.fi/ng) einen Raum und kopiere den Link in deine Website.
2. Bette Briefing per `iframe` in deine eigene Seite ein. Verwende dazu den [praktischen Konfigurator](https://brie.fi/ng/embed-demo).
3. Starte Briefing auf deinem eigenen Server z.B. [via Docker](docs/docker.md)
4. Passe den Source Code nach deinen Bedürfnissen. Details dazu in der [Dokumentation](docs/README.md).

## Lizenzen

Generell ist Briefing frei, allerdings steht auch eine [kommerzielle Lizenz](#commercial-license) zur Verfügung, um deren Erwerb ich, insbesondere bei "White Labeling" Anwendungen, bitte. Ansonsten freue ich mich über die Unterstützung des Projektes durch [Sponsoring via GitHub](https://github.com/sponsors/holtwick), um die Weiterentwicklung zu fördern. Danke.

### Öffentliche Lizenz

Die Bedingungen der EUPL (European Union Public License 1.2) müssen beachtet werden, die denen der GPL ähneln. Änderungen müssen ebenfalls frei sein und der Öffentlichkeit unter derselben Lizenz zugänglich gemacht werden. Einen schnellen Überblick über die Lizenz erhältst du unter <https://choosealicense.com/licenses/eupl-1.2/>. Diese Lizenz ist auch in den [Sprachen der Europäischen Gemeinschaft](https://eupl.eu/) verfügbar.

### Kommerzielle Lizenz

Für die kommerzielle Nutzung oder Closed-Source-Projekte / "White Labeling" biete ich eine Lizenz mit folgenden Bedingungen an:

> Weltweite, nicht-exklusive, nicht-übertragbare und nicht unterlizenzierbare Lizenz von Briefing, wie es auf https:// github.com/holtwick/briefing/ zu finden ist, zur Verwendung in Produkten des Käufers, solange die resultierende Software nicht in Konkurrenz zu Briefing selbst steht. Jegliche Haftung ist ausgeschlossen. Es gilt ausschließlich das Recht der Bundesrepublik Deutschland.

Die einmalige Gebühr beträgt 499 EUR netto. Bitte wenden dich an [license@holtwick.de](mailto:license@holtwick.de) oder [kaufe direkt via Paddle](https://buy.paddle.com/product/650756).

## Autor

Mein Name ist Dirk Holtwick. Ich bin ein unabhängiger Softwareentwickler mit Sitz in Deutschland. Erfahren mehr über meine Arbeit unter [holtwick.de](https://holtwick.de/about).

## Beitragen

Beiträge sind immer willkommen. Am besten fängst du an [Issues](https://github.com/holtwick/briefing/issues) hinzuzufügen oder darauf zu antworten.

Um Übersetzungen hinzuzufügen oder zu korrigieren, starte hier: [src/locales](src/locales/).

## Vorgänger Version

Version 1.0 basierte auf Webpack und hatte Beispiele für iOS, Android, Windows und Electron sowie einen separaten Signal-Server. Sie bot auch Hintergrundunschärfe und Bildhintergründe über Unsplash. Alle diese Implementierungen waren veraltet. Der Code ist aber immer noch über den [legacy branch](https://github.com/holtwick/briefing/tree/legacy) zugänglich, wird aber nicht mehr gepflegt und unterstützt.
