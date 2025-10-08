"use client";

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 md:mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-3 sm:p-4">
            <div className="bg-yellow-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-white text-lg sm:text-xl">⚡</span>
            </div>
            <h3 className="text-md sm:text-lg font-semibold mb-1 sm:mb-2">Fast Results</h3>
            <p className="text-gray-600 text-xs sm:text-sm">See results in as little as 30 days</p>
          </div>
          <div className="text-center p-3 sm:p-4">
            <div className="bg-yellow-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-white text-lg sm:text-xl">🎯</span>
            </div>
            <h3 className="text-md sm:text-lg font-semibold mb-1 sm:mb-2">Targeted Approach</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Reach the right audience every time</p>
          </div>
          <div className="text-center p-3 sm:p-4">
            <div className="bg-yellow-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-white text-lg sm:text-xl">📊</span>
            </div>
            <h3 className="text-md sm:text-lg font-semibold mb-1 sm:mb-2">Data-Driven</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Make decisions based on real data</p>
          </div>
          <div className="text-center p-3 sm:p-4">
            <div className="bg-yellow-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-white text-lg sm:text-xl">🔒</span>
            </div>
            <h3 className="text-md sm:text-lg font-semibold mb-1 sm:mb-2">Secure & Reliable</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Your data is safe with us</p>
          </div>
          <div className="text-center p-3 sm:p-4">
            <div className="bg-yellow-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-white text-lg sm:text-xl">💬</span>
            </div>
            <h3 className="text-md sm:text-lg font-semibold mb-1 sm:mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-xs sm:text-sm">We're here when you need us</p>
          </div>
          <div className="text-center p-3 sm:p-4">
            <div className="bg-yellow-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-white text-lg sm:text-xl">💰</span>
            </div>
            <h3 className="text-md sm:text-lg font-semibold mb-1 sm:mb-2">Cost Effective</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Get maximum ROI on your investment</p>
          </div>
        </div>
      </div>
    </section>
  );
}

