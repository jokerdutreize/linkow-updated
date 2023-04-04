import React from 'react';
import styles, { layout } from '../style';
import SendContact from './SendContact';
import { contact } from '../assets';

const Contact = () => (
    <>
        <section id="contact" className={layout.sectionReverse}>
            <div className={layout.sectionInfo}>
            <div class="flex">
				<h1 className={styles.heading2}>Contactez-nous</h1>
			</div>
			<form action="" class="space-y-4 mt-5">
          <div>
            <label class="sr-only" for="name">Nom complet</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Nom complet"
              type="text"
              id="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Adresse mail"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Numéro de téléphone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Numéro de téléphone"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input
                class="peer sr-only"
                id="option1"
                type="radio"
                tabindex="-1"
                name="option"
              />

              <label
                for="option1"
                class="block w-full rounded-lg border border-gray-200 p-3 text-white peer-checked:border-black peer-checked:bg-white peer-checked:text-black"
                tabindex="0"
              >
                <span class="text-sm font-medium">Je suis Professionnel</span>
              </label>
            </div>

            

            <div>
              <input
                class="peer sr-only"
                id="option3"
                type="radio"
                tabindex="-1"
                name="option"
              />

              <label
                for="option3"
                class="block w-full rounded-lg border border-gray-200 p-3 text-white peer-checked:border-black peer-checked:bg-white peer-checked:text-black"
                tabindex="0"
              >
                <span class="text-sm font-medium">Je suis Particulier</span>
              </label>
            </div>

          </div>

          <div>
            <label class="sr-only" for="message">Message</label>

            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>
          <SendContact/>
        </form>
            
            </div>
            <div className={layout.sectionImgReverse}>
                <img src={contact} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

                {/* gradient start */}
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                {/* gradient end */}
            </div>
        </section>
    </>
    
);

export default Contact;