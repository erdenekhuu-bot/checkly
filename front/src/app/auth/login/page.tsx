import Image from "next/image";

const Login = function () {
  return (
    <div>
      <section className="flex justify-between p-10">
        <div>
          <b
            className="text-[#14ba1b] text-[30px]"
            style={{ fontFamily: "Inter" }}
          >
            checkly
          </b>
        </div>
        <div>
          <span style={{ fontFamily: "Inter" }} className="mx-2 text-[14px]">
            Бүртгэл байгаа юу?
          </span>
          <b style={{ fontFamily: "Inter" }} className="text-[14px]">
            Бүртгүүлэх
          </b>
        </div>
      </section>
      <section className="h-full flex">
        <div className="w-[50%] p-5">
          <div>
            <b
              style={{ fontFamily: "Inter" }}
              className="text-[30px] font-medium"
            >
              Hi, Welcome back
            </b>
          </div>
          <div>
            <Image
              src="/images/illustration_login.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="w-[50%] p-5">
          <form action="" method="post">
            <div className="">
              <b style={{ fontFamily: "Inter" }} className="text-[20px]">
                Нэвтрэх
              </b>
            </div>
            <div className="my-2" style={{ fontFamily: "Inter" }}>
              Мэдээллээ оруулна уу
            </div>
            <div className="input-group my-4 w-[70%]">
              <input
                style={{ fontFamily: "Inter" }}
                type="text"
                className="form-control"
                placeholder="Имэйл"
                aria-label="Имэйл"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group my-3 w-[70%]">
              <input
                style={{ fontFamily: "Inter" }}
                type="text"
                className="form-control"
                placeholder="Нууц үг"
                aria-label="Нууц үг"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="my-4">
              <button
                type="button"
                style={{ fontFamily: "Inter" }}
                className="btn btn-success bg-[#14ba1b] w-[70%]"
              >
                Нэвтрэх
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
