import Image from "next/image";

const RecentMagzines = () => {
  return (

    <>
      <h2 className="capitalize text-2xl font-bold text-center mb-8">
        Recent magazines
        <span className="block w-16 h-1 bg-green-500 mx-auto mt-2" />
      </h2>
    <div className="flex flex-col lg:flex-row justify-between gap-20 items-center">
      <div className="lg:w-1/2">
        <Image
          src={"/assets/home/recent-magzines-image.png"}
          alt={"Recent Magazines"}
          width={747}
          height={500}
          className="w-full"
        />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">This month</h2>
        <div className="text-[#202020] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <br></br>
          <br></br>

          Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
          <br></br>
          <br></br>

          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </div>
        
        <button className="primary-button">
            Take Subscription
        </button>
      </div>
    </div>
    </>

  );
};

export default RecentMagzines; // Export the component at the end of the file
