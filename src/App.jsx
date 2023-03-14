import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pets from "./pets";
import SinglePet from "./singlePet";

// core features of react-query
// -query: getting data from somewhere
// -mutation: updating the data

function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>Sanity frontend project</h1>
                <Routes>
                    <Route path='/' element={<Pets />} />
                    <Route path='pet' element={<SinglePet />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
