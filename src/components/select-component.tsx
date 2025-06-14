import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type SelectComponentProps = {
  options: {
    label: string
    value: string
  }[]
  placeholder: string
  onChange: (value: string) => void
}

export default function SelectComponent(props: SelectComponentProps) {
  return (
    <>
      <Select onValueChange={props.onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent>
          {props.options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}