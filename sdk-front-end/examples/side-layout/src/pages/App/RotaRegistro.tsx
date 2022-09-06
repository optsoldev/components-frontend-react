import { useBreadcrumb } from "@optsol/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function getRegistroMock(id: string) {
  return id === "1" ? "João da Silva" : "Maria Andrade";
}

function getItemMock(id: string) {
  return id === "1" ? "Borracha" : "Papel";
}

export const RotaRegistro = () => {
  const param = useParams<{ id: string; itemId: string }>();
  const { setDictionary } = useBreadcrumb();

  useEffect(() => {
    // depois de carregar o registro, o valor pode ser setado!
    const { id, itemId } = param;

    const registro = getRegistroMock(id ?? "");
    const item = getItemMock(itemId ?? "");

    // aqui foi removida a referencia de item, logo, ele não será exibido no breadcrumb!
    // quando o dicionário tiver valores iguais, o breadcrumb irá pegar na ordem dos parametros
    // é o caso de id e itemId serem 1 em alguma das rotas! primeiro pegará o registro e depois o item!
    setDictionary(
      [id ?? "", registro],
      [itemId ?? "", item],
      ["item", null],
      ["editar", "Edição"]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return (
    <div>
      <h3>Esta é a rota do registro {param.id}</h3>
      <p>Observe a composição das rotas e os links ativos.</p>
    </div>
  );
};
