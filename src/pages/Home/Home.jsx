import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <div className="container mx-auto px-3">
      <div className="rounded-3xl mt-5 h-[200px] xl:h-[300px] flex flex-col gap-2 justify-center items-center px-5 bg-white dark:bg-gray-900 shadow shadow-gray-300 dark:shadow-gray-950">
        <div className="text-center text-2xl xl:text-4xl font-bold flex gap-2">
          <i className="bi bi-columns-gap"></i>
          <span>EDU</span>
        </div>
        <h2 className="text-center text-md xl:text-3xl font-semibold">
          Access top-quality educational content and master new skills at your
          own pace.
        </h2>
      </div>

      <div className="rounded-3xl mt-5 h-[200px] xl:h-[300px] flex flex-col gap-2 justify-center items-center px-5 bg-white dark:bg-gray-900 shadow shadow-gray-300 dark:shadow-gray-950">
        <div className="text-center text-2xl xl:text-4xl font-bold flex gap-2">
          <i className="bi bi-chat-quote"></i>
          <span>Talk</span>
        </div>
        <h2 className="text-center text-md xl:text-3xl font-semibold">
          Join the conversation! Connect, share ideas, and communicate with
          others.
        </h2>
      </div>

      <div className="rounded-3xl mt-5 h-[200px] xl:h-[300px] flex flex-col gap-2 justify-center items-center px-5 bg-white dark:bg-gray-900 shadow shadow-gray-300 dark:shadow-gray-950">
        <div className="text-center text-2xl xl:text-4xl font-bold flex gap-2">
          <i className="bi bi-people"></i>
          <span>Webtoon</span>
        </div>
        <h2 className="text-center text-md xl:text-3xl font-semibold">
          Enjoy exciting and creative webtoons crafted by talented artists.
        </h2>
      </div>

      <div className="rounded-3xl mt-5 h-[200px] xl:h-[300px] flex flex-col gap-2 justify-center items-center px-5 bg-white dark:bg-gray-900 shadow shadow-gray-300 dark:shadow-gray-950">
        <div className="text-center text-2xl xl:text-4xl font-bold flex gap-2">
          <i className="bi bi-controller"></i>
          <span>Game</span>
        </div>
        <h2 className="text-center text-md xl:text-3xl font-semibold">
          Have fun and learn at the same time with our interactive games.
        </h2>
      </div>

      <div className="rounded-3xl mt-5 mb-5 h-[200px] xl:h-[300px] flex flex-col gap-2 justify-center items-center px-5 bg-white dark:bg-gray-900 shadow shadow-gray-300 dark:shadow-gray-950">
        <div className="text-center text-2xl xl:text-4xl font-bold flex gap-2">
          <i className="bi bi-cast"></i>
          <span>Media</span>
        </div>
        <h2 className="text-center text-md xl:text-3xl font-semibold">
          Watch videos, listen to audio content, and explore a wide range of
          media resources.
        </h2>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
