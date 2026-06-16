# jt_avsystem
AVSystem Recruitment Task (Cypress / TS)

# Instrukcja
1. Sklonuj projekt z reprozytorium
2. Uruchom komendę **npm run code:install**
3. Testy możesz uruchomić na dwa sposoby:
- Z widoczną przeglądarką (możliwość wyboru indywidualnych plików testowych): **npm run cypress:open**
- W trybie headless (run w konsoli): **npm run cypress:run**

# Czego nie udało mi się zrobić w czasie, a chciałem
1. Zabezpiecznie cypress.env.json (za pomocą git-crypt / nie miałem wystarczająco czasu)
2. Hierarchizacja Page Object'ów (dziedziczenie z głównego page'a)
3. Więcej test case'ów (wyszukiwanie / edycja masowa / paginacja - przygotowane są pod to funkcje w page object)
4. Implementacja tag'ów, aby móc uruchamiać subset testów zamiast wszystkich (przydatne przy większej ilości plików testowych)
5. Forma autologinu (bez konieczności powtarzania procedury logowania - nie znalazłem)
