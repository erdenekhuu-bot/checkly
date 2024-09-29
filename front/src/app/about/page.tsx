import Image from "next/image";

const About = function () {
  return (
    <div className="w-full h-full">
      <section className="z-0 relative bg-cover h-[500px] bg-[url('images/about_us.jpg')] flex items-end px-24 py-20">
        <div className="z-0 absolute inset-0 bg-gradient-to-r from-black to-transparent bg-opacity-100"></div>
        <div className="z-10">
          <div className="text-white text-3xl">
            <div className="my-2">
              <b className="text-[#14ba1b] text-[48px]">Бидний</b>
            </div>
            <div className="my-2">
              <b className="text-[48px]">тухай</b>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[700px] flex">
        <div className="w-[50%] flex justify-center p-20">
          <Image src="/images/rubic_ai.png" alt="" width={100} height={100} />
        </div>
        <div className="w-[50%] p-24">
          <div className="w-[70%]">
            <b
              style={{ fontFamily: "Inter" }}
              className="text-[48px] font-medium"
            >
              CHECKLY гэж юу вэ?
            </b>
          </div>
          <div className="w-[70%] my-4 text-opacity-50">
            Checkly нь Рубик Эй Ай ХХК-ийн хэрэгжүүлж буй анхны төсөл бөгөөд
            хиймэл оюун ухааны машин сургалтын загварыг ашиглан эд хөрөнгийн зах
            зээлийн үнийн (ханшийн) хамгийн боломжит үр дүнг санал болгох
            платформ юм.
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
