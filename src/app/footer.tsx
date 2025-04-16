import { Mail, MapPin, Phone } from "lucide-react";
export default function Footer() {
  return (
    <section className="py-2" style={{color: '#2B418D', backgroundColor: '#D9D9D9'}}>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="mt-1 mb-3 text-3xl font-semibold text-balance md:text-4xl">
          <br />
          Central de Atendimento
          </h1>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" style={{color: '#B32C39'}}/>
            </span>
            <p className="mb-2 text-lg font-semibold">Nosso E-mail</p>
            <a href="#" className="font-semibold hover:underline">
              comercial@thiele.com.br
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto"  style={{color: '#B32C39'}} />
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
              <Phone className="h-6 w-auto"  style={{color: '#B32C39'}} />
            </span>
            <p className="mb-2 text-lg font-semibold"> Nosso Contato</p>
            <a href="#" className="font-semibold hover:underline">
              Suporte (11) 93011-1440
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
