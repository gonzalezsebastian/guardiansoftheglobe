import { useContext, useEffect, useState } from "react";
import MyContext from "./others/DataContext";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const characters = [
    {
      name: "Nolan Grayson",
      alias: "Omni-Man",
      gender: "Male",
      age: "Unknown",
      status: "Alive",
      location: "Earth",
      placeofbirth: "Viltrum",
      species: "Human-Viltrumite hybrid",
      powers: [
        "Superhuman Strength",
        "Superhuman Speed",
        "Superhuman Stamina",
        "Superhuman Durability",
        "Superhuman Agility",
        "Flight",
        "Accelerated Healing",
        "Enhanced Senses",
        "Longevity",
        "Invulnerability",
        "Immortality",
        "Viltrumite Physiology",
        "Master Combatant",
      ],
      weaknesses: ["Standard Viltrumite Weaknesses", "Humanity"],
      occupation: "Superhero and Soldier of the Viltrum Empire",
      affiliation: [
        "Guardians of the Globe",
        "Global Defense Agency",
        "Viltrum Empire",
      ],
      allies: [
        "Art Rosenbaum",
        "Cecil Stedman",
        "Guardians of the Globe (all formerly)"
      ],
      enemies: [
            "Guardians of the Globe",
            "Mauler Twins",
            "Flaxans",
            "Cecil Stedman",
            "Donald Ferguson",
            "Global Defense Agency",
            "Damien Darkblood",
            "ReAnimen",
            "Hail Mary",
            "Invincible",
            "William Clockwell"
        ],
      picture: "https://static.wikia.nocookie.net/amazon-invincible/images/6/63/Omni-ManProfile.png",
    },
    {
        name: "",
        alias: "",
        gender: "",
        age: "",
        status: "",
        location: "",
        placeofbirth: "",
        species: "",
        powers: [],
        weaknesses: [],
        occupation: "",
        affiliation: [],
        allies: [],
        enemies: [],
        picture: ""
    },
  ];

  return (
    <MyContext.Provider value={characters}>
        <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<h1>Hello</h1>} />
            <Route path={"/otra"} element={<Home/>} />
            <Route path={"/contacto"} element={<h2>Pagina de contacto</h2>} />
            <Route path={"*"} element={<h1>404</h1>} />
        </Routes>
        </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
