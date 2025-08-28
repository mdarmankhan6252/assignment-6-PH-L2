import { Button } from "@/components/ui/button";

interface AboutProps {
   title?: string;
   description?: string;
   mainImage?: {
      src: string;
      alt: string;
   };
   secondaryImage?: {
      src: string;
      alt: string;
   };
   breakout?: {
      src: string;
      alt: string;
      title?: string;
      description?: string;
      buttonText?: string;
      buttonUrl?: string;
   };
   companiesTitle?: string;
   companies?: Array<{
      src: string;
      alt: string;
   }>;
   achievementsTitle?: string;
   achievementsDescription?: string;
   achievements?: Array<{
      label: string;
      value: string;
   }>;
}

const defaultCompanies = [
   {
      src: "https://cdn-icons-png.flaticon.com/512/1041/1041883.png",
      alt: "DHL",
   },
   {
      src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      alt: "FedEx",
   },
   {
      src: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
      alt: "UPS",
   },
   {
      src: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
      alt: "Aramex",
   },
   {
      src: "https://cdn-icons-png.flaticon.com/512/732/732208.png",
      alt: "BlueDart",
   },
   {
      src: "https://cdn-icons-png.flaticon.com/512/888/888870.png",
      alt: "USPS",
   },
];

const defaultAchievements = [
   { label: "Parcels Delivered", value: "1M+" },
   { label: "Cities Covered", value: "150+" },
   { label: "On-Time Delivery", value: "98%" },
   { label: "Trusted Clients", value: "10K+" },
];

const About = ({
   title = "About ParcelXpress",
   description = "ParcelXpress is a fast, reliable, and secure delivery service designed to make shipping hassle-free. From local couriers to international shipping, we ensure your parcels reach their destination safely and on time.",
   mainImage = {
      src: "https://img.freepik.com/free-photo/delivery-man-handing-parcel-customer_23-2148918936.jpg",
      alt: "Courier delivering parcel",
   },
   secondaryImage = {
      src: "https://img.freepik.com/free-photo/courier-with-parcel-delivery-service_23-2148918901.jpg",
      alt: "Happy customer receiving parcel",
   },
   breakout = {
      src: "https://cdn-icons-png.flaticon.com/512/384/384056.png",
      alt: "Fast Delivery Logo",
      title: "Delivering Smiles Everyday",
      description:
         "We connect people and businesses by providing efficient parcel delivery solutions that build trust and convenience.",
      buttonText: "Book a Delivery",
      buttonUrl: "/book-delivery",
   },
   companiesTitle = "Trusted by Leading Businesses",
   companies = defaultCompanies,
   achievementsTitle = "Our Impact in Numbers",
   achievementsDescription =
      "With years of experience, ParcelXpress continues to deliver excellence, ensuring packages reach safely and on schedule.",
   achievements = defaultAchievements,
}: AboutProps = {}) => {
   return (
      <section className="py-32">
         <div className="max-w-7xl mx-auto px-4">
            <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
               <h1 className="text-5xl font-semibold">{title}</h1>
               <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="grid gap-7 lg:grid-cols-3">
               <img
                  src={mainImage.src}
                  alt={mainImage.alt}
                  className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
               />
               <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
                  <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
                     <img
                        src={breakout.src}
                        alt={breakout.alt}
                        className="mr-auto h-12"
                     />
                     <div>
                        <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                        <p className="text-muted-foreground">{breakout.description}</p>
                     </div>
                     <Button variant="outline" className="mr-auto" asChild>
                        <a href={breakout.buttonUrl}>
                           {breakout.buttonText}
                        </a>
                     </Button>
                  </div>
                  <img
                     src={secondaryImage.src}
                     alt={secondaryImage.alt}
                     className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
                  />
               </div>
            </div>
            <div className="py-32">
               <p className="text-center">{companiesTitle} </p>
               <div className="mt-8 flex flex-wrap justify-center gap-8">
                  {companies.map((company, idx) => (
                     <div className="flex items-center gap-3" key={company.src + idx}>
                        <img
                           src={company.src}
                           alt={company.alt}
                           className="h-6 w-auto md:h-8"
                        />
                     </div>
                  ))}
               </div>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
               <div className="flex flex-col gap-4 text-center md:text-left">
                  <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
                  <p className="max-w-xl text-muted-foreground">
                     {achievementsDescription}
                  </p>
               </div>
               <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
                  {achievements.map((item, idx) => (
                     <div className="flex flex-col gap-4" key={item.label + idx}>
                        <p>{item.label}</p>
                        <span className="text-4xl font-semibold md:text-5xl">
                           {item.value}
                        </span>
                     </div>
                  ))}
               </div>
               <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
            </div>
         </div>
      </section>
   );
};

export default About;
