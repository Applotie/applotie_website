// Red page-load curtain (CSS animation). Lives in the root layout, so it only plays on the first load.
export default function Curtain() {
  return (
    <div className="curtain" aria-hidden="true">
      <img src="/brand/applotie-mark.svg" alt="" width="58" height="58" />
    </div>
  );
}
