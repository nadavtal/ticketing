
import FileInput from "./FileInput";
import { setModelsUrls } from "../state/models/modelsSlice";
import { useSelector, useDispatch } from "react-redux";
 
const Models = ({
    shapes,
    onClick
}) => {
    const modelsUrls = useSelector((state) => state.models.modelUrls);
    const dispatch = useDispatch();
    console.log(modelsUrls)
  return (
    <div className="">
        <h1>Models</h1>
        <FileInput 
          onChange={(file, extension, fileUrl) => {
            console.log(file, extension, fileUrl)
            if (extension === "glb") {
              dispatch(setModelsUrls([...modelsUrls, fileUrl]));
            }
          }}
        />
    </div>
  );
}

export default Models;
