import features from "../assets/features.svg";
export default function Features() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl">
        <h2 className="text-[#1DAA1D] font-medium mb-4">Our main features</h2>
        <h3 className="text-3xl font-bold text-gray-900 ">
          Cool Reward System for <br /> Orders
        </h3>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="flex gap-6 lg:px-20">
          <div className="flex-shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <img src={features} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              What you get
            </h4>
            <p className="text-gray-600 leading-relaxed">
              If you order foods to our restaurant, you will get $ELO as
              rewards. If you are a customer or investor, you can get more
              rewards. This means you got cool rewards from us instead of
              orders.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <img src={features} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Extra services
            </h4>
            <p className="text-gray-600 leading-relaxed">
              We will provide more extra services so that our $ELO has got more
              valuable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
