"use client";
import IndexLogo from "@/components/molecules/IndexLogo/IndexLogo";
import SignUpForm from "@/components/molecules/signUpForm/SignUpForm";
import SendButton from "@/components/atoms/sendButton/SendButton";

function IndexPage() {
  function saveCookie(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log("cookie salvato");
  }

  async function sendResponse(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log("cookie salvato");
  }
  return (
    <>
      <div className="flex flex-row">
        <IndexLogo />
        <SignUpForm />
      </div>
      <div className=" bg-white w-full h-1/4 flex flex-col items-center justify-center sticky bottom-0 py-4">
        <div className="w-1/2">
          <span className=" top-0 text-4xl text-center text-black font-bold  mx-auto">
            Vuoi consentire l&apos;uso dei cookie su questo browser?
          </span>
          <p>
            Usiamo cookie e tecnologie simili per fornire e migliorare i
            contenuti su Prodotti, per offrire un&apos;esperienza più sicura
            usando le informazioni che riceviamo dai cookie all&apos;interno e
            all&apos;esterno dell&apos;applicazione, nonché per fornire e
            migliorare i Prodotti per le persone che possiedono un account.
          </p>
          <ul className="list-disc list-inside">
            <li>
              Cookie essenziali: questi cookie sono necessari per usare i
              Prodotti e affinché i nostri siti funzionino come previsto.
            </li>
            <li>
              Cookie di altre aziende: usiamo questi cookie per mostrarti
              inserzioni fuori dai Prodotti e per fornirti funzioni come mappe e
              video sui Prodotti. Si tratta di cookie facoltativi.
            </li>
          </ul>
          <p>
            Sei tu a decidere i cookie facoltativi che usiamo. Scopri di più sui
            cookie e su come li usiamo, e controlla o modifica le tue preferenze
            in qualsiasi momento nella nostra Normativa sui cookie.
          </p>
          <div className="flex flex-row justify-between">
            <SendButton
              onClickFunction={saveCookie}
              buttonText={"Rifiuta cookie facoltativi"}
              stileBottone={
                " h-12 rounded-full border border-black w-2/5 bg-gray-100 text-black my-4"
              }
              key={1}
            />

            <SendButton
              onClickFunction={saveCookie}
              buttonText={"Accetta cookie facoltativi"}
              stileBottone={
                " h-12 rounded-full border border-black w-2/5 bg-green-950 text-white my-4 mx-2"
              }
              key={2}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
