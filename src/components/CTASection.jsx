import Button from './Button';

function CTASection({
  title = '',
  description = '',
  actionLabel = '',
  actionHref = '/contact/',
  children,
}) {
  return (
    <section className="cta-section">
      <div className="container">
        {title ? <h2 className="cta-title">{title}</h2> : null}
        {description ? <p className="cta-description">{description}</p> : null}
        {children}
        {actionLabel ? (
          <Button href={actionHref} variant="primary">
            {actionLabel}
          </Button>
        ) : null}
      </div>
    </section>
  );
}

export default CTASection;
