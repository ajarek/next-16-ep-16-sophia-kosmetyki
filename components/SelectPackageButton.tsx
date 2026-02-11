"use client"
import { Button } from "./ui/button"
import { toast } from "sonner"

const SelectPackageButton = ({ selected }: { selected: boolean }) => {
  const handleClick = () => {
    toast("Wybrano pakiet")
  }
  return (
    <Button
      variant={selected ? "default" : "outline"}
      className='w-full mt-12'
      onClick={handleClick}
    >
      Wybierz pakiet
    </Button>
  )
}

export default SelectPackageButton
