
# Readme

## Riippuvuudet

* Ruby (sass kääntäjää varten) https://www.ruby-lang.org/en/

* node.js (npm paketinhallintaa varten) https://nodejs.org

* Grunt ja Grunt CLI http://gruntjs.com

Kun kaikki edelläolevat on asennettu, aja komento `npm install`. Se asentaa `node_modules` hakemiston, joka tarvitaan kehitystyötä varten.

Jos kehitystä ei tarvita tässä repossa olevat `.html` tiedostot sekä `js`, `css`, `fonts` ja `styleguide` hakemistot voi siirtää verkkopalvelimelle.

Grunt.js konfiguraatio sisältää seuraavat tehtävät.

## Grunt

Komento `grunt` ajaa kaikki edelläolevat tehtävät.

### Watch

Vahtii muuttuneita tiedostoja ja tekee määrätyt tehtävät kun havaitsee muutoksia. Esim. kun `.css` tiedosto tallennetaan tehdään `.sass` käännös.

### Sass

* Watch `grunt sass`

Kääntää `.scss` tiedoston `.css` muotoon.  

### Livereload

* livereload `grunt livereload`

Päivittää selaimen ikkunan, jolloin sitä ei tarvitse manuaalisesti päivittää. Vaatii selainen pluginin joka löytyy täältä: http://livereload.com.   

### Hologram

* Hologram `grunt hologram`

Hologram tehtävä parsii `.scss` tiedostosta kommentit ja tuottaa niistä tyylioppaan hakemistoon `/styleguide`.  

### Bootlint

* Bootlint `grunt bootlint`

Bootlint verifioi että html-markup on Bootstrapin hyvien konventioiden mukaista ja ilmoittaa virheistä jos sellaisia löytyy.
