import Image from "next/image";

const Page = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-7">
      <div className="flex flex-col gap-10">
        <div className="p text-center text-white">Who is watching?</div>
        <div className="flex items-center justify-center gap-5">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <div className="group w-40 hover:cursor-pointer">
              <div
                className="
                flex h-40 w-40 items-center justify-center overflow-hidden
                rounded-md border-2 border-transparent group-hover:border-white
                "
              >
                <img
                  src="/images/user1.png"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="
                mt-2 text-center text-lg text-gray-400
                group-hover:cursor-pointer group-hover:text-white
                "
              >
                Name
              </div>
            </div>

            <div className="group w-40 hover:cursor-pointer">
              <div
                className="
                flex h-40 w-40 items-center justify-center overflow-hidden
                rounded-md border-2 border-transparent group-hover:border-white
                "
              >
                <img
                  src="/images/user2.png"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="
                mt-2 text-center text-lg text-gray-400  group-hover:text-white
                "
              >
                Name
              </div>
            </div>

            <div className="group w-40 hover:cursor-pointer">
              <div
                className="
                flex h-40 w-40 items-center justify-center overflow-hidden
                rounded-md border-2 border-transparent group-hover:border-white
                "
              >
                <img
                  src="/images/user3.png"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="
                mt-2 text-center text-lg text-gray-400 group-hover:text-white
                "
              >
                Name
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
