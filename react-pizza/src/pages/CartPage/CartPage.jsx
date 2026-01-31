import { Link } from 'react-router-dom';

const CartPage = () => {
  const items = [];
  const totalCount = 0;
  const totalPrice = 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        {/* Заголовок корзины */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-white">
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Корзина</h2>
          </div>

          <button className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-current">
              <path
                d="M2.5 5H4.16667H17.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33337 9.16667V14.1667"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.6666 9.16667V14.1667"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium">Очистить корзину</span>
          </button>
        </div>

        {/* Пустая корзина */}
        <div className="text-center py-16">
          <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              className="text-gray-200">
              <path
                d="M33.3333 76.3333C34.0697 76.3333 34.6667 75.7364 34.6667 75C34.6667 74.2636 34.0697 73.6667 33.3333 73.6667C32.597 73.6667 32 74.2636 32 75C32 75.7364 32.597 76.3333 33.3333 76.3333Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M73.3333 76.3333C74.0697 76.3333 74.6667 75.7364 74.6667 75C74.6667 74.2636 74.0697 73.6667 73.3333 73.6667C72.597 73.6667 72 74.2636 72 75C72 75.7364 72.597 76.3333 73.3333 76.3333Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.3333 33.3333H83.3333L81.04 55.2967C80.957 55.7781 80.724 56.2243 80.3723 56.5744C80.0205 56.9245 79.5667 57.1616 79.0733 57.2533H39.1667C38.6155 57.2533 38.087 57.0542 37.6823 56.693C37.2776 56.3318 37.0249 55.8341 26.6667 8.33334H16.6667"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Корзина пуста</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Добавьте хотя бы одну пиццу, чтобы оформить заказ
          </p>
        </div>

        {/* Блок с итогами (скрыт при пустой корзине) */}
        {items.length > 0 && (
          <div className="mt-8">
            {/* Список товаров будет здесь */}
            <div className="space-y-4">
              {/* Пример товара */}
              <div className="hidden p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Название пиццы</h4>
                      <p className="text-sm text-gray-500">Тонкое тесто, 26 см.</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">450 ₽</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Итоги и кнопки */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="space-y-2">
              <p className="text-lg text-gray-900">
                Всего пицц: <span className="font-bold">{totalCount} шт.</span>
              </p>
              <p className="text-lg text-gray-900">
                Сумма заказа: <span className="font-bold text-orange-500">{totalPrice} ₽</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-orange-400 text-orange-500 font-semibold rounded-xl hover:bg-orange-50 transition-colors">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  className="text-orange-400">
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Вернуться назад</span>
              </Link>

              <button className="px-12 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <span>Оплатить сейчас</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
