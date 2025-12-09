import type { Metadata } from "next";
import BannerPopup from "@/components/common/BannerPopup";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
    title: "Contact Us | Islamic Youth Federation of India",
    description: "Get in touch with the Islamic Youth Federation of India. We are here to answer your questions and hear your feedback.",
};

export default function ContactPage() {
    return (
        <main className="flex flex-col w-full bg-white min-h-screen">
            <BannerPopup />

            <ContactHero />

            <section className="w-full max-w-[1600px] mx-auto px-6 lg:px-10 pb-20">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    <div className="w-full lg:w-3/5">
                        <ContactForm />
                    </div>
                    <div className="w-full lg:w-2/5">
                        <ContactInfo />
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full h-[400px] bg-gray-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.943037233776!2d77.2410!3d28.6010!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAzLjYiTiA3N8KwMTQnMjcuNiJF!5e0!3m2!1sen!2sin!4v1635760000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </section>
        </main>
    );
}
