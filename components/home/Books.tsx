import Image from "next/image";
import Link from "next/link";
import Separator from "../common/Seperator";

export interface Books {
  title: string;
  imageSrc: string;
  link: string;
}

interface BooksSectionProps {
  data: Books[];
}

const Books = ({ data }: BooksSectionProps) => {
  return (
    <section className="  bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">
        Islamic Books
        {/* <span className="block w-16 h-1 bg-green-500 mx-auto mt-2" /> */}
        <div className="flex justify-center mt-4">
          <Separator />
        </div>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 xl:gap-16">
        {data.map((_, index) => (
          <div key={index} className=" px-6 py-3 rouded-md shadow ">
            <div className=" flex items-center justify-center group">
              <div className="w-[150px] h-[200px] md:max-w-[360px] md:h-[360px] md:w-full overflow-hidden">
                <Image
                  src={_.imageSrc}
                  alt={_.title}
                  width={400}
                  height={250}
                  className="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"

                />
              </div>
            </div>

            <div className="mt-5 flex flex-col  justify-between">
              <div>
                <h3
                  className="text-sm md:text-lg font-semibold mb-2 truncate"
                  title={_.title}
                >
                  {_.title}
                </h3>
              </div>
              <Link href={_.link} target="_blank" rel="noopener noreferrer">
                <div className="text-sm text-green-600 font-semibold hover:underline">
                  Download
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link href={"#"}>
          <div className="primary-button">Explore More Books</div>
        </Link>
      </div>
    </section>
  );
};

export default Books;
