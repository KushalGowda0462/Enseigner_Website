import { partners } from "@/data/data"
import Image from "next/image"

export function InfiniteCarousel() {
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners]


  return (
    <div className="relative w-full overflow-hidden bg-muted/40 py-10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="animate-infinite-scroll flex w-fit">
        {duplicatedPartners.map((partner, idx) => (
          <div
            key={`${partner.name}-${idx}`}
            className="mx-8 flex-shrink-0 transition-transform hover:scale-110 flex justify-center items-center"
          >
            <Image
              src={partner.logo || "/ibm-logo.png"}
              alt={partner.name}
              width={240}
              height={60}
              className="object-contain h-12 w-24 lg:h-16 md:w-52 filter grayscale dark:invert"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

