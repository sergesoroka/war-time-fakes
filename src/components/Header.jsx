import { useRouter } from "next/router";

export default function VOXCHECK() {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  
  const lang = locale === 'ua' ? 'ru' : 'ua'

  return (
    <div className="flex justify-between pt-4 pr-4">
      <div className="text-indigo-700 pt-2 pl-11">
        VOX<span className="text-gray-700">CHECK</span>
      </div>
      <div className="cursor-pointer font-medium text-indigo-700 text-[13px] pr-2"
        onClick={() =>
          router.push({ pathname, query }, asPath, { locale: lang })
        }
      >
        {locale === 'ua' ? 'РОСІЙСЬКА' : 'УКРАИНСКИЙ'}
      </div>
    </div>
  );
}
