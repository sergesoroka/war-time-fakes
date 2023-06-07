import Image from "next/image";
import { useTheme } from "next-themes";

function SponsorsLogos() {
  const { theme } = useTheme();

  console.log(theme);
  return (
    <div className="md:mx-8 my-2 items-center gap-8 justify-between lg:flex">
      <Image
        className="h-[30px] w-[165px] mt-4"
        src="/Moving-Forward-Together.png"
        width={165}
        height={30}
        alt="Moving Forward Together logo"
      />
      <Image
        className="h-[30px] w-[110px] mt-4"
        src={theme && theme == 'dark'? "/IAA-w.png" :"/IAA.png"}
        width={110}
        height={30}
        alt="IAA logo"
      />
      <Image className="mt-4" src="/TIU.png" width={123} height={40} alt="TIU logo" />
      <Image className="mt-4" src={theme && theme == 'dark'? "/VOX-w.png" :"/VOX.png"} width={56} height={40} alt="Vox logo" />
      <Image className="mt-4" src="/UDF.png" width={89} height={40} alt="UDF logo" />
    </div>
  );
}

export default SponsorsLogos;
