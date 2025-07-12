import Image from "next/image";
import Link from "next/link";

export interface Books {
  title: string;
  imageSrc: string;
}

interface BooksSectionProps {
  data: Books[];
}

const Books = ({ data }: BooksSectionProps) => {
  return (
    <section className="  bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">
        Islamic Books
        <span className="block w-16 h-1 bg-green-500 mx-auto mt-2" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10 xl:gap-16">
        {data.map((_, index) => (
          <div
            key={index}
            className="  "
          >
            <div className="max-w-[360px[">
              <Image
                src={_.imageSrc}
                alt={_.title}
                width={400}
                height={250}
                className="w-full object-cover"
              />
            </div>
            <div className="mt-5 flex flex-col  justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{_.title}</h3>
              </div>
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
