import { useState } from "react";
import { Button } from "../../components/button";
import { User, X } from "lucide-react";

interface CreateLinkModalProps {
  closeCreateLinkModal: () => void;
}

export function CreateLinkModal({ closeCreateLinkModal }: CreateLinkModalProps) {
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  function handleSaveLink() {
    // Aqui você pode adicionar lógica para salvar o link, como enviar para a API, etc.
    // Por simplicidade, vamos apenas fechar o modal aqui
    closeCreateLinkModal();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[480px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-lg font-semibold">Adicionar Link Importante</h2>
            <button>
              <X className="size-5 text-zinc-400" onClick={closeCreateLinkModal} />
            </button>
          </div>

          <form onSubmit={handleSaveLink} className="space-y-3">
            <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <User className="text-zinc-400 size-5" />
              <input
                type="text"
                name="linkName"
                placeholder="Nome do Link"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                value={linkName}
                onChange={(e) => setLinkName(e.target.value)}
              />
            </div>

            <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <User className="text-zinc-400 size-5" />
              <input
                type="url"
                name="linkUrl"
                placeholder="URL do Link"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
              />
            </div>

            <Button type="submit" size="full">
              Salvar Link
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
