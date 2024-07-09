import { CircleCheck } from "lucide-react";

export function Activities (){
    return (
        <div className="space-y-8">
        <div className="space-y-2.5 ">
            <div className="flex gap-2 items-baseline">
                <span className="font-semibold text-xl text-zinc-300">Dia 17</span>
                <span className="text-xs text-zinc-500">Sábado</span>
            </div>
            <p className="text-sm text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
        </div>
        <div className="space-y-2.5 ">
            <div className="flex gap-2 items-baseline">
                <span className="font-semibold text-xl text-zinc-300">Dia 18</span>
                <span className="text-xs text-zinc-500">Domingo</span>
            </div>
            <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">Academia em Grupo</span>
                    <span className="text-sm text-zinc-400 ml-auto">08:00h</span>
                </div>
            </div>

            <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">Academia em Grupo</span>
                    <span className="text-sm text-zinc-400 ml-auto">08:00h</span>
                </div>
            </div>
            
        </div>    

        </div>
    )
}