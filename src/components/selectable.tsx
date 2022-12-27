import React from "react";

interface SelectableProps {
  isSelected: boolean;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function Selectable(props: SelectableProps) {
  return (
    <div onClick={props.onClick} style={{ color: props.isSelected ? "var(--blue)" : "white" }}>
      {props.children}
    </div>
  );
}
