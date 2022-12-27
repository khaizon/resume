interface SelectableProps {
  isSelected: boolean;
  children: preact.ComponentChildren;
  onClick: (event: Event) => void;
}

export default function Selectable(props: SelectableProps) {
  return (
    <div onClick={props.onClick} style={{ color: props.isSelected ? "var(--blue)" : "white" }}>
      {props.children}
    </div>
  );
}
