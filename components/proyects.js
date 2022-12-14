import Section from "./section";
import SectionTitle from "./sectionTitle";

import ProyectCard from "./proyectCard";

export default function Proyects() {
  const proyects = [
    {
      title: "elMazo",
      description:
        "App with an online cards games called 'La Conga' also know as 'Chinchón'",
      imageSrc: "/elMazo.png",
      badges: ["React", "Socket io", "Tailwind css"],
      blurDataURL:
        "data:image/jpeg;base64,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",
      linkRepo: "https://github.com/jvier93/elMazo-frontend",
      linkDemo: "https://el-mazo-frontend.vercel.app/",
    },
    {
      title: "Wedding Page ",
      description: "A simple responsive wedding page.",
      imageSrc: "/wedding-page.png",
      badges: ["Html", "Css", "Javascript"],
      blurDataURL:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAJ0AvgMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABP/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJQFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==",
      linkRepo: "https://github.com/jvier93/wedding-page",
      linkDemo: "https://jvier93.github.io/wedding-page/",
    },
    {
      title: "eCommerce-JAP",
      description:
        "Ecommerce app. Final proyect of course JAP (Jóvenes a programar).",
      imageSrc: "/jap.png",
      badges: ["Html", "Css", "Javascript"],
      blurDataURL:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAKUBHQMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAb/xAAWEAEBAQAAAAAAAAAAAAAAAAAAEQH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APqQFQABBQEAAAEEVAAAABUAAAAAAABABRFAQAAAQRUAAUdhRBBQEFQBFAQABFBEAAAFEUARQEFAQUBEUFQVAEUBBUUAAABHcVEBFAQVAQVAQVAAAQAAAAAAAAAAUBABUFARFAQVAAFEFAdxREQVAQVAQAEBAARAAAAAAAAUUAAAAAVBQEABBQEAUQUQehFBEABEVAQAERUQEEBUAAABUAURVBUAUAUAAAARQEAARQEFAdwBEABEVBUBEERUAQQAQBRAFEpQVWVBVZUFEFFVAFEAUQAAAAAAB3QAEBAQQBlUBEVkBBEFRAFGaUGhmlBqlZq1RqlZq0GqM1aDQlKCqgCiKoAAAIAAOoICoIAggCGpqBrK6zoCGoAlEoq1KlKC0qUoNUrNKDVWs1aDVKyqo0rNKDSs1QVUAVUAURQAAdBABAAQRBNTV1nQNTTU0VNTTU1AQQARAUqFBatZpQaq1mlUbpWaoNKzVBpWVEaVlQVUUBUAUAGgFBAQRFQE1NXWdA1nV1NRU1nV1NBEXWQEVABAVRAFVlRGlZVRpWcUGlTFwGlZURVRQUAFEUGgFEAQRABGdAE1NBFZ1NAGUAEARUQFBQAUAVQEXFBRcawAVQEVQBQAAAf/2Q==",
      linkRepo: "https://github.com/jvier93/eCommerce-JAP.git",
      linkDemo: "https://jvier93.github.io/eCommerce-JAP/",
    },
  ];

  return (
    <Section>
      <div
        id="proyects"
        className=" mx-auto flex min-h-screen w-full max-w-5xl scroll-mt-16 flex-col  items-center bg-white/10 p-4 pb-10 "
      >
        <SectionTitle
          title={"My proyects"}
          bg="bg-white"
          textColor={"text-white"}
        ></SectionTitle>
        <div className=" flex  max-w-4xl flex-wrap items-center justify-center gap-4 ">
          {proyects.map(
            (
              {
                title,
                description,
                imageSrc,
                linkRepo,
                linkDemo,
                blurDataURL,
                badges,
              },
              index
            ) => {
              return (
                <ProyectCard
                  key={index}
                  imageSrc={imageSrc}
                  title={title}
                  badges={badges}
                  description={description}
                  linkRepo={linkRepo}
                  linkDemo={linkDemo}
                  blurDataURL={blurDataURL}
                ></ProyectCard>
              );
            }
          )}
        </div>
      </div>
    </Section>
  );
}
