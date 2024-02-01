import Image from "next/image";

export default function HeroGallery() {
  return (
    <div className="container">
      <div className="center_img">
        <Image
          className="img--landing--header"
          src="/home-page-gallery/ctp-render-01.webp"
          width={1920}
          height={500}
          alt="Exterior rendering of an accomodation architectural project"
          quality={100}
          priority={true}
        />
        <div>
          <Image
            src="/home-page-gallery/instagram-logo.png"
            width={30}
            height={30}
            alt="instagram-logo"
            style={{ padding: 20 }}
          />
        </div>
      </div>
    </div>
  );
}
