export default function Sidebar({year, setYear, category, setCategory}) {
  console.log(year, category);
  
  return (
    <div>
      <ul className="text-gray-500 text-xs font-bold ml-4">
        <li className="mt-4 cursor-pointer tracking-wider" onClick={() => setYear(2022)}>2022</li>
        <li className="mt-4 cursor-pointer tracking-wider" onClick={() => setYear(2023)}>2023</li>
      </ul>
      <ul className="text-gray-500 text-xs font-bold ml-4">
        <li className="mt-4 cursor-pointer tracking-wider" onClick={() => setCategory('ФЕЙК')}>ФЕЙК</li>
        <li className="mt-4 cursor-pointer tracking-wider" onClick={() => setCategory('НЕПРАВДА')}>НЕПРАВДА</li>
        <li className="mt-4 cursor-pointer tracking-wider" onClick={() => setCategory('МАНІПУЛЯЦІЯ')}>МАНІПУЛЯЦІЯ</li>
        <li className="mt-4 cursor-pointer tracking-wider" onClick={() => setCategory('БЕЗПІДСТАВНО')}>БЕЗПІДСТАВНО</li>
      </ul>
    </div>
  );
}
