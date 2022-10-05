import { mdiMenuDown, mdiMenuUp } from "@mdi/js";
import Icon from "@mdi/react";
import { HeaderGroup } from "react-table";
import { OptGridActionsHeader } from "./OptGridActionsHeader";
import * as S from "./styles";

interface Props<T extends object> {
  headerGroups: HeaderGroup<T>[];
  actionsPosition?: "start" | "end";
  headerTitlePosition?: "start" | "center" | "end";
  headerBgColor?: string;
}

export const OptGridHeaders = <T extends object>({
  headerGroups,
  actionsPosition,
  headerTitlePosition,
  headerBgColor,
}: Props<T>) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr
          {...headerGroup.getHeaderGroupProps()}
          style={{ backgroundColor: headerBgColor ? headerBgColor : "" }}
        >
          {actionsPosition === "start" && <OptGridActionsHeader />}

          {headerGroup.headers.map((column) => {
            return (
              <S.StyledTh
                {...column.getHeaderProps(column.getSortByToggleProps())}
                position={headerTitlePosition}
                customWidth={column.width}
              >
                {column.render("Header")}

                <span>
                  {
                    column.isSorted &&
                      (column.isSortedDesc
                        ? " ASC"
                        : // <Icon path={mdiMenuDown} size={1} />
                          " DESC")
                    // <Icon path={mdiMenuUp} size={1} />
                  }
                </span>
              </S.StyledTh>
            );
          })}

          {actionsPosition === "end" && <OptGridActionsHeader />}
        </tr>
      ))}
    </thead>
  );
};
