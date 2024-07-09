import { useState } from 'react';
import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X } from "lucide-react";

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [guestEmails, setGuestEmails] = useState([
    'jessica.white44@yahoo.com',
    'erik_leffler3@gmail.com',
    'rebekah.conn21@gmail.com',
    'emile.mayer25@yahoo.com',
    'justus_hessel81@hotmail.com',
    'hellen_graham@yahoo.com',
    'kole.schiller27@yahoo.com'
  ]);

  function openGuestInput() {
    setIsGuestInputOpen(true);
  }

  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }

  function openGuestModal() {
    setIsGuestModalOpen(true);
  }

  function closeGuestModal() {
    setIsGuestModalOpen(false);
  }

  function removeGuest(email: string) {
    setGuestEmails(guestEmails.filter(guestEmail => guestEmail !== email));
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className='space-y-4'>
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                type="text"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            {isGuestInputOpen ? (
              <button onClick={closeGuestInput} className='bg-zinc-800 text-zinc-200 px-5 py-2 font-medium flex items-center gap-2 rounded-md hover:bg-zinc-700'>Alterar local/data <Settings2 className="size-5" /></button>
            ):(
              <button onClick={openGuestInput} className="bg-lime-300 text-lime-950 px-5 py-2 font-medium flex items-center gap-2 rounded-md hover:bg-lime-400">
              Continuar
              <ArrowRight className="size-5" />
            </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              
              <button type='button' onClick={openGuestModal} className='flex items-center gap-2 flex-1 text-left'>
              <UserRoundPlus className="size-5 text-zinc-400" />
              <span>Quem estará com você?</span>
              </button>
           
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            <button className="bg-lime-300 text-lime-950 px-5 py-2 font-medium flex items-center gap-2 rounded-md hover:bg-lime-400">
              Confirmar Viagem
              <ArrowRight className="size-5" />
            </button>
          </div>
          )}
        </div>
        
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br />
          com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade.
          </a>
        </p>
      </div>

      {isGuestModalOpen && (
          <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] max-w-full rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-lg font-semibold'>Selecionar Convidados</h2>
                  <button onClick={closeGuestModal}>
                      <X className='size-5 text-zinc-400' />
                  </button>
                </div>
                <p className='text-sm text-zinc-400'>Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
              </div>
              <div className='flex flex-wrap gap-2 max-h-[200px] overflow-auto'>
                {guestEmails.map((email) => (
                  <div key={email} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                    <span className='text-zinc-300'>{email}</span>
                    <button type='button' onClick={() => removeGuest(email)}>
                      <X className='size-4 text-zinc-400' />
                    </button>
                  </div>
                ))}
              </div>
              <div className='pt-2'>
                <input
                  type='email'
                  placeholder='Digite o e-mail do convidado'
                  className='bg-zinc-800 text-zinc-300 p-2 rounded-md w-full outline-none'
                />
                <button className='bg-lime-300 text-lime-950 mt-2 px-5 py-2 font-medium rounded-md hover:bg-lime-400'>
                  Convidar
                </button>
              </div>
            </div>
          </div>
        )}      
    </div>
  );
}

export default App;
