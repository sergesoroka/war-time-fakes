import { useRouter } from "next/router";

export default function VOXCHECK() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const lang = locale === "ua" ? "ru" : "ua";

  return (
    <div className="flex justify-between pr-4 pt-4">
      <div className="pl-11 pt-2 text-indigo-700">
        VOX<span className="text-gray-700">CHECK</span>
      </div>
      <div>
        <input className="w-96 border-indigo-600 px-4 h-8 rounded-full"
          type="text"
          // value={value}
          // onChange={handleChange}
          // placeholder={placeholdrer}
        />
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
