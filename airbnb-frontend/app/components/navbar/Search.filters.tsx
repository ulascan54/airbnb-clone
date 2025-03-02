import { Search } from "lucide-react"

const SearchFilters = () => {
  return (
    <div className="h-[48px] lg:h-[64px] flex items-center flex-row justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="cursor-pointer w-[250px] h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Where</p>
            <p className="text-sm">Wanted Loacation</p>
          </div>
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check in</p>
            <p className="text-sm">Add dates</p>
          </div>
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check out</p>
            <p className="text-sm">Add dates</p>
          </div>
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm">Add guests</p>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="p-2 lg:p-4  bg-airbnb-red rounded-full text-white hover:bg-airbnb-dark transition cursor-pointer">
          <Search size={18} />
        </div>
      </div>
    </div>
  )
}

export default SearchFilters
