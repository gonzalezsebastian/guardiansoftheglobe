// import { useContext, useEffect, useState } from "react";
import MyContext from "./others/DataContext";
import Home from "./pages/Home";
import Heroe from "./pages/Heroe";
import Villain from "./pages/Villain";
import CharacterDetail from "./pages/CharacterDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const characters = [
    {
      name: "Nolan Grayson",
      rol: "Heroe",
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
        {name: "Art Rosenbaum", link: "/heroes/art-rosenbaum"},
        {name: "Cecil Stedman", link: "/heroes/cecil-stedman"},
        {name: "Guardians of the Globe", link: "/heroes"},
      ],
      enemies: [
        {name: "Guardians of the Globe", link: "/heroes"},
        {name: "Mauler Twins", link: "/villains/mauler-twins"},
        {name: "Flaxans", link: "/villains/flaxans"},
        {name: "Cecil Stedman", link: "/heroes/cecil-stedman"},
        {name: "Donald Ferguson", link: "/heroes/donald-ferguson"},
        {name: "Global Defense Agency", link: "/heroes"},
        {name: "Damien Darkblood", link: "/heroes/damien-darkblood"},
        {name: "ReAnimen", link: "/villains/reanimen"},
        {name: "Hail Mary", link: "/villains/hail-mary"},
        {name: "Invincible", link: "/heroes/invincible"},
        {name: "William Clockwell", link: "/heroes/william-clockwell"},
      ],
      picture: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2d0cffb-96b3-48e3-83bb-eb81054ac04a/dekgnrv-269124ca-6c7b-4c9f-8924-0fe7cf96d14f.png/v1/fill/w_1006,h_794/omni_man_png_by_dglproductions_dekgnrv-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAxMCIsInBhdGgiOiJcL2ZcL2MyZDBjZmZiLTk2YjMtNDhlMy04M2JiLWViODEwNTRhYzA0YVwvZGVrZ25ydi0yNjkxMjRjYS02YzdiLTRjOWYtODkyNC0wZmU3Y2Y5NmQxNGYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XBwmO1yHGl5ayKnqf_N4QGvh4q1odlXR7kMCKEoswZc",
      link: "omni-man",
    },
    {
      name: "Mark Grayson",
      rol: "Heroe",
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
        {name:"Atom Eve", link: "/heroes/atom-eve"},
        {name:"Robot", link: "/heroes/robot"},
        {name:"Rex Splode", link: "/heroes/rex-splode"},
        {name:"Dupli-Kate", link: "/heroes/dupli-kate"},
        {name:"Monster Girl", link: "/heroes/dupli-kate"},
      ],
      enemies: [
        {name: "Omni-Man", link: "/heroes/omni-man"},
        {name: "Mauler Twins", link: "/villains/mauler-twins"},
        {name: "Flaxans", link: "/villains/flaxans"},
        {name: "Angstrom Levy", link: "/villains/angstrom-levy"},
      ],
      picture: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2d0cffb-96b3-48e3-83bb-eb81054ac04a/dekf6tx-9b4ad66d-e264-4123-9a89-86af02bde8e4.png/v1/fill/w_1010,h_791/invincible_png_by_dglproductions_dekf6tx-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMyIsInBhdGgiOiJcL2ZcL2MyZDBjZmZiLTk2YjMtNDhlMy04M2JiLWViODEwNTRhYzA0YVwvZGVrZjZ0eC05YjRhZDY2ZC1lMjY0LTQxMjMtOWE4OS04NmFmMDJiZGU4ZTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xk9SEjpqmWyolsN6_h-f5IBUCGBPTYCBzArnsVeR__Y",
      link: "invincible",
    },
    {
      name: "Samantha Eve Wilkins",
      rol: "Heroe",
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
      link: "atom-eve",
    },
    {
      name: "Unknown",
      rol: "Heroe",
      alias: "The Immortal",
      gender: "Male",
      age: "Unknown",
      status: "Alive(revived)",
      location: "Earth",
      placeofbirth: "Earth",
      species: "Human",
      powers: [
        "Superhuman Strength",
        "Superhuman Speed",
        "Superhuman Stamina",
        "Superhuman Durability",
        "Flight",
        "Regenerative Healing Factor",
        "Immortality",
        "Resurrection",
        "Hand to Hand Combat",
        "Leadership",
      ],
      weaknesses: [
        "Mental Fortitude",
        "Dismemberment",
      ],
      occupation: "President of the United States",
      affiliation: [
        "Guardians of the Globe"
      ],
      allies: [
        {name: "Guardians of the Globe", link: "/heroes"},
        {name: "Cecil Stedman", link: "/heroes/cecil-stedman"},
        {name: "Donald Ferguson", link: "/heroes/donald-ferguson"},
        {name: "War Woman", link: "/heroes/war-woman"},
        {name: "Aquarus", link: "/heroes/aquarus"},
        {name: "Green Ghost", link: "/heroes/green-ghost"},
        {name: "Martian Man", link: "/heroes/martian-man"},
      ],
      enemies: [
        {name: "Omni-Man", link:"/heroes/omni-man"},
        {name: "Mauler Twins", link:"/villains/mauler-twins"},
        {name: "Bi-Plane", link: "/villains/bi-plane"},
      ],
      picture: "/inmortal.webp",
      link: "the-immortal",
    },
    {
      name: "Unknown",
      rol: "Villain",
      alias: "Mauler Twins",
      gender: "Male",
      age: "Unknown",
      status: "Alive",
      location: "Earth",
      placeofbirth: "Earth",
      species: "Unknown",
      powers: [
        "Superhuman Strength",
        "Superhuman Durability",
        "Regenerative Healing Factor",
        "Genius Level Intellect",
        "Cloning Expertise",
        "Memory Duplication",
        "Surgery",
      ],
      weaknesses: [
        "Standard Human Weaknesses",
        "Mental Instability",
      ],
      occupation: "Scientists and Supervillains",
      affiliation: [
        "Mauler Industries",
      ],
      allies: [
        {name: "Angstrom Levy", link: "/villains/angstrom-levy"},
      ],
      enemies: [
        {name: "Guardians of the Globe", link: "/heroes"},
        {name: "Omni-Man", link: "/heroes/omni-man"},
        {name: "Robot", link: "/heroes/robot"},
      ],
      picture: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5925e7dd-fbd8-4b74-a807-ca9b2f32cf80/devs53t-1d264c08-483c-4e2d-abe5-eb83e293a1b4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5MjVlN2RkLWZiZDgtNGI3NC1hODA3LWNhOWIyZjMyY2Y4MFwvZGV2czUzdC0xZDI2NGMwOC00ODNjLTRlMmQtYWJlNS1lYjgzZTI5M2ExYjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tTLRMHOUpdV5NdBL9UK_sFz611sFwuFG-w2JxObebTs",
      link: "mauler-twins",
    },
    {
      name: "",
      rol: "",
      alias: "",
      gender: "",
      age: "",
      status: "",
      location: "",
      placeofbirth: "",
      species: "",
      powers: [
      ],
      weaknesses: [""],
      occupation: "",
      affiliation: [
      ],
      allies: [
      ],
      enemies: [
      ],
      picture: "",
      link: "",
    },
    
  ];

  return (
    <MyContext.Provider value={characters}>
        <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home/>} />
              <Route path={"/heroes"} element={<Heroe/>} />
              <Route path={"/heroes/:link"} element={<CharacterDetail/>} />
              <Route path={"/villains"} element={<Villain/>} />
              <Route path={"/villains/:link"} element={<CharacterDetail/>} />
              <Route path={"*"} element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
