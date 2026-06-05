import { Post } from "@/data/data"
import BlogCardsBeautiful from "./BlogCardsBeautiful"

function CardsSection({ cardsData, title,linkprev }: { cardsData: Post[], title?: string,linkprev:string}) {
    return (
        <section className="mb-16">
            {title ? (<h2 className="text-2xl font-bold mb-8 text-foreground">{title}</h2>) : (null)}
            <div className="grid-12">
                {cardsData.map((card, idx) => (
                    <div className="span-third" key={idx}>
                        <BlogCardsBeautiful card={card} href={`${linkprev}/${idx.toString()}`}/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CardsSection
