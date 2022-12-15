import { useState } from "react";
import tamaga from "./assets/Snack.svg";
import pay from "./assets/pay.svg";
import explore from "./assets/explore.svg";
import Cartes from "./components/Cartes";
import location from "./assets/loaction.svg";
import Contact from "./components/Contact";

import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="hero min-h-screen bg-slate-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={tamaga} className="lg:max-w-lg sm:max-w-md rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">
              Bienvenue sur Tamaga Cuisine !{" "}
            </h1>
            <p className="py-6">
              Vous souhaitez gouter la douceur des îles qu'est Tamaga Cuisine.
              Tout droit venu de Madagscar dans Clayes et ses alentours
            </p>
            <button className="btn btn-primary">Commander !</button>
          </div>
        </div>
      </div>
      <div id="content">
        <div className="py-5 grid justify-items-center">
          <h1 className="text-3xl font-bold">Tamaga Cuisine c'est quoi ?</h1>
        </div>
        {/* Tamaga cuisine c'est quoi */}
        <section className="grid lg:grid-cols-3 sm:grid-cols-1   justify-items-center p-2 py-5">
          <div className="grid card max-w-96 border-2 border-slate-100 m-4">
            <div className="grid place-items-center pt-6">
              <img
                src={explore}
                alt="boussole"
                className="rounded-full bg-red-100"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">Une cuisine exotique</h2>
              <p>Des plats tout droit venu de l'ocean indien, sans porc</p>
            </div>
          </div>

          <div className="grid card max-w-96 border-2 border-slate-100 m-4">
            <div className="grid place-items-center pt-6">
              <img
                src={location}
                alt="boussole"
                className="rounded-full bg-red-100"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">Une cuisine locale</h2>
              <p>Des plats concoctés à clayes, tout près de rennes</p>
            </div>
          </div>

          <div className="grid card max-w-96 border-2 border-slate-100 m-4">
            <div className="grid place-items-center pt-6">
              <img
                src={pay}
                alt="boussole"
                className="rounded-full bg-red-100"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">Des prix raisonnables</h2>
              <p>Tamaga Cuisine, offre ses plats à des prix attractifs</p>
            </div>
          </div>
        </section>
        <section className="bg-slate-100 p-2">
          <div className="py-5  grid justify-items-center">
            <h1 id="carte" className="text-3xl font-bold">
              Une carte qui vous fera découvrir de nouvelles saveurs
            </h1>
          </div>
          <div className=" p-6 ">
            <Cartes />
          </div>
        </section>
        <section id="who">
          <div className="p-5  grid justify-items-center">
            <h1 className="text-3xl py-6 font-bold">Qui sommes nous ?</h1>
            <div className="card border ">
              <div className="card-body">
                <h2 className="card-title">Tamaga Cuisine est encore dans ses début, faites nous part de vos retours</h2>
                
                <div id="contact">
                  <Contact/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
