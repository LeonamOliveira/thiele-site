import { Button } from "@/components/ui/button";

export default function Machines() {
    return(
        <>
            <div className="w-full h-[100px] bg-blue-900 px-4 md:px-8 mt-[-40px]">
                <p className="font-inter font-bold text-2xl md:text-4xl leading-tight text-white text-center py-6 md:py-10"> 
                    CHAMADA PARA COMPRA
                </p>
            </div>
            <div className="container flex flex-col md:flex-row items-center justify-between py-4">
                <div className="text-left w-full md:w-auto">
                    <p>Conheça as Lavadoras Thiele</p>
                    <h6>Chegaram as novas lavadoras a bateria de lítio!</h6>
                    <h6>Tecnologia moderna, sem cabos ou combustão, para limpeza eficiente e sustentável.</h6>
                    <h6>Mais autonomia, praticidade e potência no seu trabalho.</h6>
                </div>
                <div className="text-right w-full md:w-auto">
                    <p>Oi</p>
                </div>
            </div>
            <div className="w-full h-[100px] bg-blue-900 px-4 md:px-8 mt-[-40px]">
                <div>
                    <h6 className="font-inter font-bold text-2xl md:text-2xl leading-tight text-white text-left py-2 md:py-2"> 
                        Alta Autonomia
                    </h6>
                </div>
                <div>
                    <h6 className="font-inter font-bold text-2xl md:text-2xl leading-tight text-white text-center py-2 md:py-2"> 
                        Carregador Compacto 
                    </h6>
                </div>
                <div>
                    <h6 className="font-inter font-bold text-2xl md:text-2xl leading-tight text-white text-center py-2 md:py-2"> 
                        Baterias Livre de Manutenção
                    </h6>
                </div>
                <div>
                    <h6 className="font-inter font-bold text-2xl md:text-2xl leading-tight text-white text-right py-2 md:py-2"> 
                        Maior Durabilidade
                    </h6>
                </div>
            </div>
            <div className="w-full h-[300px] bg-blue-900 px-4 md:px-8 mt-[-40px]">
                <p className="font-inter font-bold text-2xl md:text-4xl leading-tight text-white text-center py-6 md:py-10"> 
                    Informações
                </p>
                <p>
                    Vivamus augue enim, laoreet fermentum interdum in, ornare quis mauris. Vestibulum vel urna quis ex lobortis venenatis quis et sem. Proin vel turpis vitae mauris lacinia egestas id nec erat. Etiam bibendum, magna sit amet imperdiet sodales, mi nisl pretium purus, et malesuada ex tellus id ipsum. Sed sed ante ipsum. In sollicitudin leo dolor, ac imperdiet lacus condimentum sed. Vivamus tincidunt mi et blandit feugiat. Aliquam accumsan fringilla nisl fringilla malesuada. Mauris porta, risus eu rutrum pharetra, dolor lectus gravida augue, in commodo massa tortor id ipsum. Mauris enim diam, tincidunt ac pharetra at, scelerisque eget dolor. In hac habitasse platea dictumst. Aliquam feugiat condimentum interdum. Morbi sit amet orci ut magna fringilla luctus id eu augue. Nulla gravida commodo libero faucibus auctor. Morbi leo mauris, tempus sed nulla at, malesuada venenatis ex. Maecenas pulvinar, ex a aliquam venenatis, tortor sapien malesuada est, ut suscipit sapien velit sit amet ante.
                </p>
                <Button variant={"secondary"}>
                    Solicite um orçamento
                </Button>
            </div>
        </>
    )
}