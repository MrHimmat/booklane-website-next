"use client";

const reviews = [
  {
    name: "Sandip Gadekar",
    text: "BookLane is a great app for buying and selling used books. It’s easy to use, has helpful features like location-based search and image previews, and offers a wide range of books at affordable prices. Perfect for students and book lovers..!",
  },
  {
    name: "Shivraj Bankar",
    text: "Booklane is a great app to buy and sell old books directly. Easy to use, fast, and helpful for students and book lovers. Promotes reuse and saves money. Highly recommended!",
  },
  {
    name: "Ganesh Jadhav",
    text: "Great app for buying and selling books , Easy to update and list books for resale or add new ones to sell . very user-friendly",
  },
  {
    name: "shreya giramkar",
    text: "Best app It deserves great support ☺️",
  },
  {
    name: "kiran patil",
    text: "very useful app",
  },
  {
    name: "vishwajeet kharat",
    text: "Easily buy and sell second-hand academic books near you. Save money, find great deals, and give your old books a new home. Perfect for students!",
  },
];

export default function Reviews() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,#2196F3,#43E97B)1] md:py-20">
        <div className="flex justify-center items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
          <span
            id="about"
            className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent"
          >
            Reviews
          </span>
        </div>
        <div className="mx-auto max-w-3xl pb-12 text-center">
          {/* <div className="h-px w-16 mx-auto mb-6 bg-[linear-gradient(to_right,#2196F3_0%,#43E97B_100%)]" /> */}
          <h2 className="bg-[linear-gradient(to_right,#2196F3_0%,#43E97B_100%)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Our Users Reviews
          </h2>
        </div>
        <div className="mx-auto grid max-w-sm items-stretch gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-green-400 to-blue-500 p-px"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950">
                <div className="p-6 pb-16">
                  <p className="italic mb-4 ">{review.text}</p>
                </div>
                <div className="absolute bottom-4 right-6 text-right text-sm font-medium bg-[linear-gradient(to_right,#2196F3_0%,#43E97B_100%)])]">
                  — {review.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
