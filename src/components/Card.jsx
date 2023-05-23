import { motion } from "framer-motion";
import { format } from "date-fns";
import { uk, ru } from "date-fns/locale";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Card({ cardData, index }) {
  const router = useRouter();
  const { locale } = router;

  const lang = locale === "ua" ? uk : ru;

  console.log(cardData.tags);

  // const colorCat =
  //   cardData.categories[0].title === "НЕПРАВДА"
  //     ? "text-red-600"
  //     : cardData.categories[0].title === "МАНІПУЛЯЦІЯ"
  //     ? "text-amber-400"
  //     : cardData.categories[0].title === "ФОТОФЕЙК"
  //     ? "text-sky-600"
  //     : "text-indigo-600";

  return (
    <motion.div
      className=" m-4"
      initial={{ opacity: 0, y: -35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        index < 3
          ? { duration: 0.3, type: "spring" }
          : { duration: 0.6, type: "spring" }
      }
    >
      <p className="text-xs text-gray-500 dark:text-gray-200 dark:opacity-60">
        <span
          className={`mr-4 text-sm font-bold tracking-wider text-indigo-800 dark:text-indigo-500`}
        >
          {cardData.categories.map((cat) => (
            <span key={cat.id}>
              {locale === "ua" ? cat.title : cat.title_ru}
            </span>
          ))}
        </span>
        {format(new Date(cardData.date), "dd MMMM yyyy", { locale: lang })}
      </p>
      <h2 className="mt-4 mb-2 font-medium text-gray-800 transition duration-300 ease-in-out hover:text-violet-600 dark:text-gray-200 dark:opacity-90">
        <Link href={cardData.url} target="_blank" rel="noreferrer">
          {locale === "ua" ? cardData.title : cardData.title_ru}
        </Link>
      </h2>
      {cardData.tags.map((tag) => (
        <span key={tag.id} className="mt-1 mr-3 inline-block text-[10px] tracking-wider uppercase font-medium text-gray-700 dark:text-gray-200 dark:opacity-60">
           #&nbsp;{locale === "ua" ? tag.title : tag.title_ru} 
        </span>
      ))}
    </motion.div>
  );
}
