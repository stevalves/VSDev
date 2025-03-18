import { IconBuildingStore, IconSearch, IconHeart, IconShoppingCart } from "@tabler/icons-react";

const Header = () => {
  return (
    <div id="header" className="w-full h-36 bg-gray-100">
      <div className="container mx-auto px-12 flex justify-between items-center h-full">
        <h1 className="flex items-center text-contrast">
          <IconBuildingStore className="w-10 h-10 mr-2" />{" "}
          <span className="font-logo-1 font-bold text-3xl">Loja</span>{" "}
          <span className="font-logo-2 text-2xl font-medium">Exemplo</span>
        </h1>
        <div
          id="seach-input"
          className="text-contrast flex justify-center items-center border border-contrast/25 rounded-lg"
        >
          <button className="cursor-pointer w-full h-full p-2">
            <IconSearch />
          </button>
          <input
            type="text"
            className="grow p-2 outline-none text-lg placeholder:font-light"
            placeholder="Camisa Esportiva"
          />
        </div>
        <div id="header-buttons" className="flex gap-2 text-contrast">
          <a href="#">
            <IconHeart className="w-8 h-8" />
          </a>
          <a href="#">
            <IconShoppingCart className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header