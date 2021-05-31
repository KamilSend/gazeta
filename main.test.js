const main = require('./main.js');

describe('testObject test', () => {

    let element;
    let span;
    let btn;

    beforeEach(() => {
        main.init();
        element = main.createHTML('KAMIL_SENDECKI');
        span = element.querySelector('span');
        btn = element.querySelector('button');
    });

    test('createHTML() return proper HTML structure', () => {
        expect(element.tagName).toEqual('DIV')
        expect(element.innerHTML).toContain('span')
        expect(element.innerHTML).toContain('button')
        // sprawdź czy funkcja createHTML() zwraca element DIV
        // i czy zawiera on elementy SPAN i BUTTON
    });

    test('DIV element has set proper class', () => {
        expect(element.classList).toContain('userTest')
        // sprawdź czy element DIV ma ustawioną klasę 'userTest'
    });

    test('SPAN element has set proper text', () => {
        expect(element.children[0].innerText).toEqual('Użytkownik: KAMIL_SENDECKI')
        // sprawdź czy element SPAN zawiera tekst
        // `Użytkownik: YOUR_NAME` - gdzie YOUR_NAME to Twoje imię i nazwisko
    });

    test('BUTTON click working properly', () => {
        element.children[1].click();
        expect(element.classList).toContain('clicked')
        // sprawdź czy po kliknięciu w BUTTON
        // ustawiana jest klasa 'clicked' na elemencie DIV
    });

    test('api() returns expected data', () => {
        return main.api().then(response => {
            expect(response).toEqual({"status": 200}
            );
        });
        // DLA CHĘTNYCH
        // Sprawdź czy funkcja api() zwraca oczekiwane dane: {status: 200}
        // Możesz włączyć test, zmieniając słowo 'xtest' na 'test'
    });
});