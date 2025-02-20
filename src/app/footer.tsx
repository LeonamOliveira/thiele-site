export default function Footer() {
    return(
        <footer className="border-grid py-8 md:py-0 text-left text-white w-full" style={{backgroundColor: '#2B418D'}}>
        <div className="container-wrapper grid grid-cols-3 gap-4">
            <div className="container py-4 text-left">
                <p><strong>Central de Atendimento</strong></p>
                <div className="text-balance text-sm leading-loose">
                    <p>
                        Televendas <br/>
                        <strong>(11)93011-1440</strong><br/>
                        E-mail:
                        comercial@thiele.com.br
                    </p>
                </div>
            </div>
            <div className="container py-4 text-left">
                <p className="text-bold"><strong>Indústrias Thiele</strong></p>
                <div className="text-balance text-sm leading-loose text-white">
                    <p>
                        Estr. Estadual Boituva - Tatuí,<br/>
                        (SP-129), 6118 - AP, <br/>
                        Boituva - SP,<br/>
                        18550-000 <br/>
                        Horário de Atendimento: das 8h às 18h
                    </p>
                </div>
            </div>
        </div>
      </footer>
    )
}
