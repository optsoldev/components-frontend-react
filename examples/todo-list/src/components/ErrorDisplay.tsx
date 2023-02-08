import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";

export interface ErrorDisplayProps {
  title?: string;
  message?: string;
  small?: boolean;
}

export default function ErrorDisplay(props: ErrorDisplayProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 8,
        alignItems: "center",
        color: "#274060",
      }}
    >
      <Icon size={props.small ? "24px" : "48px"} path={mdiAlert} />

      <h2>{props.title || "Erro ao renderizar componente"}</h2>

      <span style={{ fontFamily: '"Roboto Mono", monospace', fontSize: 12 }}>
        {props.message || "Erro desconhecido"}
      </span>
    </div>
  );
}
