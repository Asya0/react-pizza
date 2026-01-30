import React, { useState } from 'react';

const PizzaCard = ({ pizza, onAddToCart, cartItem, onClickAdd }) => {
  const [selectedSize, setSelectedSize] = useState('26');
  const typesNames = ['тонкое', 'традиционное'];
  const [activeType, setActiveType] = useState(0);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  const handleTypeClick = (typeId) => {
    setActiveType(typeId);
  };

  return (
    <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        {/* <img
          src={pizza.imageUrl}
          alt={pizza.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        /> */}
        <div className="w-full h-48 flex items-center justify-center text-6xl mb-4 bg-gray-100 rounded-lg">
          {pizza.imageUrl}
        </div>
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {pizza.isNew && (
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Новинка
            </span>
          )}
          {pizza.isSpicy && (
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Острая!
            </span>
          )}
        </div>

        <div className="mb-6">
          <div className="flex gap-2">
            {pizza.types.map((typeId) => (
              <span
                key={typeId}
                className={`
                  flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
                  ${
                    activeType === typeId
                      ? 'bg-orange-100 text-orange-700 border border-orange-300 '
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent'
                  }
                  `}
                onClick={() => handleTypeClick(typeId)}>
                {typesNames[typeId]}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex gap-2">
            {pizza.sizes.map((size) => (
              <button
                key={size}
                className={`
                  flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    selectedSize === size
                      ? 'bg-orange-100 text-orange-700 border border-orange-300'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent'
                  }
                `}
                onClick={() => handleSizeClick(size)}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{size} см. </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{pizza.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{pizza.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-800">{pizza.price} ₴</span>
          <button
            className="flex items-center gap-2 bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            onClick={() => {
              onClickAdd();
              onAddToCart(pizza);
            }}>
            <span>+</span>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
