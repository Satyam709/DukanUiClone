import { atom } from "recoil";

 const visibility = atom(
    {
        key:"visibility",
        default:true
    }
);

export default visibility;