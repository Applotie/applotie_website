import GridInteraction from "./GridInteraction";

export default function GlobalGrid() {
  return (
    <div aria-hidden="true" className="global-grid-layer">
      <GridInteraction />
    </div>
  );
}