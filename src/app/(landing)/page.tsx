import Image from "next/image";
import Header from "@/components/Header";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto">
        {/* Main Container */}
        <div className="flex flex-col">
          {/* First Row */}
          <div className="flex flex-col md:flex-row">
            {/* Text Section */}
            <div className="flex-1 flex items-center justify-center p-8 md:p-12">
              <p className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight text-center">
                Bringing you
                <br />
                closer to the people
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative h-64 md:h-96">
              <Image
                src="https://scontent-icn2-1.xx.fbcdn.net/v/t39.8562-6/387184831_3144051205888666_1255435093115443770_n.webp?_nc_cat=108&ccb=1-7&_nc_sid=f537c7&_nc_ohc=wXWVeer7fBMQ7kNvwFsuCYw&_nc_oc=AdkMfonxKNvANxrkhcgeXjZiJmhjkBbKCScDWhsoswuZseFPty6gUYCjx8VGfCDKNn4&_nc_zt=14&_nc_ht=scontent-icn2-1.xx&_nc_gid=l1VCRayvBau6AlJdlnBvhQ&oh=00_AfWmojQ0p0li3k62HzFIDgnlx7FbiSUXS-qPDubXU7r9uw&oe=68A76662"
                alt="girl taking a photo with a tunnel filter"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="flex-1 relative h-64 md:h-96 order-2 md:order-1">
              <Image
                src="https://scontent-icn2-1.xx.fbcdn.net/v/t39.8562-6/387133164_313300468005606_2554607693617354373_n.webp?_nc_cat=102&ccb=1-7&_nc_sid=f537c7&_nc_ohc=v6fO_n0AbKAQ7kNvwECDt2a&_nc_oc=Adn3znUf2jvprhErrEl_sL2X_lKso3iJZ6CphxrQLRSTj243aPb0xNHWKvJYs_0B5t0&_nc_zt=14&_nc_ht=scontent-icn2-1.xx&_nc_gid=l1VCRayvBau6AlJdlnBvhQ&oh=00_AfV6lu0CIQ52m2dCE5LDmC_LCtt39TgMMmsi4nBKhyivqg&oe=68A788EC"
                alt="guy taking a photo with food"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text Section */}
            <div className="flex-1 flex items-center justify-center p-8 md:p-12 order-1 md:order-2">
              <p className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight text-center">
                and things
                <br />
                you love
              </p>
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-col items-center justify-center p-8">
            {/* Arrow */}
            <div className="mb-8">
              <svg
                className="w-16 h-20 md:w-24 md:h-28 text-gray-800"
                viewBox="0 0 96 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0691 67.5589L22.8279 67.5589C27.8908 67.5589 32.2155 68.7192 35.8017 71.0397C39.4935 73.4657 41.9722 76.8938 43.238 81.3239L43.238 7.91088L55.8954 7.91088L55.8954 81.3239C57.1611 76.8938 59.5871 73.4657 63.1734 71.0397C66.8651 68.7192 71.2425 67.5589 76.3055 67.5589L87.0643 67.5589L87.0643 81.1657L77.7294 81.1657C71.1897 81.1657 65.8631 82.9061 61.7494 86.3868C57.6358 89.8676 55.5789 94.7196 55.5789 100.943L55.5789 102.841L43.5544 102.841L43.5544 100.943C43.5544 94.7196 41.4976 89.8676 37.3839 86.3868C33.2702 82.9061 27.9436 81.1657 21.4039 81.1657L12.0691 81.1657L12.0691 67.5589Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Image */}
            <div className="relative w-full max-w-2xl h-64 md:h-96">
              <Image
                src="https://scontent-icn2-1.xx.fbcdn.net/v/t39.8562-6/387825193_349756847475084_7243002824523213852_n.webp?_nc_cat=102&ccb=1-7&_nc_sid=f537c7&_nc_ohc=xy7fUPe_iqAQ7kNvwETo73R&_nc_oc=AdnFnS-6vocTlQ2BLXxHwYd-Z6lD1uPoHqW3QI3RAxhq32AUN_kQPNuPD7FPC1c9wiw&_nc_zt=14&_nc_ht=scontent-icn2-1.xx&_nc_gid=l1VCRayvBau6AlJdlnBvhQ&oh=00_AfXXSbb_5SEpgOdN_W14-XentsFW-4M-L1-NuunbfzBOrg&oe=68A772FA"
                alt="three girls taking a photo from above"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
