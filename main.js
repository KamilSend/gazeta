var testObject = (function() {
    const _myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function init() {
        // Tu niczego nie zmieniaj
        return _changeArrayStructure(_checkArrayValues());
    }
    function createHTML(user) {
        const element = document.createElement("div");
        const span = document.createElement("span")
        const button = document.createElement("button")
        element.appendChild(span)
        element.appendChild(button)
        button.addEventListener('click', () => element.classList.add('clicked'))
        element.classList.add("userTest");
        span.innerText = `Użytkownik: ${user}`;

        return element

        // Ta funkcja bedzie zwracała dynamicznie stworzony element DIV.
        // Będzie on wewnątrz zawierał elementy SPAN oraz BUTTON.
        // Po kliknięciu w BUTTON, dla elementu DIV będzie ustawiana klasa 'clicked'.
        // Element SPAN będzie zawierał tekst `Użytkownik YOUR_NAME` - gdzie YOUR_NAME to Twoje imię i nazwisko.
        // Twoje imię i nazwisko będzie przekazywane do tej funkcji jako argument 'user'.
        // Do elementu DIV będzie dodawana klasa 'userTest'.
        // Na koniec funkcja zwróci gotową strukturę elementów HTML, opisaną w powyższych krokach.
    }
    function api() {
        // Tu niczego nie zmieniaj - funkcja będzie przydatna do testów jednostkowych
        return _simulateApiResponse().then(res => res);
    }
    async function _simulateApiResponse() {
        // Tu niczego nie zmieniaj - funkcja będzie przydatna do testów jednostkowych
        return await new Promise((resolve) => setTimeout(resolve, 100, {status: 200}));
    }
    function _checkArrayValues() {
        let newArray = _myArray.slice()
        let array = []
        newArray.forEach((number) => {
                if (number > 4) {
                    array.push(number)
                }
            })
        return array
        // Funkcja zwraca tylko te elementy tablicy _myArray, które są większe od 4.
    }
    function _changeArrayStructure(arr) {
        let newArray = arr.slice()
        let array = []
        newArray.forEach((number, index) => {
            array.push(`${index}_${number}`)
        })
        return array
        // Funkcja przyjmuje tablicę cyfr jako argument i zwraca jej zmienioną strukturę.
        // Struktura ma wyglądać następująco: { item: INDEKS_1, item: INDEKS_2, itd. }
    }
    return {
        init: init,
        createHTML: createHTML,
        api: api,
    }
}());
// kod sprawdzający wyniki zwracane przez funkcje
console.log(
    testObject.init(),
    testObject.createHTML('YOUR_NAME'),
);
testObject.api()

if (typeof exports !== 'undefined') {
    module.exports = testObject;
}