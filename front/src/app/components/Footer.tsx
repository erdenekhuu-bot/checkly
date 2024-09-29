export const Footer = function () {
  return (
    <footer className="h-[300px] px-24">
      <div className="my-8">
        <b className="text-[#14ba1b] text-[30px]">checkly</b>
      </div>
      <div className="flex justify-between">
        <div className="w-[30%]">
          <div className="my-2">
            Авто машины боломжит үнийг <br />
            CHECKLY Бид таны машины ханшийг <br />
            мэдэхэд туслах болно
          </div>
        </div>
        <div className="w-[10%]">
          <b>Checkly</b> <br />
          <div className="my-2">
            <span>Нүүр хуудас</span>
            <span>Бидний тухай</span>
          </div>
        </div>
        <div className="w-[10%]">
          <b>Эрх зүй</b>
          <div className="my-2">
            <span>Үйлчилгээний бодлого</span>
          </div>
        </div>
        <div className="w-[25%]">
          <b>Холбоо барих</b> <br />
          <div className="my-2">
            <span>info@checkly.mn</span>
            <span>
              Улаанбаатар, Баянгол, 16-р хороо, Амарсанаа гудамж 207 тоот,
              <br />
              Колорадо бизнес төв
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
