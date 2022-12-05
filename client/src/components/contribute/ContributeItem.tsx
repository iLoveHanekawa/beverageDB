import { FormObjeType } from "./Contribute";

type ContributeItemType = {
    text: string
    objKey: string
    title: string
    setFormObj: React.Dispatch<React.SetStateAction<FormObjeType>>
}

export default function ContributeItem(props: ContributeItemType) {
    return (
      <div className = 'flex text-md mb-1 text-gray-300 py-1 justify-between'>
          <label className = 'cursor-pointer' htmlFor = {props.title}>{props.title}</label>
          <input value = {props.text} onChange = {(e) => {
              const change = e.currentTarget.value
              props.setFormObj(i => {
                  return { ...i, [props.objKey]: change };
              })
          }} id = {props.title} className = 'text-gray-500 text-sm h-8 w-1/2 indent-3 rounded-full focus:outline-none' />
      </div>
    )
  }