//importy używane przy wczytywaniu danych z pliku
import * as fs from 'fs';
import * as path from 'path';
//deklaracje zmiennych
let data: number[] = [];
let file: string;
let fileTmp: string[] = [];
let tmp: number;
let length: number;
//wczytanie danych z pliku jako string
file = fs.readFileSync(path.join('input.txt'), 'utf8');
//rozbicie łańcucha na znaki typu string 
fileTmp = file.split(' ');
//rzutowanie znaków na number
fileTmp.forEach((element: string) => {
    data.push(Number(element));
})
// złapanie długości tablicy danych
length = data.length;
//Wyświetlenie wczytanych danych wejściowych
console.log(`Dane wejściowe: ${data}`);
//Pętla wkonująca n-1 przejść (n to długość tablicy) i znajdująca max w każdej iteracji
for (let i: number = length; i > 1; i--) {
    //Pętla po nieposortowanych elementach tablicy
    for (let j: number = 0; j < length - 1; j++) {
        //Warunek porównujący sąsiednie wartości
        if (data[j] > data[j + 1]) {
            //Zamiana wartości miejscami w tablicy
            tmp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = tmp;
        }
    }
}
//Wyświetlenie posortowanej tablicy
console.log(`Dane wyjściowe: ${data}`);
