import Link from "next/link";
import SponsorsLogos from '../components/SponsorsLogos';
import { useRouter } from "next/router";
// import {} from '../../public/Moving-Forward-Together-logo.png'

export default function Footer() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="mb-6 mt-4 md:flex h-8 w-full justify-between border-t border-indigo-600 p-6 text-sm font-medium uppercase">
      <div className="">
        © 2023 <span className="text-indigo-600">VoxUkraine</span>
      </div>
<SponsorsLogos />
      <div className="text-indigo-600 hover:text-indigo-700 dark:text-gray-200 dark:opacity-90">
        <Link href="/about">
          {locale === "ua" ? "Про проєкт" : "О проекте"}
        </Link>
      </div>
    </div>
  );
}
