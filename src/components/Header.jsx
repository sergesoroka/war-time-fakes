import { useRouter } from "next/router";
import SearchBar from "../components/SearchBar";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Header({ setResults }) {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const lang = locale === "ua" ? "ru" : "ua";
  const homepage = locale === "ua" ? "НА ГОЛОВНУ" : "НА ГЛАВНУЮ";

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const themeName = locale == "ua" ? "ЗМИНИТИ ТЕМУ" : "СМЕНИТЬ ТЕМУ";
  const [nightIcon, setNightIcon] = useState(false);

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
      <div className="flex items-center">
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
          className="ml-2 cursor-pointer select-none pr-2 text-[13px] font-medium text-indigo-700 dark:text-indigo-100"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {nightIcon ? (
            <svg
              onClick={() => setNightIcon(!nightIcon)}
              width="34"
              height="42"
              viewBox="0 0 34 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.4044 16L8.94912 16C9.02151 11.794 12.4536 8.40679 16.6768 8.40679C20.9 8.40679 24.332 11.794 24.4044 16Z"
                fill="#D9D9D9"
                fill-opacity="0.2"
              />
              <rect
                x="16.2712"
                width="1.82301"
                height="7.32203"
                rx="0.911503"
                fill="#D9D9D9"
                fill-opacity="0.2"
              />
              <rect
                y="16"
                width="1.82301"
                height="7.32203"
                rx="0.911503"
                transform="rotate(-90 0 16)"
                fill="#D9D9D9"
                fill-opacity="0.2"
              />
              <rect
                width="1.82301"
                height="7.32203"
                rx="0.911503"
                transform="matrix(0 -1 -1 0 33.6055 16)"
                fill="#D9D9D9"
                fill-opacity="0.2"
              />
              <rect
                x="4.33899"
                y="5.10608"
                width="1.82301"
                height="7.32203"
                rx="0.911503"
                transform="rotate(-45 4.33899 5.10608)"
                fill="#D9D9D9"
                fill-opacity="0.2"
              />
              <rect
                width="1.82301"
                height="7.32203"
                rx="0.911503"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 29.2665 5.10608)"
                fill="#D9D9D9"
                fill-opacity="0.2"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.8352 38.5358C24.1133 38.7448 23.3502 38.8569 22.561 38.8569C18.054 38.8569 14.4004 35.2032 14.4004 30.6963C14.4004 28.948 14.9502 27.328 15.8864 26C12.486 26.9847 10 30.1217 10 33.8394C10 38.3464 13.6536 42 18.1606 42C20.9192 42 23.3581 40.6312 24.8352 38.5358Z"
                fill="#D9D9D9"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setNightIcon(!nightIcon)}
              width="34"
              height="42"
              viewBox="0 0 34 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.4044 16L8.94912 16C9.02151 11.794 12.4536 8.40679 16.6768 8.40679C20.9 8.40679 24.332 11.794 24.4044 16Z"
                fill="#F9D20A"
              />
              <rect
                x="16.2712"
                width="1.82301"
                height="7.32203"
                rx="0.911503"
                fill="#F9D20A"
              />
              <rect
                y="16"
                width="1.82301"
                height="7.32203"
                rx="0.911503"
                transform="rotate(-90 0 16)"
                fill="#F9D20A"
              />
              <rect
                width="1.82301"
                height="7.32203"
                rx="0.911503"
                transform="matrix(0 -1 -1 0 33.6055 16)"
                fill="#F9D20A"
              />
              <rect
                x="4.33899"
                y="5.10608"
                width="1.82301"
                height="7.32203"
                rx="0.911503"
                transform="rotate(-45 4.33899 5.10608)"
                fill="#F9D20A"
              />
              <rect
                width="1.82301"
                height="7.32203"
                rx="0.911503"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 29.2665 5.10608)"
                fill="#F9D20A"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.8352 38.5358C24.1133 38.7448 23.3502 38.8569 22.561 38.8569C18.054 38.8569 14.4004 35.2032 14.4004 30.6963C14.4004 28.948 14.9502 27.328 15.8864 26C12.486 26.9847 10 30.1217 10 33.8394C10 38.3464 13.6536 42 18.1606 42C20.9192 42 23.3581 40.6312 24.8352 38.5358Z"
                fill="#8F93FF"
                fill-opacity="0.4"
              />
            </svg>
          )}
        </p>
      </div>
    </div>
  );
}
