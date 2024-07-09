import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InviteGuestsModal } from './invite-guests-modal';
import { ConfirmTripModal } from './confirm-trip-modal';
import { DestinationAndDateStep } from './steps/destination-and-date-step';
import { InviteGuestsStep } from './steps/invite-guests-step';

export function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isComfirmTripModalOpen, setIsComfirmTripModalOpen] = useState(false);
  const [guestEmails, setGuestEmails] = useState([
    'jessica.white44@yahoo.com',
    'erik_leffler3@gmail.com',
    'rebekah.conn21@gmail.com',
    'emile.mayer25@yahoo.com',
    'justus_hessel81@hotmail.com',
    'hellen_graham@yahoo.com',
    'kole.schiller27@yahoo.com'
  ]);
  const [newGuestEmail, setNewGuestEmail] = useState('');

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

  function handleAddGuest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (newGuestEmail.trim() && !guestEmails.includes(newGuestEmail.trim())) {
      setGuestEmails([...guestEmails, newGuestEmail.trim()]);
      setNewGuestEmail('');
    }
  }

  function openComfirmTripModal() {
    setIsComfirmTripModalOpen(true);
  }

  function closeComfirmTripModal() {
    setIsComfirmTripModalOpen(false);
  }

  function createTrip(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate('/trips/123');
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
          <DestinationAndDateStep 
          closeGuestInput={closeGuestInput} 
          isGuestInputOpen={isGuestInputOpen} 
          openGuestInput={openGuestInput}/>

          {isGuestInputOpen && (
            <InviteGuestsStep 
            guestEmails={guestEmails} 
            openComfirmTripModal={openComfirmTripModal} 
            openGuestModal={openGuestModal} />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos<a className="text-zinc-300 underline" href="#">termos de uso </a> e<a className="text-zinc-300 underline" href="#">políticas de privacidade.</a>
        </p>
      </div>

      {isGuestModalOpen && (
        <InviteGuestsModal 
          addGuest={handleAddGuest} 
          closeGuestModal={closeGuestModal} 
          guestEmails={guestEmails} 
          removeGuest={removeGuest}
          newGuestEmail={newGuestEmail}
          setNewGuestEmail={setNewGuestEmail}
        />
      )}

      {isComfirmTripModalOpen && (
        <ConfirmTripModal 
        closeComfirmTripModal={closeComfirmTripModal} 
        closeGuestModal={closeGuestModal} 
        createTrip={createTrip}/>
      )}
    </div>
  );
}
