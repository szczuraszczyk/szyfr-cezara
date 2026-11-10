import { useState } from 'react'
import './App.css'

  const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function szyfruj(znak, przesuniecie) {
    // znajduje jego pozycję w alfabecie
    const pozycja = alfabet.indexOf(znak);

    if (pozycja === -1) {
      return znak; // jeśli znak nie jest w alfabecie, zwróć go bez zmian
    }

    // dodaje przesunięcie
    // zawija wynik na początek alfabetu
    const wynik = (pozycja + przesuniecie) % alfabet.length;


    // test
    return alfabet[wynik];

  }
function App() {

  const [tekst, setTekst] = useState("HELLO");
  const [przesuniecie, setPrzesuniecie] = useState(3);

  const zaszyfrowanyTekst = tekst.split("").map((znak) => szyfruj(znak, przesuniecie)).join(""); 
  //split zamienia tekst na tablicę znaków, map przetwarza każdy znak, a join łączy je z powrotem w string

  return (
    <>

        <input type="text" placeholder="Wpisz" value={tekst} onChange={(e) => setTekst(e.target.value)}/>
        <input type="range" min="1" max="25" value={przesuniecie} onChange={(e) => setPrzesuniecie(parseInt(e.target.value))}/>

        <p>Tekst: {tekst}</p>
        <p>Zaszyfrowany tekst: {zaszyfrowanyTekst}</p>
        <p>Przesunięcie: {przesuniecie}</p>

    </>
  )
}

export default App
