
import FileInput from "./FileInput";
import { setModelsUrls } from "../state/models/modelsSlice";
import { useSelector, useDispatch } from "react-redux";
import { setIconsUrls } from "../state/shapes/shapesSlice";
 
const Icons = ({
      onClick
}) => {
    const iconsUrls = useSelector((state) => state.shapes.iconsUrls);
    const dispatch = useDispatch();
    // console.log(iconsUrls)
  return (
    <div className="">
        <h1>Icons</h1>
        <FileInput 
          onChange={(file, extension, fileUrl) => {
            console.log(file, extension, fileUrl)
            if (extension === "svg") {
              dispatch(setIconsUrls([...iconsUrls, fileUrl]));
            }
          }}
        />
    </div>
  );
}

export default Icons;
