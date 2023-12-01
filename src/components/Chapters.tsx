import cs from "../assets/cs.png";
import ras from "../assets/ras.png";
import embs from "../assets/embs.png";
import wie from "../assets/wie.png";
import pes from "../assets/pes.png";
import pels from "../assets/pels.png";

function ChapterItem(props: { img?: string }) {
  return (
    <div className="p-6 md:p-10 bg-gray-100 rounded-lg dark:bg-slate-800 flex items-center justify-center">
      {/*<svg*/}
      {/*    className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-gray-200"*/}
      {/*    enableBackground="new 0 0 2499 614"*/}
      {/*    viewBox="0 0 2499 614"*/}
      {/*    xmlns="http://www.w3.org/2000/svg"*/}
      {/*>*/}
      {/*    <path*/}
      {/*        d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z"*/}
      {/*        fill="currentColor"*/}
      {/*    />*/}
      {/*</svg>*/}
      <img
        className="dark:brightness-0 dark:invert max-h-16"
        src={props.img}
        alt={"chapter logo"}
      />
    </div>
  );
}

export default function Chapters() {
  return (
    <>
      {/* Clients */}
      <div className="max-w-[70rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
          <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
            Find communities that share your interests.
          </h2>
        </div>
        {/* End Title */}
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-6">
          {[cs, ras, embs, wie, pes, pels].map((src, index) => (
            <ChapterItem key={index} img={src} />
          ))}
        </div>
        {/* End Grid */}
      </div>
      {/* End Clients */}
    </>
  );
}
