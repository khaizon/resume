import "./PanelTitle.css";

interface DividerProps {
  alignLeft: boolean;
  subtitle: string;
  title: string;
}

export default function PanelTitle({
  alignLeft,
  subtitle,
  title,
}: DividerProps) {
  const moveLeft = {
    marginRight: alignLeft ? "0px" : "5px",
  };
  return (
    <div>
      <div
        className="panel-title-block"
        style={{
          alignItems: alignLeft ? "flex-start" : "flex-end",
          textAlign: alignLeft ? "left" : "right",
        }}
      >
        <div className="panel-subtitle">{subtitle}</div>
        <div
          className="panel-title"
          style={{ marginRight: alignLeft ? "0px" : "-7px" }}
        >
          {title}
        </div>
      </div>
      <div
        className="divider"
        style={{
          alignItems: alignLeft ? "flex-start" : "flex-end",
        }}
      >
        <div className="divider-line" style={moveLeft}></div>
        <div className="divider-block" style={moveLeft}></div>
      </div>
    </div>
  );
}
