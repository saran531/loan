function Breadcrumb({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li className="breadcrumb-item" key={item.path}>
            {index < items.length - 1 ? (
              <a href={item.path}>{item.label}</a>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
