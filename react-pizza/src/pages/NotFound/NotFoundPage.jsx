import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-gray-900 opacity-10">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <h1 className="text-8xl md:text-9xl font-bold text-gray-900">404</h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-pink-400/20 blur-3xl -z-10" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">Страница не найдена</h2>
        <p className="text-gray-600 mb-8">
          Запрашиваемая страница не существует или была перемещена.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="
              px-6 py-3 bg-orange-500 text-white font-medium
              rounded-lg hover:bg-orange-600 transition-colors
              shadow-md hover:shadow-lg
            ">
            На главную
          </Link>
          <button
            onClick={() => window.history.back()}
            className="
              px-6 py-3 bg-white text-gray-700 font-medium
              rounded-lg border border-gray-300
              hover:bg-gray-50 transition-colors
            ">
            Назад
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
