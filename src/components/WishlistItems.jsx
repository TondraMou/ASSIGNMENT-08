

const WishlistItems = ({ wishlistItems, onRemove }) => {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4">Wishlist</h3>
      <div className="space-y-4">
        {wishlistItems.map((item, index) => (
          <div key={index} className="flex items-center bg-white border rounded-lg p-4 shadow-md">
            <img src={item.product_image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
            <div className="flex-1">
              <h4 className="text-lg mb-2 font-semibold">{item.product_title}</h4>
              <p className="mb-2">{item.description}</p>
              <p className="text-purple-600 mb-2 font-bold">
                Price: ${item.price ? item.price.toFixed(2) : 'N/A'}
              </p>
              <button className="text-white bg-purple-600 px-4 py-2 font-bold border rounded-lg">Add To Cart</button>
            </div>
            <button
              className="text-red-500 font-bold text-lg ml-4"
              onClick={() => onRemove(index)}>
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistItems;
