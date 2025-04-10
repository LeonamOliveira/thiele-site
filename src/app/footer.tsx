import { Mail, MapPin, Phone } from "lucide-react";
export default function Footer() {
  return (
    <section className="py-2" style={{color: '#2B418D', backgroundColor: '#D9D9D9'}}>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          {/* <span className="text-sm font-semibold"> Indústrias Thiele</span> */}
          <h1 className="mt-1 mb-3 text-3xl font-semibold text-balance md:text-4xl">
          <br />
          Central de Atendimento
          </h1>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Nosso E-mail</p>
            <a href="#" className="font-semibold hover:underline">
              comercial@thiele.com.br
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Nossa Localização</p>
            <a href="#" className="font-semibold hover:underline">
              Rod. SP129 s/n, km 18.5 <br />
              Bairro Retiro, Boituva SP <br />
              CEP 18559-899
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold"> Nosso Contato</p>
            <a href="#" className="font-semibold hover:underline">
              Suporte (11) 93011-1440 <br />
              Administração (11) 2897-7002 <br />
              Ramal 201 - Manutenção < br/>
              Ramal 202 - Comercial <br />
              Ramal 203 - Financeiro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
  // return (
  //   <footer
  //     className="w-full bg-[#2B418D] text-white py-8 px-4 md:px-16"
  //     style={{ backgroundColor: "#2B418D" }}
  //   >
  //     <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
  //       <div className="flex flex-col items-start text-sm">
  //         <p className="font-bold text-lg mb-2">Central de Atendimento</p>
  //         <div className="text-white">
  //           <p>Televendas</p>
  //           <p className="font-bold text-lg">(11) 93011-1440</p>
  //           <p>E-mail:</p>
  //           <p className="font-bold">comercial@thiele.com.br</p>
  //         </div>
  //       </div>
  //       <div className="flex flex-col items-start text-sm">
  //         <p className="font-bold text-lg mb-2">Indústrias Thiele</p>
  //         <div className="text-white">
  //           <p>
  //             Estr. Estadual Boituva - Tatuí, <br />
  //             (SP-129), <br />
  //             6118-AP, <br />
  //             Boituva-SP, <br />
  //             18550-000
  //           </p>
  //           <p>Horário de Atendimento: das 8h às 18h</p>
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // );
}
