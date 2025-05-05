import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <div className="container mx-auto px-3">
      <>
        <div className="rounded-3xl mt-5 h-[300px] flex flex-col justify-center items-center px-5 border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
          <h1 className="text-center text-4xl font-bold">EDU</h1>
          <h2 className="text-center text-3xl font-semibold">Access top-quality educational content and master new skills at your own pace.</h2>
        </div>
      </>

      <>
        <div className="rounded-3xl mt-5 h-[300px] flex flex-col justify-center items-center px-5 border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
          <h1 className="text-center text-4xl font-bold">Talk</h1>
          <h2 className="text-center text-3xl font-semibold">Join the conversation! Connect, share ideas, and communicate with others.</h2>
        </div>
      </>

      <>
        <div className="rounded-3xl mt-5 h-[300px] flex flex-col justify-center items-center px-5 border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
          <h1 className="text-center text-4xl font-bold">Webtoon</h1>
          <h2 className="text-center text-3xl font-semibold">Enjoy exciting and creative webtoons crafted by talented artists.</h2>
        </div>
      </>

      <>
        <div className="rounded-3xl mt-5 h-[300px] flex flex-col justify-center items-center px-5 border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
          <h1 className="text-center text-4xl font-bold">Game</h1>
          <h2 className="text-center text-3xl font-semibold">Have fun and learn at the same time with our interactive games.</h2>
        </div>
      </>

      <>
        <div className="rounded-3xl mt-5 mb-5 h-[300px] flex flex-col justify-center items-center px-5 border border-gray-300 dark:border-gray-600 bg-base-200 bg-gradient-to-r from-[#eed9ed]/60 dark:from-[#eed9ed]/10 to-[#2ec05a]/10">
          <h1 className="text-center text-4xl font-bold">Media</h1>
          <h2 className="text-center text-3xl font-semibold">Watch videos, listen to audio content, and explore a wide range of media resources.</h2>
        </div>
      </>

      <Footer />
    </div>
  );
}

export default Home;
