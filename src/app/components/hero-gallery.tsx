import Image from "next/image";

export default function HeroGallery() {
  return (
    <div className="container">
      <div className="center_img">
        <Image
          className="img--header"
          src="/home-page-gallery/ctp-render-1.jpg"
          width={500}
          height={500}
          alt="Exterior rendering of an accomodation architectural project"
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
