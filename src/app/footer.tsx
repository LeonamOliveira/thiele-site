export default function Footer() {
  return (
    <footer
      className="w-full bg-[#2B418D] text-white py-8 px-4 md:px-16"
      style={{ backgroundColor: "#2B418D" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-start text-sm">
          <p className="font-bold text-lg mb-2">Central de Atendimento</p>
          <div className="text-white">
            <p>Televendas</p>
            <p className="font-bold text-lg">(11) 9xxxx-1xxx</p>
            <p>E-mail:</p>
            <p className="font-bold">xxxxx@xxxx.com.br</p>
          </div>
        </div>
        <div className="flex flex-col items-start text-sm">
          <p className="font-bold text-lg mb-2">Indústrias Thiele</p>
          <div className="text-white">
            <p>Estr. xxxl xxxx - Tatuí, (SP-129), xxx-AP, xxx-SP, 1xxxx-000</p>
            <p>Horário de Atendimento: das 8h às 18h</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
