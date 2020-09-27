import Button from "./button";
import ReactCrop from "react-image-crop";

class Crop extends React.Component {
  state = {
    src: null,
    showModal: false,
    imageUploaded: false
  };

  onSelectFile = e => {
    this.setState({
      showModal: true
    });
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = event => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const elem = document.createElement("canvas");
          const width = Math.min(img.width, 2000);
          const scaleFactor = width / img.width;
          elem.width = width;
          elem.height = img.height * scaleFactor;
          const ctx = elem.getContext("2d");
          ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
          const image = ctx.canvas.toDataURL("image/jpeg");
          this.setState({ src: image });
        };
      };
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.setState({
      crop: {
        unit: "px",
        aspect: 1 / 1,
        height: image.height * 0.75
      }
    });
    this.imageRef = image;
    return false; // Return false when setting crop state in here.
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop });
  };

  handleUpload = () => {
    this.makeClientCrop(this.state.crop);
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(this.imageRef, crop);
      this.setState({
        croppedImageUrl,
        imageUploaded: true,
        showModal: false
      });
      this.props.setImg(croppedImageUrl);
    }
  }

  getCroppedImg(image, crop) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    return canvas.toDataURL("image/jpeg");
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;

    return (
      <div className="h-12 focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm pt-3 px-4 appearance-none leading-normal">
        <label>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            id="fileInput"
            onChange={this.onSelectFile}
          />
          {this.state.imageUploaded ? (
            <span>Image uploaded</span>
          ) : (
            <span className="text-gray-500">Click to upload image</span>
          )}
        </label>
        {src && (
          <div
            className={`fixed overflow-auto z-40 px-4 flex items-center w-full h-full bg-black bg-opacity-25 top-0 left-0 ${
              this.state.showModal ? "block" : "hidden"
            }`}
          >
            <div
              className="modal-content h-1/2 w-full md:w-2/3 lg:w-1/2 bg-white py-8 px-4 border border-solid rounded-sm border-gray-300 flex flex-col items-center"
              style={{
                boxShadow: "0 10px 28px rgba(0,0,0,.08)"
              }}
            >
              <div className="container px-10">
                <h1 className="font-bold text-xl mb-4">
                  Crop your image appropriately
                </h1>
                <div className="flex justify-center">
                  <ReactCrop
                    src={src}
                    crop={crop}
                    ruleOfThirds
                    circularCrop
                    onImageLoaded={this.onImageLoaded}
                    onComplete={this.onCropComplete}
                    onChange={this.onCropChange}
                  />
                </div>
                <span
                  className="flex justify-center mt-4"
                  onClick={this.handleUpload}
                >
                  <Button size="lg">UPLOAD</Button>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Crop;
