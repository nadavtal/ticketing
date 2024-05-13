
const FileInput = ({ onChange }) => {
    return           <input
    type="file"
    onChange={(event) => {
      const file = event.target.files[0];
    //   console.log(file)
      const fileUrl = URL.createObjectURL(file);
      //get extension
      const extension = file.name.split('.').pop();
      onChange(file, extension, fileUrl);

      
      // const reader = new FileReader();

      // reader.onloadend = () => {
      //   setImageSrc(reader.result);
      // };

      // if (file) {
      //   reader.readAsDataURL(file);
      // }
    }}
  />
}

export default FileInput;