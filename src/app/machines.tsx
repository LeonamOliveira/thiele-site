import React, { ReactNode, CSSProperties } from 'react';

const textStyles: CSSProperties = {
  color: 'var(--text-color, #FFFFFF)',
  fontFamily: 'var(--font-family, Inter)',
  fontWeight: 'var(--font-weight, 450)',
  fontSize: 'var(--font-size, 26px)',
  lineHeight: 'var(--line-height, 40px)',
  textAlign: 'center',
};

const MachineInfo = ({ children }: { children: ReactNode }) => (
  <div className="w-full md:w-auto">
    <p className="whitespace-nowrap md:whitespace-normal" style={textStyles}>
      <strong>{children}</strong>
    </p>
  </div>
);

const Machines = () => {
  return (
    <div className="bg-[#2B418D] w-full py-2">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <MachineInfo>Entrega em todo o território nacional</MachineInfo>
        <MachineInfo>Central de Atendimento 24 horas</MachineInfo>
        <MachineInfo>Suporte especializado no território nacional</MachineInfo>
      </div>
    </div>
  );
};

export default Machines;