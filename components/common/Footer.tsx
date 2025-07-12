import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0F1110] flex justify-center">
      <div className=" px-5 md:px-10 2xl:px-0 py-5 max-w-[1600px] w-full">
        {/* top */}
        <div className="flex flex-col lg:flex-row md:flex-wrap xl:flex-nowrap gap-10 justify-between   py-10">
          <div className="">
            {/* logo */}
            <div className="mb-5 md:mb-24">
              <Image
                src="/assets/Logo.svg"
                alt="IYF Logo"
                width={255}
                height={74}
              />
            </div>

            {/* social Icon */}
            <div className="hidden  md:flex items-center gap-5">
              <Link href={"#"}>
                <div className="w-10 h-10 rounded-full p-2 bg-white">
                  <Image
                    src={"/assets/social-icons/facebook.png"}
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-full h-ful"
                  />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="w-10 h-10 rounded-full p-2 bg-white">
                  <Image
                    src={"/assets/social-icons/instagram.png"}
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-full h-ful"
                  />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="w-10 h-10 rounded-full p-2 bg-white">
                  <Image
                    src={"/assets/social-icons/twitter.png"}
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="w-full h-ful"
                  />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="w-10 h-10 rounded-full p-2 bg-white">
                  <Image
                    src={"/assets/social-icons/youtube.png"}
                    alt="Youtube"
                    width={20}
                    height={20}
                    className="w-full h-ful"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* menu */}
          <nav>
            <ul className="columns-2 md:columns-3 space-y-4">
              <li className="text-white hover:underline hover:text-[#22CA38]">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="text-white hover:underline hover:text-[#22CA38]">
                <Link href={"/"}>About Us</Link>
              </li>
              <li className="text-white hover:underline hover:text-[#22CA38]">
                <Link href={"/"}>Media</Link>
              </li>
              <li className="text-white hover:underline hover:text-[#22CA38]">
                <Link href={"/"}>Magazines</Link>
              </li>
              <li className="text-white hover:underline hover:text-[#22CA38]">
                <Link href={"/"}>Courses</Link>
              </li>
              <li className="text-white hover:underline hover:text-[#22CA38]">
                <Link href={"/"}>Departments</Link>
              </li>
              <li className="text-white hover:underline hover:text-[#22CA38]">
                <Link href={"/"}>Learn Islam</Link>
              </li>
              <li className="text-white hover:underline hover:text-[#22CA38]">
                <Link href={"/"}>Contact Us</Link>
              </li>
            </ul>
          </nav>

          {/* contact details */}
          <div className="max-w-[437px] w-full">
            <h2 className="text-lg font-bold mb-6 text-white">Contact Details</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src={"/assets/footer/map.svg"}
                  alt="Location"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <p className="text-white">Sanali Info Park , 1st Floor, A Block, 8-2-120/113, Road No. 2, Banjara Hills, Delhi - 500097</p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={"/assets/footer/email.svg"}
                  alt="Email"
                  width={40}
                  height={40}
                  className="w-10 h-10"

                />
                <p className="text-white">iyfofindia@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={"/assets/footer/phone.svg"}
                  alt="Phone"
                  width={40}
                  height={40}
                  className="w-10 h-10"

                />
                <p className="text-white">+91 9898989898</p>
              </div>
            </div>
          </div>

          <div className="  flex items-center gap-5 md:hidden">
              <Link href={"#"}>
                <div className="w-10 h-10 rounded-full p-2 bg-white">
                  <Image
                    src={"/assets/social-icons/facebook.png"}
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-full h-ful"
                  />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="w-10 h-10 rounded-full p-2 bg-white">
                  <Image
                    src={"/assets/social-icons/instagram.png"}
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-full h-ful"
                  />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="w-10 h-10 rounded-full p-2 bg-white">
                  <Image
                    src={"/assets/social-icons/twitter.png"}
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="w-full h-ful"
                  />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="w-10 h-10 rounded-full p-2 bg-white">
                  <Image
                    src={"/assets/social-icons/youtube.png"}
                    alt="Youtube"
                    width={20}
                    height={20}
                    className="w-full h-ful"
                  />
                </div>
              </Link>
            </div>
        </div>

        {/* bottom */}
        <div className="border-t border-white py-10 flex flex-wrap xl:flex-nowrap gap-5 md:gap-10 justify-between items-center">
          <div>
            <p className="text-white">
              © IYF Of India 2025 | All Rights Reserved
            </p>
          </div>
          <div className="flex items-center gap-8">
            <Link href={"/terms-and-conditions"}>
              <div className="text-white underline">Terms & Conditions</div>
            </Link>
            <Link href={"/privacy-policy"}>
              <div className="text-white underline">Privacy Policy</div>
            </Link>
            <Link href={"/contact-us"}>
              <div className="text-white underline">Contact Us</div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; //exporting the component so it can be used in other files
