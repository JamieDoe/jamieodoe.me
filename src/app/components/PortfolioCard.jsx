import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({ portfolios }) {
  return (
    <div className="flex flex-col gap-2 ">
      <div className=" portfolio_grid rounded-2xl overflow-hidden ">
        {portfolios.map(({ title, link, image, description }) => {
          return (
            <Link
              href={link}
              className="bg-secondary rounded-md overflow-hidden portfolio_card_grid "
              target="_blank"
              key={link}
            >
              <div className="bg-black w-full">
                <Image
                  className="w-full h-full object-cover opacity-40"
                  width={1000}
                  height={200}
                  src={image.url}
                  alt={image.alt}
                />
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h3 className="text-2xl font-semibold">{title}</h3>
                {description && (
                  <p className="text-sm font-light">{description}</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
