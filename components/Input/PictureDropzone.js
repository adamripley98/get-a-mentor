import React from "react";
import Dropzone from "react-dropzone";

const handleDrop = acceptedFiles => {
  console.log("handling", acceptedFiles);
};

export default () => (
  <Dropzone
    className="w-full"
    onDrop={acceptedFiles => handleDrop(acceptedFiles)}
  >
    {({ getRootProps, getInputProps }) => (
      <section className="h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm pt-3 px-4 appearance-none leading-normal">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p className="text-gray-500">Click to select file</p>
        </div>
      </section>
    )}
  </Dropzone>
);
