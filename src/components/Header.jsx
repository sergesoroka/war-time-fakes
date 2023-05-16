import { useRouter } from "next/router";
import SearchBar from "../components/SearchBar";

export default function Header({ setResults }) {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const lang = locale === "ua" ? "ru" : "ua";
  const placeholder = locale === "ua" ? "Пошук фейків" : "Поиск фейков";

  return (
    <div className="flex justify-between pr-4 pt-4">
      <div className="pl-11 pt-2 text-indigo-700">
        VOX<span className="text-gray-700">CHECK</span>
      </div>
      <div>
        <SearchBar setResults={setResults} placeholder={placeholder} />
      </div>
      <div
        className="cursor-pointer pr-2 text-[13px] font-medium text-indigo-700"
        onClick={() =>
          router.push({ pathname, query }, asPath, { locale: lang })
        }
      >
        {locale === "ua" ? "РОСІЙСЬКА" : "УКРАИНСКИЙ"}
      </div>
    </div>
  );
}
