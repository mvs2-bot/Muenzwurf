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
- **Hell/Dunkel-Modus** per Sonne/Mond-Button
- **PWA:** installierbar auf dem Handy und offline nutzbar

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
| `icon.svg`      | App-Icon                                |

## Hosting

Läuft auf GitHub Pages: Repository → *Settings* → *Pages* → Branch `main`, Ordner `/ (root)`.

Nach Änderungen an der Seite in `sw.js` die Cache-Version erhöhen (z. B. `muenzwurf-v2`),
damit installierte Apps die neue Version laden.

## Datenschutz

Keine Server, kein Tracking: Alle Einstellungen und Ergebnisse bleiben im Local Storage des eigenen Geräts.
