import { Link } from 'react-router-dom';

const Header = ({ totalPrice, cartItemsCount }) => {
  return (
    <header className="flex justify-between items-center p-4 border-b-2 border-orange-500">
      <Link to="/">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-orange-500">React Pizza</h1>
          <p className="text-sm text-gray-600 mt-1">лучшая пицца в вашем селе</p>
        </div>
      </Link>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold text-gray-800">{totalPrice} ₴</span>
          <span className="text-sm text-gray-600">{cartItemsCount} шт.</span>
        </div>
        <Link
          to="/cart"
          className="flex items-center gap-2 bg-white border-2 border-orange-500 text-orange-500 px-5 py-2 rounded-full font-semibold hover:bg-orange-50 transition-colors">
          <span className="text-lg">🛒3</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
