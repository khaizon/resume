import "./divider.css";

interface DividerProps {
  alignLeft: boolean;
}

export default function Divider({ alignLeft }: DividerProps) {
  return (
    <div
      className="divider"
      style={{
        alignItems: alignLeft ? "flex-start" : "flex-end",
      }}
    >
      <div className="divider-line"></div>
      <div className="divider-block"></div>
    </div>
  );
}
