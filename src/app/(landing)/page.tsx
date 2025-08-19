import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Main Container */}
        <div className="flex flex-col">
          {/* First Row */}
          <div className="flex flex-col md:flex-row">
            {/* Text Section */}
            <div className="flex-1 flex items-center justify-center p-8 md:p-12">
              <p className="text-3xl md:text-5xl flex flex-col font-bold text-gray-800 leading-loose text-left gap-2">
                <span>우리는</span>
                <span>사람들에게</span>
                <span>재미와 즐거움</span>
                <span>그리고</span>
                <span>상상의 문을</span>
                <span>연결시킵니다.</span>
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
            {/* Text Section */}
            <div className="flex-1 flex items-center justify-center p-8 md:p-12">
              <p className="text-3xl md:text-5xl flex flex-col font-bold text-gray-800 leading-loose text-left gap-2">
                <span>그리고 사람과</span>
                <span>사람사이</span>
                <span>관계를...,</span>
                <span>세상</span>
                <span>어디에서나</span>
                <span>만족할 수</span>
                <span>있도록...,</span>
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

          {/* Third Row */}
          <div className="flex flex-col md:flex-row">
            {/* Text Section */}
            <div className="flex-1 flex items-center justify-center p-8 md:p-12">
              <p className="text-3xl md:text-5xl flex flex-col font-bold text-gray-800 leading-loose text-left gap-2">
                <span>이제 애딥의 소셜</span>
                <span>네트워크 채널에</span>
                <span>서 크리에이터와</span>
                <span>인플루언서가 안</span>
                <span>정된 콘텐츠 수익</span>
                <span>을 만들어 갑니다.</span>
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
        </div>
      </div>
    </div>
  );
}
