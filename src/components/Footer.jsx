import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="w-full h-8 p-6 mb-6 mt-4 uppercase text-sm font-medium border-t border-indigo-600 flex justify-between">
      <div className="">
        © 2023 <span className="text-indigo-600">VoxUkraine</span>
      </div>
      <div className="text-indigo-600 hover:text-indigo-700">
        
        <Link href='/about'>{locale === "ua" ? "Про проект" : "О проекте"}</Link></div>
    </div>
  );
}
