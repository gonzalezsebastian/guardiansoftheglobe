// import { useContext, useEffect, useState } from "react";
import MyContext from "./others/DataContext";
import Home from "./pages/Home";
import Heroe from "./pages/Heroe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      picture: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2d0cffb-96b3-48e3-83bb-eb81054ac04a/dekgnrv-269124ca-6c7b-4c9f-8924-0fe7cf96d14f.png/v1/fill/w_1006,h_794/omni_man_png_by_dglproductions_dekgnrv-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAxMCIsInBhdGgiOiJcL2ZcL2MyZDBjZmZiLTk2YjMtNDhlMy04M2JiLWViODEwNTRhYzA0YVwvZGVrZ25ydi0yNjkxMjRjYS02YzdiLTRjOWYtODkyNC0wZmU3Y2Y5NmQxNGYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XBwmO1yHGl5ayKnqf_N4QGvh4q1odlXR7kMCKEoswZc",
    },
    {
      name: "Mark Grayson",
      alias: "Invincible",
      gender: "Male",
      age: "17",
      status: "Alive",
      location: "Earth",
      placeofbirth: "Earth",
      species: "Human-Viltrumite hybrid",
      powers: [
        "Superhuman Strength",
        "Superhuman Speed",
        "Superhuman Stamina",
        "Superhuman Durability",
        "Flight",
        "Accelerated Healing",
        "Enhanced Senses",
        "Longevity",
        "Viltrumite Physiology",
      ],
      weaknesses: ["Standard Viltrumite Weaknesses"],
      occupation: "Superhero and Student",
      affiliation: [
        "Teen Team",
        "Guardians of the Globe",
      ],
      allies: [
        "Atom Eve",
        "Robot",
        "Rex Splode",
        "Dupli-Kate",
        "Monster Girl",
      ],
      enemies: [
        "Omni-Man",
        "Mauler Twins",
        "Flaxans",
        "Angstrom Levy",
      ],
      picture: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2d0cffb-96b3-48e3-83bb-eb81054ac04a/dekf6tx-9b4ad66d-e264-4123-9a89-86af02bde8e4.png/v1/fill/w_1010,h_791/invincible_png_by_dglproductions_dekf6tx-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMyIsInBhdGgiOiJcL2ZcL2MyZDBjZmZiLTk2YjMtNDhlMy04M2JiLWViODEwNTRhYzA0YVwvZGVrZjZ0eC05YjRhZDY2ZC1lMjY0LTQxMjMtOWE4OS04NmFmMDJiZGU4ZTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xk9SEjpqmWyolsN6_h-f5IBUCGBPTYCBzArnsVeR__Y",
    },
    {
      name: "Samantha Eve Wilkins",
      alias: "Atom Eve",
      gender: "Female",
      age: "16",
      status: "Alive",
      location: "Earth",
      placeofbirth: "Earth",
      species: "Human",
      powers: [
        "Matter Transmutation",
        "Flight",
        "Force Field Generation",
        "Energy Blasts",
      ],
      weaknesses: ["Physical Limitations"],
      occupation: "Superhero and Student",
      affiliation: [
        "Teen Team",
        "Guardians of the Globe",
      ],
      allies: [
        "Invincible",
        "Robot",
        "Rex Splode",
        "Dupli-Kate",
        "Monster Girl",
      ],
      enemies: [
        "Omni-Man",
        "Mauler Twins",
        "Flaxans",
        "Angstrom Levy",
      ],
      picture: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2d0cffb-96b3-48e3-83bb-eb81054ac04a/dekmzz7-b35ef99f-b620-42ff-8ea5-896ef6142fc3.png/v1/fill/w_1280,h_1213/atomic_eve_png_v1_by_dglproductions_dekmzz7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIxMyIsInBhdGgiOiJcL2ZcL2MyZDBjZmZiLTk2YjMtNDhlMy04M2JiLWViODEwNTRhYzA0YVwvZGVrbXp6Ny1iMzVlZjk5Zi1iNjIwLTQyZmYtOGVhNS04OTZlZjYxNDJmYzMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.qH3Bmw9R60PXYxnxH62dsrzaFfxpsJ9LrC-GANj7JSI",
    },
  ];

  return (
    <MyContext.Provider value={characters}>
        <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home/>} />
              <Route path={"/heroes"} element={<Heroe/>} />
              <Route path={"*"} element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
