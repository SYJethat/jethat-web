import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Shri Lakshminarasimhan",
    role: "Executive Officer",
    company: "Samskrit Promotion Foundation",
    content: "Seamless multilingual Sanskrit learning platform with enhanced student engagement.",
    avatar: "public/Laxminarsimhan.jpg",
    rating: 5,
  },
  {
    name: "Amit Kumar Tiwari",
    role: "CTO",
    company: "OCIO Technology Pvt. Ltd.",
    content: "Streamlined multilingual customer support with improved efficiency and satisfaction.",
    avatar: "public/Laxminarsimhan.jpg",
    rating: 5,
  },
  {
    name: "Ravi Prakash",
    role: "CEO",
    company: "Branding Spoon",
    content: "Natural Hindi voice responses made our platform accessible to regional audiences.",
    avatar: "public/Laxminarsimhan.jpg",
    rating: 5,
  },
  {
    name: "Anurag Bishwas",
    role: "CEO",
    company: "Xhadow Media Pvt. Ltd.",
    content: "Tamil and Gujarati support delivered inclusive healthcare communication effortlessly.",
    avatar: "public/Laxminarsimhan.jpg",
    rating: 5,
  },

   {
    name: "Dheeraj Singh",
    role: "CEO",
    company: "Jethat",
    content: "Tamil and Gujarati support delivered inclusive healthcare communication effortlessly.",
    avatar: "public/Laxminarsimhan.jpg",
    rating: 5,
  },
   {
    name: "Suraj Yadav",
    role: "CEO",
    company: "Xhadow Media Pvt. Ltd.",
    content: "Tamil and Gujarati support delivered inclusive healthcare communication effortlessly.",
    avatar: "public/Laxminarsimhan.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-[#FF8C00]/10 dark:bg-[#FF8C00]/20 rounded-full px-4 py-2 mb-4 shadow-sm border border-[#FF8C00]/30">
            <Quote className="h-4 w-4 text-[#FF8C00]" />
            <span className="text-sm font-semibold text-[#FF8C00]">Reviews</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by India's <br />
            <span className="bg-gradient-to-r from-[#FF8C00] via-[#FFB300] to-[#FF8C00] bg-clip-text text-transparent">Leading Businesses</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See why top companies rely on JetHat AI to elevate their customer engagement.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-900/95 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#FF8C00]/20 dark:border-[#FF8C00]/30 hover:border-[#FF8C00]/40 h-full">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#FFB300] fill-[#FFB300]" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed text-base">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md ring-2 ring-[#FF8C00]/30">
                    {/* <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}

                      className="object-cover"
                    /> */}

                    <img src={testimonial.avatar} alt="" srcset="" />

                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[#FF8C00] font-medium">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;