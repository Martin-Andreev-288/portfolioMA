import { Accordion } from "@/features";
import { questAndAnsw } from "@/utils";

function QandA() {
  return (
    <section className="py-12 w-full dark:bg-gray-900">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-5xl font-bold mb-8 border-b-4 border-primary pb-4 w-full dark:border-primary-foreground">
          Question & Answers
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Explore common questions about my work and experience. This optional
          section provides additional insights - feel free to browse topics that
          interest you!
        </p>
        <Accordion data={questAndAnsw} />
      </div>
    </section>
  );
}

export default QandA;
