const BLANK_BOARD = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

// 1. Stwórz dwuwymiarową tablice 9x9
// 2. wypełnij ją jako poprawnie rozwiązane sudoku
// 3. ukryj większość cyfr ( !!!! ma zostać NIEMNIEJ NIŻ 29 wypełnionych pól, bo planszy z jednym rozwiązaniem zajmie wieki XD )

// - Jeżeli z usuniętych pól otrzymamy sudoku które można otrzymać na > 1 sposóbów, to przywracamy ostatnio usunięte pole
// - Randomowo wybieramy inne pole
// - usuwamy to pole
// - powtarzamy dopóki nie usuniemy wcześniej danej ilości pól z planszy.

// 