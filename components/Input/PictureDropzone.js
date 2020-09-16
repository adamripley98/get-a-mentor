import React from "react";
import Dropzone from "react-dropzone";

export default ({ updateProfilePic, profilePicture }) => {
  const handleDrop = acceptedFiles => {
    const img = acceptedFiles[0];
    const imgName = img.name;
    console.log("imgName", imgName);
    const reader = new FileReader();

    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      const file = reader.result;
      console.log("binStr", file);
      updateProfilePic(imgName, file);
    };
    reader.readAsDataURL(img);
  };

  return (
    <Dropzone
      className="w-full"
      onDrop={acceptedFiles => handleDrop(acceptedFiles)}
    >
      {({ getRootProps, getInputProps }) => (
        <section className="h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm pt-3 px-4 appearance-none leading-normal">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {profilePicture && profilePicture.imgName ? (
              <p>{profilePicture.imgName}</p>
            ) : (
              <p className="text-gray-500">Click to select file</p>
            )}
          </div>
        </section>
      )}
    </Dropzone>
  );
};
