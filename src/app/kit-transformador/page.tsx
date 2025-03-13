import Header from "../header";
import Footer from "../footer";
import Feature from "@/components/feature/feature";

export default function Home() {
  return (
    <div>
      <Header />
      <Feature
        title="Kit Bateria de Lítio"
        description={`
          Fabricadas com os mais altos padrões, nossas peças garantem a durabilidade e o funcionamento perfeito da sua máquina, evitando paradas e prolongando sua vida útil.`}
        textButton={`Solicite um Orçamento`}
        link="http://wa.me/+11930111440?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Kit%20Transformador."
      />
      <div style={{backgroundColor: '#F2F2F2'}}>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-center md:text-left">
          Autonomia Estendida para Limpeza Industrial <br/>
          A Thiele, referência em soluções de limpeza e polimento industrial, apresenta o inovador Kit de Bateria de Lítio, 
          projetado para elevar a performance de suas máquinas a um novo patamar. 
          Desenvolvido com os mais altos padrões de qualidade, nosso kit garante autonomia estendida e confiabilidade incomparável,
          otimizando suas operações e impulsionando a produtividade. 
          Liberdade Sem Fio e Eficiência Prolongada: 
          Diga adeus às limitações dos cabos e abrace a liberdade de movimento que o Kit de Bateria de Lítio Thiele proporciona. 
          Com maior capacidade de armazenamento de energia, você garante horas adicionais de operação contínua, 
          permitindo a conclusão de grandes áreas de limpeza sem interrupções.
          Desempenho Superior e Durabilidade Inigualável: Fabricadas com tecnologia de ponta, 
          as baterias de lítio Thiele oferecem desempenho superior em comparação às baterias tradicionais. 
          Sua alta densidade de energia e ciclo de vida prolongado garantem que suas máquinas operem com potência máxima por mais tempo, 
          reduzindo custos de manutenção e aumentando a vida útil do equipamento. 
          Vantagens do Kit de Bateria de Lítio Thiele:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Autonomia Estendida: Maior tempo de operação contínua para máxima produtividade. </li>
          <li>Desempenho Otimizado: Potência constante e eficiente para resultados impecáveis. </li>
          <li>Durabilidade Excepcional: Ciclo de vida prolongado para maior retorno sobre o investimento. </li>
          <li>Compatibilidade Garantida: Projetado para integração perfeita com limpadoras e polidoras Thiele. </li>
          <li>Qualidade Thiele: Fabricado com os mais altos padrões de qualidade e segurança. </li>
        </ul>
        <p>
          Maximize o Potencial das Suas Máquinas Thiele: Invista no Kit de Bateria de Lítio Thiele e experimente a diferença em autonomia, desempenho e durabilidade. 
          Eleve a eficiência da sua limpeza industrial e conquiste resultados superiores com a confiança que só a Thiele oferece. 
          Entre em contato conosco e descubra como o Kit de Bateria de Lítio Thiele pode transformar suas operações de limpeza!
        </p>
      </div>
      <Footer />
    </div>
  );
}