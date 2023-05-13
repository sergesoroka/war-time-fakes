import { motion } from "framer-motion";
import { format } from "date-fns";
import { uk, ru } from "date-fns/locale";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Card({ cardData, cat, index }) {
  const router = useRouter();
  const { locale } = router;

  const lang = locale === "ua" ? uk : ru;

  const colorCat =
    cat === "НЕПРАВДА"
      ? "text-red-600"
      : cat === "МАНІПУЛЯЦІЯ"
      ? "text-amber-400"
      : cat === "ФОТОФЕЙК"
      ? "text-sky-600"
      : "text-indigo-600";

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
      <p className="text-xs text-gray-500">
        <span className={`text-sm tracking-wider ${colorCat} mr-4 font-bold`}>
          {locale === "ua"
            ? cardData.categories[0].title
            : cardData.categories[0].title_ru}
        </span>
        {format(new Date(cardData.date), "dd MMMM yyyy", { locale: lang })}
      </p>
      <Link href={cardData.url} target="_blank" rel="noreferrer">
        <h2 className="mt-4 font-medium text-gray-800 transition duration-300 ease-in-out hover:text-violet-600">
          {locale === "ua" ? cardData.title : cardData.title_ru}
        </h2>
      </Link>
      <p className="mt-4 text-xs font-bold text-gray-500"># TAG</p>
    </motion.div>
  );
}
