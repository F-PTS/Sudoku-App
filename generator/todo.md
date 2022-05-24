 1. Stwórz dwuwymiarową tablice 9x9 wypełnioną 0
 2. wypełnij ją jako poprawnie rozwiązane sudoku
 3. ukryj większość cyfr ( ma zostać NIEMNIEJ NIŻ 29 wypełnionych pól, bo planszy z jednym rozwiązaniem zajmie wieki XD )

    Jeżeli z usuniętych pól otrzymamy sudoku które można otrzymać na > 1 sposóbów, to przywracamy ostatnio usunięte pole:
    - Randomowo wybieramy inne pole
    - usuwamy nowo wybrane pole

4. powtarzamy dopóki nie usuniemy wcześniej danej ilości pól z planszy.

ZAŁOŻENIA:

1. emptyCell = {rowIndex: INT, columnIndex: INT};