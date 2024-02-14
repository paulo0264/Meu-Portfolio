import { CopyIcon } from '../icons/CopyIcon';

interface CopyButtonProps {
  textToCopy: string;
}

export const CopyButton = () => {
  

  return (
    <button className="inline-flex justify-center items-center">
      <CopyIcon title="Clique aqui para copiar" className="fill-white" />
    </button>
  );
};