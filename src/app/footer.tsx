export default function Footer() {
    return(
        <footer className="border-grid py-6 md:py-0 text-left">
        <div className="container-wrapper grid grid-cols-3 gap-4">
            <div className="container py-4 text-left">
                <p>Institucional</p>
                <div className="text-balance text-sm leading-loose text-muted-foreground">
                    <p>Quem Somos</p>
                    <p>Assistência Técnica</p>
                </div>
            </div>
            <div className="container py-4 text-left">
                <p>Indústrias Thiele</p>
                <div className="text-balance text-sm leading-loose text-muted-foreground">
                    <p>
                        Estr. Estadual Boituva - Tatuí,<br/>
                        (SP-129), 6118 - AP, <br/>
                        Boituva - SP,<br/>
                        18550-000 <br/>
                        Horário de Atendimento: das 8h às 18h
                    </p>
                </div>
            </div>
            <div className="container py-4 text-left">
                <p>Central de Atendimento</p>
                    
                <div className="text-balance text-sm leading-loose text-muted-foreground">
                    <p>
                        Televendas <br/>
                        <strong>(11)93011-1440</strong><br/>
                        E-mail:
                        comercial@thiele.com.br
                    </p>
                </div>
            </div>
        </div>
      </footer>
    )
}
