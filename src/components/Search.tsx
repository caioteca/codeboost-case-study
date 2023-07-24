import Image from "next/image";
import IconSearch from "@/assets/icon-search.svg";
export function Search() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={IconSearch}
        alt="Search" />
      <input type="text" placeholder="Buscar" className="bg-transparent outline-none text-white placeholder:text-white" />
    </div>
  )
}