import { useRouter } from "next/router";

export default function Months({ setMonth, month, setPage }) {
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
    <div className="flex flex-wrap lg:justify-between">
      {months.map((monthItem, i) => (
        <div
          className={
            month !== monthItem.id
              ? "cursor-pointer select-none rounded-full border border-solid  border-indigo-600 mb-4 mr-2 px-3 py-1 text-[10px] lg:text-[12px]  font-medium tracking-wider text-gray-700 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white"
              : "select-none rounded-full border border-solid border-indigo-600 bg-indigo-600 mb-4 mr-2 px-3 py-1 text-[10px] lg:text-[12px]  font-medium tracking-wider text-white"
          }
          key={monthItem.id}
          onClick={() => {
            setMonth(monthItem.id);
            setPage(0);
          }}
        >
          {locale === "ua" ? monthItem.monthUk : monthItem.monthRu}
        </div>
      ))}
    </div>
  );
}
