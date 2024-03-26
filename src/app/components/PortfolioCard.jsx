import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({ portfolios }) {
  return (
    <div className="px-6 flex flex-col gap-2">
      <h2 className="text-4xl font-bold">Portfolio</h2>
      <div className=" portfolio_grid rounded-2xl overflow-hidden">
        {portfolios.map(({ title, link, image, description }) => {
          return (
            <Link
              href={link}
              className="bg-slate-100 rounded-md w-full h-[150px] overflow-hidden relative"
              target="_blank"
              key={link}
            >
              <div className="bg-black">
                <Image
                  className="h-full w-full object-cover opacity-40"
                  width={1000}
                  height={200}
                  src={image.url}
                  alt={image.alt}
                />
              </div>
              <div className="w-full h-full absolute top-0 p-4 flex flex-col gap-1">
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
