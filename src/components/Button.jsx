function Button({
  children,
  type = 'button',
  variant = 'primary',
  href,
  className = '',
  onClick,
  ...rest
}) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
