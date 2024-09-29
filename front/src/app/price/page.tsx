const Price = function () {
  return (
    <div>
      <section className="h-[1000px] bg-[url('images/engine.jpg')] flex justify-center items-center z-0 relative bg-cover">
        <div className="absolute inset-0 bg-white opacity-70"></div>
        <div className="flex justify-center items-center z-10">
          <section className="h-[75%]">
            <div className="p-4">
              <b className="text-[24px]">
                Та машиныхаа шаардлагатай мэдээллийг оруулна уу.
              </b>
            </div>

            <section>
              <div className="flex">
                <b>Та өөрийн машины үйлдвэрлэгчийг оруулна уу.</b>
                <div className="px-2 text-[red]">
                  <b>*</b>
                </div>
              </div>
            </section>

            <section>
              <div className="flex">
                <b>Та өөрийн машины маркийг оруулна уу.</b>
                <div className="px-2 text-[red]">
                  <b>*</b>
                </div>
              </div>
            </section>

            <section>
              <div className="flex">
                <b>Та өөрийн машины моторын багтаамжийг оруулна уу. (л)</b>
                <div className="px-2 text-[red]">
                  <b>*</b>
                </div>
              </div>
            </section>

            <section>
              <div className="flex">
                <b>Та өөрийн машины хропыг сонгоно уу.</b>
                <div className="px-2 text-[red]">
                  <b>*</b>
                </div>
              </div>
            </section>

            <section>
              <div className="flex">
                <b>Таны машин хэзээ үйлдвэрлэгдэн гарсан бэ?</b>
                <div className="px-2 text-[red]">
                  <b>*</b>
                </div>
              </div>
            </section>

            <section>
              <div className="flex">
                <b>Хөдөлгүүрийн төрөл</b>
                <div className="px-2 text-[red]">
                  <b>*</b>
                </div>
              </div>
            </section>

            <section>
              <div className="flex">
                <b>Машины хөтлөгч</b>
                <div className="px-2 text-[red]">
                  <b>*</b>
                </div>
              </div>
            </section>

            <section>
              <div className="flex">
                <b> Таны машин нийт хэдэн километр явсан бэ? (км)</b>
                <div className="px-2 text-[red]">
                  <b>*</b>
                </div>
              </div>
            </section>

            <button type="button" className="btn btn-primary" id="FormId">
              Тооцоолох
            </button>
          </section>
        </div>
      </section>

      <div id="popup" title="Үр дүн" className="none z-20 p-20">
        <div className="my-2">
          Таны оруулсан мэдээллийн дагуу. Машины боломжит үнэ бол
        </div>
        <div className="flex justify-evenly items-center p-1">
          <img
            src="{% static 'images/hi.jpg' %}"
            alt=""
            className="w-52 h-52"
          />
          <b className="text-4xl result"></b>
        </div>
      </div>
    </div>
  );
};

export default Price;
