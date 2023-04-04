import React from 'react';
import styles, { layout } from '../style';
import OrderNow from "./OrderNow";
import { cards } from '../assets';

const Checkout = () => (
    <>
        <section id="contact" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
                <img src={cards} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

                {/* gradient start */}
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                {/* gradient end */}
            </div>
            <div className={layout.sectionInfo}>
			<form action="" class="space-y-4 mt-5">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                <label class="sr-only" for="name">Nom complet</label>
                <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Nom complet *"
                type="text"
                id="name"
                />
            </div>

            <div>
                <label class="sr-only" for="name">Entreprise ou métier</label>
                <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Entreprise ou métier *"
                type="text"
                id="name"
                />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Adresse mail *"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Numéro de téléphone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Numéro de téléphone *"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                <label class="sr-only" for="name">Adresse</label>
                <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Adresse *"
                type="text"
                id="name"
                />
            </div>

            <div>
                <label class="sr-only" for="name">Ville</label>
                <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Ville *"
                type="text"
                id="name"
                />
            </div>
          </div>

          <div>
            <label class="sr-only" for="qte">Quantité</label>
            <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Quantité *"
                type="number"
                id="qte"
                />
          </div>
          <OrderNow />
        </form>
            
            </div>
           
        </section>
    </>
)

export default Checkout;
