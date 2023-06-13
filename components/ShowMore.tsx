'use client'

import { useRouter } from "next/navigation"
import Button from "./Button";
import updateSearchParams from "@/constants";

interface ShowMoreProps {
  pageNumber: number;
  isNext?: boolean;
}

const ShowMore: React.FC<ShowMoreProps> = ({
  pageNumber,
  isNext
}) => {

  const router = useRouter()

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10
    const url = updateSearchParams("limit", `${newLimit}`)

    router.push(url)
  }

  return (
    <div className="w-full flex items-center justify-center gap-5 mt-10">
      {!isNext && (
        <Button
          className="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        >
          Show More
        </Button>
      )}
    </div>  
  )
}

export default ShowMore