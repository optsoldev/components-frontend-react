import { OptSideLayoutContent } from "@optsol/react";
import { useParams } from "react-router-dom";

export const AppSideRegistroItem = () => {
  const param = useParams<{ id: string }>();

  return (
    <OptSideLayoutContent>
      <h3>Este é um item do registro {param.id}</h3>
      <h3>Este é um item do registro {param.id}</h3>
      <h3>Este é um item do registro {param.id}</h3>
      <h3>Este é um item do registro {param.id}</h3>
      <h3>Este é um item do registro {param.id}</h3>
      <h3>Este é um item do registro {param.id}</h3>
      <h3>Este é um item do registro {param.id}</h3>
      <h3>Este é um item do registro {param.id}</h3>
      <h3>Este é um item do registro {param.id}</h3>
      <h3>Este é um item do registro {param.id}</h3>
    </OptSideLayoutContent>
  );
};
