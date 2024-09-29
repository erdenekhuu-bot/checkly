export const Header = function () {
  return (
    <header className="fixed w-full z-10 p-4 flex justify-between bg-white">
      <div>
        <b className="text-[#14ba1b] text-[30px]">checkly</b>
      </div>
      <div className="flex items-center">
        <div className="w-[120px] text-center py-2 mx-2 cursor-pointer">
          <span>Нүүр хуудас</span>
        </div>
        <div className="w-[120px] text-center py-2 mx-2 cursor-pointer">
          <span>Бидний тухай</span>
        </div>
        <button
          className="bg-[#33a652] rounded-lg p-2 cursor-pointer"
          onClick={() => {
            alert(123);
          }}
        >
          <span className="text-white">
            <b>Байгууллага</b>
          </span>
        </button>
      </div>
    </header>
  );
};
