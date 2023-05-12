import { useRouter } from "next/router";

export default function Months({ setMonth, month }) {
  const router = useRouter();
  const { locale } = router;

  const months = [
    { id: 1, monthUk: "Січень", monthRu: "Январь" },
    { id: 2, monthUk: "Лютий", monthRu: "Февраль" },
    { id: 3, monthUk: "Березень", monthRu: "Март" },
    { id: 4, monthUk: "Квітень", monthRu: "Апрель" },
    { id: 5, monthUk: "Травень", monthRu: "Май" },
    { id: 6, monthUk: "Червень", monthRu: "Июнь" },
    { id: 7, monthUk: "Липень", monthRu: "Июль" },
    { id: 8, monthUk: "Серпень", monthRu: "Август" },
    { id: 9, monthUk: "Вересень", monthRu: "Сентябрь" },
    { id: 10, monthUk: "Жовтень", monthRu: "Октябрь" },
    { id: 11, monthUk: "Лістопад", monthRu: "Ноябрь" },
    { id: 12, monthUk: "Грудень", monthRu: "Декабрь" },
  ];
  return (
    <div className="flex justify-between">
      {months.map((monthItem, i) => (
        <div
          className={
            month !== monthItem.id
              ? "border-solid text-[12px] font-medium text-gray-700  tracking-wider border hover:text-white hover:bg-indigo-500  hover:border-indigo-500 border-indigo-600 cursor-pointer rounded-full px-3 py-1"
              : "border-solid text-[12px] font-medium text-white bg-indigo-600 tracking-wider border border-indigo-600  rounded-full px-3 py-1"
          }
          key={monthItem.id}
          onClick={() => setMonth(monthItem.id)}
        >
          {locale === "ua" ? monthItem.monthUk : monthItem.monthRu}
        </div>
      ))}
    </div>
  );
}
