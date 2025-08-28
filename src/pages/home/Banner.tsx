import { Truck } from "lucide-react";
import car from '@/assets/car.png'

import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/SplitText/SplitText";


const Banner = () => {
  return (
    <section className="overflow-hidden py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-5">
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute top-1/2 left-1/2 -z-10 mx-auto size-[800px] rounded-full border [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] p-16 md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border"></div>
              </div>
            </div>
            <span className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20">
              <Truck className="size-6" />
            </span>
            <h2 className="text-center">
              <SplitText
                text="Your Package, Our Priority."
                className="mx-auto max-w-5xl text-center text-3xl font-medium text-balance md:text-6xl h-20"
                delay={100}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                // onLetterAnimationComplete={handleAnimationComplete}
              />
              
            </h2>
            <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg">
              Your package is more than just a parcel to us—it’s a promise. We deliver it safely and on time, making sure you can trust us every step of the way.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-3 pb-12">
              <Button size="lg" variant={"outline"}>
                Know More About Us
              </Button>
            </div>
          </div>
          <img
            src={car}
            className="mx-auto h-full max-h-[524px] w-full max-w-5xl rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { Banner };
