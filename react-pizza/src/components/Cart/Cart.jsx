const Cart = ({ cart, onRemoveFromCart, onUpdateQuantity, totalPrice, onOrder }) => {
  if (cart.length === 0) return null;

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Ваш заказ</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={() => onRemoveFromCart(item.id)}
            onUpdate={(delta) => onUpdateQuantity(item.id, delta)}
          />
        ))}

        <div className="flex justify-between items-center pt-6 mt-6 border-t border-gray-200">
          <span className="text-xl font-semibold text-gray-800">Итого:</span>
          <span className="text-3xl font-bold text-orange-500">{totalPrice} ₴</span>
        </div>

        <button
          className="
            w-full mt-6
            bg-gradient-to-r from-orange-500 to-red-500
            hover:from-orange-600 hover:to-red-600
            text-white font-bold py-4 px-6 rounded-xl
            text-lg transition-all duration-200
            hover:shadow-lg hover:scale-[1.02]
            active:scale-[0.98]
            disabled:opacity-50 disabled:cursor-not-allowed
          "
          onClick={onOrder}>
          Оформить заказ
        </button>
      </div>
    </section>
  );
};

const CartItem = ({ item, onRemove, onUpdate }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <div className="mb-3 sm:mb-0">
      <span className="block text-lg font-semibold text-gray-800">{item.name}</span>
      <span className="block text-sm text-gray-600 mt-1">
        {item.price} ₴ × {item.quantity}
      </span>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-3 bg-white rounded-full px-3 py-1">
        <button
          className="
            w-8 h-8 flex items-center justify-center
            rounded-full text-gray-600 hover:text-orange-500
            hover:bg-orange-50 transition-colors
            text-lg font-bold
          "
          onClick={() => onUpdate(-1)}>
          -
        </button>
        <span className="text-lg font-semibold text-gray-800 min-w-[24px] text-center">
          {item.quantity}
        </span>
        <button
          className="
            w-8 h-8 flex items-center justify-center
            rounded-full text-gray-600 hover:text-orange-500
            hover:bg-orange-50 transition-colors
            text-lg font-bold
          "
          onClick={() => onUpdate(1)}>
          +
        </button>
      </div>

      <span className="text-xl font-bold text-gray-800 min-w-[80px] text-right">
        {item.price * item.quantity} ₴
      </span>

      <button
        className="
          w-10 h-10 flex items-center justify-center
          bg-red-100 hover:bg-red-200
          text-red-600 hover:text-red-700
          rounded-full transition-colors
          text-xl font-bold
        "
        onClick={onRemove}>
        ×
      </button>
    </div>
  </div>
);

export default Cart;
