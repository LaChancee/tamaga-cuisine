import { useState } from "react";
import reactLogo from "./assets/react.svg";

function Cartes() {
  const [count, setCount] = useState(0);
  const cartes = [
    {
      nom: "Samoussas",
      image: "",
      prix: "0.80 € /pièces",
      versions: ["viande haché", "Fromage", "Poisson"],
      description: "Amuse bouche malgache",
      category: "Amuse Bouche",
    },
    {
      nom: "Nems de poulet",
      image: "",
      prix: "0.80€ /pièces",
      // versions: [],
      description: "Nems de poulet",
      category: "Amuse bouche",
    },
    {
      nom: "Brochette",
      image: "",
      prix: "0.50€ /pièces",
      versions: ["Brochette de boeuf", "Brochette de poulet"],
      description: "Brochette de boeuf et poulet ",
      category: "Amuse bouche",
    },
    {
      nom: "Pako Pako",
      image: "",
      prix: "1€ /pièces",
      // versions: [],
      description: "Galette avec sauce viande haché",
      category: "Amuse bouche",
    },
    {
      nom: "Bouchons",
      image: "",
      prix: "0.70€ /pièces",
      // versions: [],
      description: "Bouchons de volaille",
      category: "Amuse bouche",
    },
    {
      nom: "Catless",
      image: "",
      prix: "0.80€ /pièces",
      // versions: [],
      description: "Boulette de viande haché assaisonée",
      category: "Amuse bouche",
    },
    {
      nom: "Beignets de crevette",
      image: "",
      prix: "0.80€ /pièces",
      // versions: [],
      description: "Crevette dans de la panure",
      category: "Amuse bouche",
    },
    {
      nom: "Acras de poisson",
      image: "",
      prix: "0.50€ /pièces",
      // versions: [],
      description: "Acras de poissons",
      category: "Amuse bouche",
    },
    {
      nom: "Achard de légume",
      image: "",
      prix: "5€ /portion",
      // versions: [],
      description: "Salade de légume, 150g portions ",
      category: "Salade",
    },
    {
      nom: "Hors d'oeuvre",
      image: "",
      prix: "5€ /portion",

      description: "Salade de betraves, oeuf et pomme de terre, 150g portions ",
      category: "Salade",
    },
    {
      nom: "Hors d'oeuvre",
      image: "",
      prix: "5€ /portion",

      description: "Salade de betraves, oeuf et pomme de terre, 150g portions ",
      category: "Salade",
    },
    {
      nom: "Mine sao",
      image: "",
      prix: "9€ /portion",

      description:
        "Plat de pâtes, façon Tamaga Cuisine comportent un mix entre viande de boeuf, omelette, légume. Portions 200g  ",
      category: "Plats",
    },
    {
      nom: "Canard Laqué",
      image: "",
      prix: "10€ /portion",
      versions: ["riz cantonais", "riz blanc"],
      description:
        "Portions de canards laqué façon Tamaga cuisine, avec du riz blanc ou riz cantonais ",
      category: "Plats",
    },
    {
      nom: "Riz cantonais",
      image: "",
      prix: "7.50€ /portion",

      description: "Riz cantonais",
      category: "Plats",
    },
    {
      nom: "Poulet au coco",
      image: "",
      prix: "9€ /portion",
      description: "Riz blanc avec du poulet au coco",
      category: "Plats",
    },
    {
      nom: "Poulet au curry",
      image: "",
      prix: "9€ /portion",

      description:
        "Riz blanc avec son poulet sauce curry, façon Tamaga Cuisine",
      category: "Plats",
    },
  ];

  return (
    <main>
      {/* <ul>
        {cartes.map((cat) => (
          <li key={cat.nom}>{cat.category}</li>
        ))}
      </ul> */}

      <ul className="grid lg:grid-cols-3 sm:grid-cols-1 place-content-center  gap-3">
        {cartes.map((plat) => (
          <li key={plat.nom}>
            <div className="card card-side bg-base-100 max-w-lg h-full  shadow-xl m-6">
              <figure>
                <img src="https://placeimg.com/200/280/arch" alt="Nourriturre" />
              </figure>
              <div className="card-body">
                <div className="card-title grid-rows-1 ">
                  <h2 className="row-start">{plat.nom}</h2>
                  <h2 className="row-end font-bold text-secondary">
                    {plat.prix}
                  </h2>
                </div>
                <p className="font-light"> {plat.category} </p>
                <p> {plat.description} </p>

                {plat.versions ? (
                  <div className="py-1">
                    <select className="select select-bordered w-full max-w-xs">
                      <option selected>{plat.versions[0]}</option>

                      <option>{plat.versions[1]}</option>
                      {plat.versions[2] ? (
                        <option>{plat.versions[2]}</option>
                      ) : null}
                    </select>
                  </div>
                ) : null}

                <div className="card-actions justify-end">
                  <button className="btn btn-primary gap-2">
                    Ajouter
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Cartes;
