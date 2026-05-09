
# Enhanced website
Ontwerp en maak een interactieve website die snel laadt en prettig te gebruiken is.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/enhanced-website/blob/main/docs/INSTRUCTIONS.md)

# Enhanced website

Ontwerp en maak een interactieve website die snel laadt en prettig te gebruiken is.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/enhanced-website/blob/main/docs/INSTRUCTIONS.md)

---

## Inhoudsopgave

- [Beschrijving](#beschrijving)
- [User experience](#user-experience)
- [Frontend performance](#frontend-performance)
- [Ontwerp lijstjespagina](#ontwerp-lijstjespagina)
- [Gebruik](#gebruik)
- [Installatie](#installatie)
- [Bronnen](#bronnen)
- [Licentie](#licentie)

---

## Beschrijving

Tijdens deze sprint heb ik gewerkt aan het verbeteren van de user experience, performance en het ontwerp van mijn Milledoni website. Milledoni is een cadeau-inspiratieplatform waarbij gebruikers originele cadeau-ideeën kunnen ontdekken, opslaan en later terugvinden.

In deze sprint lag de focus vooral op client-side JavaScript en de interactie tussen gebruiker en interface. Ik heb gewerkt aan het verbeteren van feedbackmomenten binnen de website, zodat acties duidelijker en prettiger aanvoelen voor de gebruiker. Daarnaast heb ik de chatbot verder responsive gemaakt voor mobiel gebruik en onderzoek gedaan naar de performance van de website.

Ook heb ik gewerkt aan een nieuw ontwerp voor de liked products pagina. Hierbij wilde ik afstappen van het idee van een traditionele webshop en meer focussen op een Pinterest-achtige inspiratieomgeving die beter aansluit bij de uitstraling van Milledoni.

---

## User experience

Op de Milledoni website kunnen gebruikers producten toevoegen aan een verlanglijstje. Deze functionaliteit heb ik in een eerdere sprint gebouwd met behulp van een POST request.

Tijdens deze sprint heb ik mij vooral gericht op de user experience rondom deze interactie. Het doel was om de gebruiker duidelijke feedback te geven wanneer een product wordt opgeslagen. Daarom heb ik gewerkt met verschillende states binnen de interface, zoals een loading state en een success state.

Hierdoor krijgt de gebruiker direct visuele feedback dat een actie succesvol wordt uitgevoerd. Dit maakt de interactie duidelijker, prettiger en gebruiksvriendelijker.

In deze issue staat de volledige flow uitgewerkt, inclusief het ontwerp en de werking van het client-side JavaScript:

https://github.com/Svenvandijk22/user-experience-enhanced-website/issues/10

---

## Frontend performance

Naast de user experience heb ik ook onderzoek gedaan naar de performance van de website. Hierbij heb ik een performance audit uitgevoerd om te kijken waar verbeteringen mogelijk waren.

Tijdens deze audit heb ik gekeken naar onderdelen zoals:
- laadtijden,
- afbeeldingen,
- rendering,
- en algemene prestaties van de website.

Alle bevindingen en verbeterpunten heb ik gedocumenteerd in onderstaande issue:

https://github.com/Svenvandijk22/user-experience-enhanced-website/issues/11

---

## Ontwerp lijstjespagina

Naast het verbeteren van de user experience en performance heb ik gewerkt aan een nieuw ontwerp voor de liked products pagina. Dit is de pagina waarop alle opgeslagen of gelikete producten van een gebruiker worden weergegeven.

Op de website van Milledoni wordt gewerkt met meerdere inspiratie-lijstjes van verschillende gebruikers. Daarom wilde ik niet alleen een overzicht tonen van de opgeslagen producten van de gebruiker zelf, maar ook inspiratie-lijstjes van andere personen toevoegen.

Hierdoor ontstaat een socialere en inspirerende omgeving waarin gebruikers cadeau-ideeën van anderen kunnen ontdekken. De pagina is ontworpen in een Pinterest-achtige stijl met een masonry layout. Hierdoor voelt de pagina minder als een webshop en meer als een inspiratieplatform.

Bovenaan de pagina staan ronde iconen die verschillende lijstjes voorstellen. Het eerste grotere rondje staat voor de persoonlijke lijstjes van de gebruiker zelf. Hiervoor heb ik een minimalistisch icoon ontworpen waarin een persoon en een cadeau gecombineerd worden. De kleinere rondjes vertegenwoordigen lijstjes van andere gebruikers.

Bij het ontwerp heb ik rekening gehouden met:
- veel witruimte,
- zachte kleuren,
- dunne outlines,
- en een minimalistische vormgeving.

Deze stijl sluit goed aan bij de rustige en luxe uitstraling van Milledoni.

De volledige uitwerking en onderbouwing van het ontwerp staat in deze issue:

https://github.com/Svenvandijk22/user-experience-enhanced-website/issues/13

---

## Gebruik

### User story

Als gebruiker wil ik cadeaus kunnen toevoegen aan mijn verlanglijstje, zodat ik mijn cadeaus kan bewaren en later makkelijk terugvinden.

Daarnaast wil ik inspiratie kunnen opdoen uit lijstjes van andere gebruikers, zodat ik nieuwe en originele cadeau-ideeën kan ontdekken.

---

## Installatie

```bash
npm install
npm start
```

---

## Bronnen

- https://milledoni.nl/
- https://www.pinterest.com/
- https://developer.mozilla.org/
- https://web.dev/
- https://css-tricks.com/

---

## Licentie

This project is licensed under the terms of the MIT license.
