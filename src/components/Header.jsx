import { useRouter } from "next/router";
import SearchBar from "../components/SearchBar";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Header({ setResults }) {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const lang = locale === "ua" ? "ru" : "ua";
  const homepage = locale === "ua" ? "НА ГОЛОВНУ" : "НА ГЛАВНУЮ";

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

    const themeName =
     locale == "ua" ? "ЗМИНИТИ ТЕМУ" : "СМЕНИТЬ ТЕМУ";


  return (
    <div className="flex items-center justify-between pr-2 pt-4">
      <div className="pl-8 font-medium text-indigo-700">
        <Link href="/">
          VOX
          <span className="text-gray-700 dark:text-gray-200 dark:opacity-90">
            CHECK
          </span>
        </Link>
      </div>
      <div>
        {/* <SearchBar setResults={setResults} placeholder={placeholder} /> */}
      </div>
      <div className="flex">
        {pathname == "/search" ? (
          <p className="mr-2 cursor-pointer pr-2 text-[13px] font-medium text-indigo-700">
            <Link href="/">{homepage}</Link>
          </p>
        ) : (
          <p className="mr-4 cursor-pointer">
            <Link href="/search">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.0371 13.2131C10.511 15.7772 6.41324 15.7796 3.88435 13.2185C1.35547 10.6574 1.35307 6.50256 3.87909 3.93843C6.40511 1.3743 10.5029 1.37193 13.0318 3.93304C15.5607 6.49415 15.5631 10.649 13.0371 13.2131ZM13.8151 15.213C10.4944 17.9751 5.58383 17.7859 2.48077 14.6433C-0.824223 11.2962 -0.827316 5.86628 2.47386 2.51529C5.77504 -0.83569 11.1304 -0.83883 14.4354 2.50828C17.5384 5.65088 17.7308 10.6295 15.0104 13.9997L21.0243 20.0902L19.829 21.3035L13.8151 15.213Z"
                  fill="#4F46E5"
                  fill-opacity="0.8"
                />
              </svg>
            </Link>
          </p>
        )}

        <p
          className="cursor-pointer select-none pr-2 text-[13px] font-medium text-indigo-700 dark:text-gray-200 dark:opacity-90"
          onClick={() =>
            router.push({ pathname, query }, asPath, { locale: lang })
          }
        >
          {locale === "ua" ? "РОСІЙСЬКА" : "УКРАИНСКИЙ"}
        </p>
        <p
          className="ml-2 select-none cursor-pointer pr-2 text-[13px] font-medium text-indigo-700 dark:text-indigo-100"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {themeName}
        </p>
      </div>
    </div>
  );
}
