// Maintenance page: the only page on the site until the rebuild ships.
export default function MaintenancePage() {
  return (
    <main className="wrap">
      <div className="mark" aria-hidden="true">
        <span className="sq" />
        <span className="sun" />
        <span className="pill" />
      </div>

      <p className="lbl">
        <span className="live" />
        Applotie Technologies · Patna
      </p>

      <h1>
        We&apos;re down for <span className="hl">maintenance.</span>
      </h1>

      <p className="lead">
        We&apos;re giving our website a fresh coat of paint. It&apos;ll be back shortly. Need us in the meantime? We&apos;re
        still here.
      </p>

      <div className="actions">
        <a className="btn btn-z" href="https://wa.me/917250204488">
          WhatsApp us
        </a>
        <a className="btn btn-o" href="mailto:hello@applotie.com">
          hello@applotie.com
        </a>
      </div>

      <p className="foot">
        <a href="tel:+917250204488">+91 7250 20 4488</a>
        <span>·</span>
        <span>© {new Date().getFullYear()} Applotie Technologies</span>
      </p>
    </main>
  );
}
