const Footer = () => {
  return (
    <footer className="flex justify-center flex-col items-center align-center text-[#666] gap-2">
      <p>© {new Date().getFullYear()} React Pizza. Все права защищены.</p>
      <p> Доставка по всему селу в течение 60 минут</p>
    </footer>
  );
};

export default Footer;
