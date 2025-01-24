import Image from "next/image";
import Navbar from "@/app/components/ui/Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar initialBackground={false} />

      <div
        className="min-h-screen flex flex-col bg-white relative mb-24"
        style={{
          background: `radial-gradient(circle at top, rgba(114, 213, 60, 0.12) 0%, rgba(255, 255, 255, 0) 60%)`,
        }}
      >
        <h3 className="text-4xl mb-20 font-bold text-center mt-32 text-ellipsis">
          About Us
        </h3>
        <div className="flex flex-col max-w-[1200px] mx-auto gap-10 ">
          <div className="w-[70%] mx-auto mb-14">
            <p className="text-3xl font-medium mb-5">
              Welcome to Beat the Line, where passion for sports meets precision
              in data-driven betting.
            </p>
            <p>
              We started as a few guys who were interested in statistics and
              sports. We took these two passions and discovered opportunities in
              sports betting markets which could generate a massive return on
              investment. We built the company from this premise and to this day
              we are enjoying{" "}
              <span className="font-semibold text-xl text-[#72D53C]">
                incredible results{" "}
              </span>
              for ourselves and our clients.
            </p>
            <br />
            With{" "}
            <span className="font-semibold text-xl text-[#72D53C]">
              Beat The Line{" "}
            </span>
            you will get access to sports picks that are passed through
            intensive statistical scrutiny to ensure the highest quality product
            is delivered.{" "}
            <p>
              <br />
              We pride ourselves on customer service and providing real value to
              our clients as they pursue{" "}
              <span className="font-semibold text-xl text-[#72D53C]">
                profitable sports betting
              </span>
              . We cut out all of the noise and provide the highest value bets
              available, taking out all of the work of hunting them down for
              yourself.{" "}
              <p>
                <br />
                <span className="font-semibold text-xl text-[#72D53C]">
                  Let’s make some money together!
                </span>
              </p>
            </p>
          </div>
          <div className="">
            <h3 className="text-4xl mb-20 font-bold text-center mt-8 text-ellipsis">
              Our Team
            </h3>
            <div className="w-[100%] flex gap-6">
              <div>
                <Image
                  src="/BTL-SIG-RICKY.png"
                  alt="Website Logo"
                  width={530}
                  height={50}
                />
              </div>

              <div>
                <Image
                  src="/BTL-SIG-JACOB.png"
                  alt="Website Logo"
                  width={530}
                  height={50}
                />
              </div>

              <div>
                <Image
                  src="/BTL-SIG-JOEL.png"
                  alt="Website Logo"
                  width={530}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
