# 🪙 Münzwurf

Kleine Entscheidungshilfe für den Alltag: Gym oder Bouldern? Option A oder B?
Die Seite wirft eine Münze beliebig oft und zeigt das Ergebnis einzeln und gesamt an.

## Funktionen

- **Sofort startklar:** Optionen und Anzahl der Würfe werden gespeichert, beim nächsten Öffnen ist alles vorausgefüllt
- **Echter Zufall:** jeder Wurf über `crypto.getRandomValues` (kryptografischer Zufall, exakt 50/50)
- **Spannung:** zufällige Wartezeit von 3–5 Sekunden mit Münz-Animation und Live-Spielstand
- **Ergebnis-Pop-over:** Gewinner, Balken mit Prozenten und alle Einzelwürfe
- **Anpassbar:** eigene Namen, 1–999 Würfe (Schnellwahl 1/3/11/21/51), Seiten tauschen
- **Mehr als zwei Optionen:** bis zu 6 Optionen (A–F); jeder Wurf wählt zufällig eine davon
- **Verlauf:** die letzten 50 Ergebnisse im Local Storage, antippen zeigt die Details
- **Teilen:** jedes Ergebnis (Münzwurf, Glücksrad, Wer zahlt?, Teams) per Teilen-Menü direkt in den Chat schicken; am Rechner wird es kopiert
- **Hell/Dunkel-Modus** per Sonne/Mond-Button
- **PWA:** installierbar auf dem Handy (eigene Icons für iPhone und Android) und offline nutzbar
- **Immer aktuell:** neue Versionen sind beim nächsten Öffnen sofort da; war die App lange im Hintergrund offen, erscheint „Neue Version – tippen zum Laden“

## Weitere Entscheidungshelfer

Die Startseite bleibt der Münzwurf. Darunter führen vier Kacheln zu weiteren Werkzeugen
(Zurück über den ‹-Button oben links oder die Zurück-Geste):

- 🎲 **Würfel** (`#wuerfel`): 1–6 Würfel, W4/W6/W8/W10/W12/W20, Summe und die letzten 10 Würfe
- 🎡 **Glücksrad** (`#rad`): 2–12 eigene Felder, Gewinner auf Wunsch aus dem Rad entfernen
- 💸 **Wer zahlt?** (`#zahlt`): 2–12 Personen, die Markierung springt und bleibt beim Zahler stehen
- 👥 **Team-Auslosung** (`#teams`): Namen einfügen (pro Zeile oder mit Komma), 2–6 Teams, Ergebnis kopieren

Alle Werkzeuge nutzen denselben kryptografischen Zufall und merken sich ihre Eingaben.
Die Anker (z. B. `…/#rad`) funktionieren auch als eigene Verknüpfung; installiert gibt es sie per langem Druck aufs App-Icon.

## Eigene Verknüpfungen

Über URL-Parameter lassen sich feste Duelle vorbelegen, z. B. als eigene Verknüpfung auf dem Startbildschirm:

```
?a=Gym&b=Bouldern&n=21
?o=Gym,Bouldern,Laufen&n=21
```

| Parameter | Bedeutung                                 |
|-----------|-------------------------------------------|
| `a`       | Name Seite A                              |
| `b`       | Name Seite B                              |
| `o`       | 2–6 Optionen, durch Komma getrennt        |
| `n`       | Anzahl Würfe                              |

## Dateien

| Datei           | Zweck                                   |
|-----------------|-----------------------------------------|
| `index.html`    | komplette Seite (HTML, CSS, JavaScript) |
| `manifest.json` | App-Infos für die Installation          |
| `sw.js`         | Service Worker für die Offline-Nutzung  |
| `icon.svg`      | App-Icon (Browser-Tab, Vorlage für die PNGs) |
| `icon-*.png`, `apple-touch-icon.png` | App-Icons für Android und iPhone (aus `icon.svg` bzw. `icon-maskable.svg`) |

## Hosting

Läuft auf GitHub Pages: Repository → *Settings* → *Pages* → Branch `main`, Ordner `/ (root)`.

Änderungen an `index.html` kommen ohne weiteres Zutun bei installierten Apps an, weil die Seite zuerst aus dem Netz geladen wird.
Nur wenn Dateien dazukommen oder umbenannt werden, in `sw.js` die Liste `ASSETS` anpassen und die Cache-Version erhöhen (z. B. `muenzwurf-v6`).

## Datenschutz

Keine Server, kein Tracking: Alle Einstellungen und Ergebnisse bleiben im Local Storage des eigenen Geräts.
