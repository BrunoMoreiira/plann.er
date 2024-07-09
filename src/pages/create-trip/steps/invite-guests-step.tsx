import { UserRoundPlus, ArrowRight } from "lucide-react";
interface InviteGuestsStepProps {
    openGuestModal: () => void;
    guestEmails: string[];
    openComfirmTripModal : () => void;
}

export function InviteGuestsStep ({openGuestModal, openComfirmTripModal, guestEmails}: InviteGuestsStepProps) {
    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className="flex items-center gap-2 flex-1">
                <button type='button' onClick={openGuestModal} className='flex items-center gap-2 flex-1 text-left'>
                  <UserRoundPlus className="size-5 text-zinc-400" />
                  {guestEmails.length > 0 ? (
                    <span className='text-zinc-100 text-lg flex-1'> {guestEmails.length} pessoa(s) convidada(s)</span>
                  ) : (
                    <span className='text-zinc-400 text-lg flex-1'>Quem estará com você?</span>
                  )}
                </button>
              </div>

              <div className="w-px h-6 bg-zinc-800"></div>

              <button onClick={openComfirmTripModal} className="bg-lime-300 text-lime-950 px-5 py-2 font-medium flex items-center gap-2 rounded-md hover:bg-lime-400">
                Confirmar Viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
    )
}