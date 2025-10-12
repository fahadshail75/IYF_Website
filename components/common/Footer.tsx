import Image from "next/image";
import Link from "next/link";

/**
 * Footer Component
 * Displays site-wide footer with logo, navigation, contact details, and social media links
 * Features:
 * - Responsive layout (mobile-first design)
 * - Social media integration (Facebook, Instagram, Twitter, YouTube)
 * - Contact information with clickable phone/email links
 * - Navigation menu with hover effects
 * - Copyright and legal links
 */
const Footer = () => {
  return (
    <footer className="bg-[#0F1110] flex justify-center">
      <div className="px-4 sm:px-5 md:px-10 2xl:px-6 py-8 md:py-5 max-w-[1600px] w-full">
        {/* Top Section: Logo, Navigation, Contact Details */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 justify-between py-6 md:py-10">
          {/* Logo and Social Icons */}
          <div className="flex flex-col justify-between gap-6 md:gap-0">
            {/* IYF Logo */}
            <div className="mb-0 md:mb-10">
              <Link href="/" aria-label="IYF Home">
                <Image
                  src="/assets/Logo.svg"
                  alt="Islamic Youth Federation of India Logo"
                  width={255}
                  height={74}
                  className="hover:opacity-80 transition-opacity w-48 sm:w-56 md:w-64 h-auto"
                />
              </Link>
            </div>

            {/* Social Media Icons - Desktop */}
            <div className="hidden md:flex items-center gap-4 lg:gap-5">
              <Link 
                href="https://www.facebook.com/IYFofIndia/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="group"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full p-2 bg-white group-hover:bg-[#22CA38] transition-all duration-300 flex items-center justify-center">
                  <Image
                    src="/assets/social-icons/facebook.png"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </Link>
              <Link 
                href="https://www.instagram.com/iyfofindia/?hl=en" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                className="group"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full p-2 bg-white group-hover:bg-[#22CA38] transition-all duration-300 flex items-center justify-center">
                  <Image
                    src="/assets/social-icons/instagram.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </Link>
              <Link 
                href="https://x.com/iyfofindia" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter profile"
                className="group"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full p-2 bg-white group-hover:bg-[#22CA38] transition-all duration-300 flex items-center justify-center">
                  <Image
                    src="/assets/social-icons/twitter.png"
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </Link>
              <Link 
                href="https://www.youtube.com/@IslamicYouthFederationII" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
                className="group"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full p-2 bg-white group-hover:bg-[#22CA38] transition-all duration-300 flex items-center justify-center">
                  <Image
                    src="/assets/social-icons/youtube.png"
                    alt="YouTube"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="lg:mx-10 w-full lg:w-auto">
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 md:gap-y-3">
              <li className="text-white text-sm md:text-base hover:text-[#22CA38] transition-colors duration-200">
                <Link href="/">Home</Link>
              </li>
              <li className="text-white text-sm md:text-base hover:text-[#22CA38] transition-colors duration-200">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="text-white text-sm md:text-base hover:text-[#22CA38] transition-colors duration-200">
                <Link href="/media">Media</Link>
              </li>
              <li className="text-white text-sm md:text-base hover:text-[#22CA38] transition-colors duration-200">
                <Link href="/magzines">Magazines</Link>
              </li>
              <li className="text-white text-sm md:text-base hover:text-[#22CA38] transition-colors duration-200">
                <Link href="/courses">Courses</Link>
              </li>
              <li className="text-white text-sm md:text-base hover:text-[#22CA38] transition-colors duration-200">
                <Link href="/departments">Departments</Link>
              </li>
              <li className="text-white text-sm md:text-base hover:text-[#22CA38] transition-colors duration-200">
                <Link href="/learn-islam">Learn Islam</Link>
              </li>
            </ul>
          </nav>

          {/* Contact Details */}
          <div className="w-full lg:max-w-[437px]">
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6 text-white">
              Contact Details
            </h3>
            <div className="space-y-4 md:space-y-5">
              {/* Address */}
              <div className="flex items-start gap-2 md:gap-3 group">
                <div className="mt-0.5 md:mt-1 flex-shrink-0">
                  <Image
                    src="/assets/footer/map.svg"
                    alt="Location"
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
                <p className="text-white text-xs sm:text-sm leading-relaxed group-hover:text-[#22CA38] transition-colors duration-200">
                  D-115, U.G Floor, Abul Fazal Enclave, Jamia Nagar, Okhla, New
                  Delhi-110025, India
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 md:gap-3 group">
                <div className="flex-shrink-0">
                  <Image
                    src="/assets/footer/email.svg"
                    alt="Email"
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
                <a
                  href="mailto:iyfofindia@gmail.com"
                  className="text-white text-xs sm:text-sm hover:text-[#22CA38] transition-colors duration-200 break-all"
                >
                  iyfofindia@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 md:gap-3 group">
                <div className="flex-shrink-0">
                  <Image
                    src="/assets/footer/phone.svg"
                    alt="Phone"
                    width={24}
                    height={24}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
                <a
                  href="tel:+918800905047"
                  className="text-white text-xs sm:text-sm hover:text-[#22CA38] transition-colors duration-200"
                >
                  +91 88009 05047
                </a>
              </div>

              {/* WhatsApp Link */}
              <div className="mt-4 md:mt-6">
                <a
                  href="https://wa.me/918800905047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#22CA38] text-white rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium w-full sm:w-auto"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Icons - Mobile */}
          <div className="flex items-center justify-center sm:justify-start gap-4 md:hidden">
            <Link 
              href="https://www.facebook.com/IYFofIndia/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className="group"
            >
              <div className="w-11 h-11 rounded-full p-2 bg-white group-hover:bg-[#22CA38] transition-all duration-300 flex items-center justify-center">
                <Image
                  src="/assets/social-icons/facebook.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </div>
            </Link>
            <Link 
              href="https://www.instagram.com/iyfofindia/?hl=en" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
              className="group"
            >
              <div className="w-11 h-11 rounded-full p-2 bg-white group-hover:bg-[#22CA38] transition-all duration-300 flex items-center justify-center">
                <Image
                  src="/assets/social-icons/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </div>
            </Link>
            <Link 
              href="https://x.com/iyfofindia" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter profile"
              className="group"
            >
              <div className="w-11 h-11 rounded-full p-2 bg-white group-hover:bg-[#22CA38] transition-all duration-300 flex items-center justify-center">
                <Image
                  src="/assets/social-icons/twitter.png"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </div>
            </Link>
            <Link 
              href="https://www.youtube.com/@IslamicYouthFederationII" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel"
              className="group"
            >
              <div className="w-11 h-11 rounded-full p-2 bg-white group-hover:bg-[#22CA38] transition-all duration-300 flex items-center justify-center">
                <Image
                  src="/assets/social-icons/youtube.png"
                  alt="YouTube"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Section: Copyright and Legal Links */}
        <div className="border-t border-gray-700 pt-5 pb-2 md:py-6 flex flex-col md:flex-row gap-4 md:gap-10 justify-between items-center">
          {/* Copyright */}
          <div className="order-2 md:order-1">
            <p className="text-white text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Islamic Youth Federation of India | All Rights Reserved
            </p>
          </div>

          {/* Legal Links */}
          <div className="order-1 md:order-2 flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
            <Link 
              href="/terms-and-conditions"
              className="text-white text-xs sm:text-sm hover:text-[#22CA38] transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <Link 
              href="/privacy-policy"
              className="text-white text-xs sm:text-sm hover:text-[#22CA38] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
