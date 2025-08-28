import { Globe, Headphones, Package, ShieldCheck } from "lucide-react";


const Services = () => {

   const services = [
      {
         icon: <Package className="h-6 w-6" />,
         title: "Fast Delivery",
         description:
            "Quick and reliable delivery service to ensure your parcels reach their destination on time.",
         items: ["Same-Day Delivery", "Express Shipping", "Scheduled Delivery"],
      },
      {
         icon: <ShieldCheck className="h-6 w-6" />,
         title: "Safe & Secure",
         description:
            "Your parcels are handled with care and delivered safely with real-time tracking.",
         items: ["Secure Handling", "Insurance Options", "Live Tracking"],
      },
      {
         icon: <Globe className="h-6 w-6" />,
         title: "Nationwide Coverage",
         description:
            "We deliver everywhere—whether it’s across the city or across the country.",
         items: ["Local Delivery", "Inter-City Shipping", "Door-to-Door Service"],
      },
      {
         icon: <Headphones className="h-6 w-6" />,
         title: "Customer Support",
         description:
            "Friendly support team to help you with bookings, tracking, and delivery issues anytime.",
         items: ["24/7 Support", "Live Chat", "Call Assistance"],
      },
   ];

   return (
      <section className="pb-24">
         <div className="max-w-7xl mx-auto">
            <div className="mx-auto max-w-6xl space-y-12">
               <div className="space-y-4 text-center">
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                     Services
                  </h2>
                  <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
                     We deliver it safely and on time, making sure you can trust us every step of the way.
                  </p>
               </div>

               <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {services.map((service, index) => (
                     <div
                        key={index}
                        className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm"
                     >
                        <div className="flex items-center gap-4">
                           <div className="bg-muted rounded-full p-3">
                              {service.icon}
                           </div>
                           <h3 className="text-xl font-semibold">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                           {service.description}
                        </p>
                        <div className="space-y-2">
                           {service.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-center gap-2">
                                 <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                                 <span className="text-sm font-medium">{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Services;