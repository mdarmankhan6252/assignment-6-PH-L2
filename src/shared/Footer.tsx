import Logo from "@/utils/Logo";


const Footer = () => {
   return (
      <footer>
         <div className="mx-auto max-w-7xl px-4 space-y-8 py-16 sm:px-6 lg:space-y-16 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
               <Logo />
              <h2 className="font-semibold text-lg">Parcel</h2>
            </div>

            <div
               className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16"
            >
               <div>
                  <p className="font-medium text-gray-900">Services</p>

                  <ul className="mt-6 space-y-4 text-sm">
                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> 1on1 Coaching </a>
                     </li>

                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Company Review </a>
                     </li>

                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
                     </li>

                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> HR Consulting </a>
                     </li>

                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> SEO Optimisation </a>
                     </li>
                  </ul>
               </div>

               <div>
                  <p className="font-medium text-gray-900">Company</p>

                  <ul className="mt-6 space-y-4 text-sm">
                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
                     </li>

                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
                     </li>

                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
                     </li>
                  </ul>
               </div>

               <div>
                  <p className="font-medium text-gray-900">Helpful Links</p>

                  <ul className="mt-6 space-y-4 text-sm">
                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Contact </a>
                     </li>

                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
                     </li>

                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Live Chat </a>
                     </li>
                  </ul>
               </div>

               <div>
                  <p className="font-medium text-gray-900">Legal</p>

                  <ul className="mt-6 space-y-4 text-sm">
                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Accessibility </a>
                     </li>

                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Returns Policy </a>
                     </li>

                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Refund Policy </a>
                     </li>

                     <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Hiring-3 Statistics </a>
                     </li>
                  </ul>
               </div>
            </div>

            <p className="text-xs text-gray-500 text-center">&copy; 2022. Company Name. All rights reserved.</p>
         </div>
      </footer>
   );
};

export default Footer;