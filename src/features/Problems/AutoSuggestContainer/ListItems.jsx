export const ListItems = ({ items }) => {
  return (
    <div className="bg-white">
      {items?.products && items.products.length ? (
        <ul className="hover">
          {items.products.map((item, idx) => (
            <li className="hover:bg-slate-100" key={idx}>
              {item.title}{" "}
            </li>
          ))}
        </ul>
      ) : (
        <div> No Items found </div>
      )}
    </div>
  );
};
