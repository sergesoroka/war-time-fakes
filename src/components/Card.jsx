import { motion } from "framer-motion";
import { format } from "date-fns";
import { uk, ru } from "date-fns/locale";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Card({ cardData, index }) {
  const router = useRouter();
  const { locale } = router;

  const lang = locale === "ua" ? uk : ru;

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
      <h2 className="mb-2 mt-4 select-none font-medium text-gray-800 transition duration-300 ease-in-out hover:text-violet-600 dark:text-gray-200 dark:opacity-90">
        <Link href={cardData.url} target="_blank" rel="noreferrer">
          {locale === "ua" ? cardData.title : cardData.title_ru}
        </Link>
      </h2>
      {cardData.tags.map((tag) => (
        <span
          key={tag.id}
          className="mr-3 mt-1 inline-block text-[10px] font-medium uppercase tracking-wider text-gray-700 dark:text-gray-200 dark:opacity-60"
        >
          <Link href={`/tag/${locale === "ua" ? tag.title : tag.title_ru}`}>
            {" "}
            #&nbsp;{locale === "ua" ? tag.title : tag.title_ru}{" "}
          </Link>
        </span>
      ))}
    </motion.div>
  );
}
