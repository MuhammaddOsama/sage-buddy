import {
  Email,
  Facebook,
  Linkedin,
  Phone,
  Twitter,
  Youtube,
} from "@/public/icons/Icon";
import Link from "next/link";
const Topnav = () => {
  return (
    <>
      <div className="bg-white py-3">
        <div className="md:container mx-auto px-5">
          <div className="flex items-center sm:justify-between justify-center flex-wrap  sm:gap-10 gap-5">
            <div className="flex flex-row sm:gap-8 gap-5">
              <div className="flex items-center space-x-2 ">
                <Email />
                <p className="lg:text-xs text-[10px] text-grey">
                  info@sagebuddy.com
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone />
                <p className="lg:text-xs text-[10px] text-grey">048 376 8719</p>
              </div>
            </div>
            <div className="flex items-end space-x-2">
              <Link href="/#" className="flex items-center justify-center w-[22px] h-[22px] bg-green rounded-[5px]">
                <Facebook />
              </Link>
              <Link href="/#" className="flex items-center justify-center w-[22px] h-[22px] bg-green rounded-[5px] ">
                <Twitter />
              </Link>
              <Link href="/#" className="flex items-center justify-center w-[22px] h-[22px] bg-green rounded-[5px]">
                <Youtube />
              </Link>
              <Link href="/#" className="flex items-center justify-center w-[22px] h-[22px] bg-green rounded-[5px]">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
