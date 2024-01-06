import { Switch } from "antd"

export default function Switching({func}){
    return(
        <Switch checkedChildren={"Dark"} unCheckedChildren={"Light"} onChange={(e) => func(e)} />
    )
}