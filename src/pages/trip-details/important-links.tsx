import { Link2, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/button";
import { CreateLinkModal } from "./create-link-modal";

export function ImportantLinks() {
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);

  function openCreateLinkModal() {
    setIsCreateLinkModalOpen(true);
  }

  function closeCreateLinkModal() {
    setIsCreateLinkModalOpen(false);
  }

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        {/* Aqui você pode mapear uma lista de links */}
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/10470001139028321098312093821903812038910
            </a>
          </div>

          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        {/* Botão para adicionar novo link */}
        <div className="flex items-center justify-between gap-4">
          <Button
            onClick={openCreateLinkModal}
            variant="secondary"
            size="full"
          >
            <Plus className="size-5" />
            Cadastrar novo link
          </Button>
        </div>
      </div>

      {/* Modal para criar novo link */}
      {isCreateLinkModalOpen && (
        <CreateLinkModal
          closeCreateLinkModal={closeCreateLinkModal}
        />
      )}
    </div>
  );
}
