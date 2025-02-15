import make from "../assets/our-grading.png";
import Navbar from "./Navbar";
import coin17 from "../assets/icon.jpg";
import coin from "../assets/14763004658117789537.jpg";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <Navbar />
      
      {/* Main section with gradient background */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
        <div className="flex flex-col items-center max-w-screen-xl px-6 py-12 space-y-8 md:space-y-0">
          {/* Text Section */}
          <div className="text-white max-w-lg space-y-6 text-center md:text-left">
            <h4 className="text-3xl sm:text-4xl font-bold text-white">ABOUT ACC</h4>
            <h4 className="text-xl sm:text-2xl font-semibold text-gray-100">
              With an unparalleled commitment to accuracy, consistency, and
              integrity, Abrahams Coin Collection (ACC) is the world’s largest
              and most trusted third-party grading service for coins, tokens,
              and medals.
            </h4>
            <p className="text-base sm:text-lg text-blue-200">
              Since 1987, ACC has graded more than 60 million coins, each one
              backed by the industry-leading ACC Guarantee.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-8 md:mt-0">
            <img src={make} alt="Coin Grading" className="max-w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Our Grading and Our Holder Section */}
      <div className="w-full bg-gray-50 flex flex-col items-center justify-center gap-12 pt-7 pb-12 px-4 sm:px-8">
        {/* Grading Section */}
        <div className="text-center w-full md:w-auto">
          <div className="pl-4">
            <img src={coin} className="h-[200px] w-auto mx-auto rounded-lg shadow-md" />
          </div>
          <div>
            <h3 className="text-black text-2xl sm:text-3xl font-semibold pt-4">Our Grading</h3>
            <p className="text-blue-700 text-center pt-3 text-base sm:text-lg px-4">
              ACC employs more than 30 full-time coin graders as well as outside consultants. 
              To ensure impartiality, ACC and its full-time graders do not buy and sell coins commercially, 
              and strict procedures are in place to prevent consultants from influencing the grades assigned to their own submissions. 
              The combined expertise of the ACC grading team results in unparalleled accuracy and consistency.
            </p>
          </div>
        </div>

        {/* Holder Section */}
        <div className="text-center w-full md:w-auto">
          <div className="pl-4 sm:pl-8">
            <img src={coin17} className="h-[200px] w-auto mx-auto bg-amber-500 rounded-lg shadow-md" />
          </div>
          <div>
            <h3 className="text-black text-2xl sm:text-3xl font-semibold pt-4">Our Holder</h3>
            <p className="text-blue-700 text-center pt-3 text-base sm:text-lg px-4">
              NGC invested more than $1 million in research and development to create the most advanced protective holder for coins, tokens, and medals. 
              Designed for long-term preservation, the NGC holder is used by the Smithsonian Institution and other museums around the world to protect their most treasured rarities.
            </p>
          </div>
        </div>
      </div>

      {/* Our Guarantee Section */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-teal-500 py-8 px-4 sm:px-8">
        <h4 className="text-center text-2xl sm:text-3xl text-black font-bold">
          Our Guarantee
        </h4>
        <p className="text-base sm:text-lg pt-4 text-center text-black">
          Collectors have greater confidence in NGC-certified coins because the coins are backed by the NGC Guarantee, the strongest in the industry. 
          The NGC Guarantee provides one of several remedies in the rare event that an NGC-certified coin is determined to be not genuine or overgraded.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default About;
