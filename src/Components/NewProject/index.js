import Data from "./Data";
import "./index.css";

const products = [
  {
    id: 1,
    title: "Iphone",
    description:
      "The iPhone is a line of smartphones designed and marketed by Apple Inc. These devices use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates",
    image:
      "https://i.pcmag.com/imagery/reviews/07GmIupznWhAzDQ3Z7li99a-1..v1632849626.jpg",
    price: 100000
  },
  {
    id: 2,
    title: "Samsung",
    description:
      "The Samsung Group (or simply Samsung, stylized as SΛMSUNG) (Korean: 삼성 [samsʌŋ]) is a South Korean multinational manufacturing conglomerate headquartered in Samsung Town, Seoul, South Korea. It comprises numerous affiliated businesses, most of them united under the Samsung brand, and ...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzY4bAMeVfQsgDZTM7dg6p_P0pNMli8F7vA&usqp=CAU",
    price: 700000
  },
  {
    id: 3,
    title: "realme",
    description:
      "Realme (stylized as realme) is a Chinese consumer electronics manufacturer based in Shenzhen, Guangdong. It was founded by Li Bingzhong (known as Sky Li) on May 4, 2018, who was former vice president of Oppo. Started originally as a sub-brand ",
    image: "https://images.indianexpress.com/2022/01/Realme-9i-review-1.jpg",
    price: 450000
  },
  {
    id: 4,
    title: "Vivo",
    description:
      "Vivo V20 is a Smartphone Powered by Android 11 with Funtouch OS 11 with a 64MP rear camera with f/1.89 aperture, LED flash, 8MP wide-angle camera with f/2.2 aperture, 2MP mono sensor with f/2.4 aperture, 44MP front-facing camera with f/2.0 aperture, In-display fingerprint sensor.",
    image: "https://www.sathya.store/img/product/aUvpkQ7DDOi0dnba.jpg",
    price: 550000
  }
];

export default function NewProject() {
  return (
    <div>
      <h2> New Projects</h2>
      <div className="phone-container">
        {products.map((info) => {
          const { id } = info;
          return (
            <div key={id}>
              <Data
                title={info.title}
                image={info.image}
                description={info.description}
                price={info.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
