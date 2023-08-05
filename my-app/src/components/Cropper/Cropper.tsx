import "cropperjs/dist/cropper.css";
import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { Cropper, ReactCropperElement } from "react-cropper";

export interface CropperModalProps {
  photo: File | string;
  savePhotoCallback: Function;
  setSelectedPhoto: React.Dispatch<React.SetStateAction<File | undefined>>;
  returnType: string;
}

const CropperModal: React.FC<CropperModalProps> = ({
  photo,
  savePhotoCallback,
  setSelectedPhoto,
  returnType,
}: CropperModalProps) => {
  const cropperRef = useRef<ReactCropperElement>(null);
  const [modalOpend, setModalOpend] = useState<boolean>(true);

  const onSave = () => {
    const cropper = cropperRef.current?.cropper;
    if (returnType == String.name) {
      savePhotoCallback(cropper?.getCroppedCanvas().toDataURL());
    } else if (returnType == File.name) {
      const canvas = cropper?.getCroppedCanvas();
      canvas?.toBlob(
        (blob) => {
          if (blob)
            savePhotoCallback(
              new File([blob], "image.jpg", { type: "image/jpeg" })
            );
        },
        "image/jpeg",
        1
      );
    }
  };

  const rotateImage = (value: number) => {
    if (cropperRef.current) {
      const imageElement: any = cropperRef.current;
      const cropper: Cropper = imageElement.cropper;
      cropper.rotate(value);
    }
  };

  const scaleXImage = () => {
    if (cropperRef.current) {
      const imageElement: any = cropperRef.current;
      const cropper: Cropper = imageElement.cropper;
      cropper.scaleX(cropper.getData().scaleX === -1 ? 1 : -1);
    }
  };

  const scaleYImage = () => {
    if (cropperRef.current) {
      const imageElement: any = cropperRef.current;
      const cropper: Cropper = imageElement.cropper;
      cropper.scaleY(cropper.getData().scaleY === -1 ? 1 : -1);
    }
  };

  return (
    <>
      <Modal
        isOpen={modalOpend}
        contentLabel="Cropping Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            maxHeight: "90%",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
          },
        }}
      >
        <Cropper
          src={typeof photo == "string" ? photo : URL.createObjectURL(photo)}
          style={{ height: "100%", width: "100%" }}
          guides={false}
          ref={cropperRef}
          cropBoxResizable={false}
          minCropBoxWidth={500}
          minCropBoxHeight={500}
          aspectRatio={1}
        />
        <div className="text-center mt-3">
          <button
            className="btn btn-primary m-1"
            onClick={() => rotateImage(90)}
          >
            Rotate 90
          </button>
          <button
            className="btn btn-primary m-1"
            onClick={() => rotateImage(-90)}
          >
            Rotate -90
          </button>
          <button className="btn btn-primary m-1" onClick={scaleXImage}>
            Scale X
          </button>
          <button className="btn btn-primary m-1" onClick={scaleYImage}>
            Scale Y
          </button>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-success m-1" onClick={onSave}>
            Save
          </button>
          <button
            className="btn btn-danger m-1"
            onClick={() => {
              setModalOpend(false);
              setSelectedPhoto(undefined);
            }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CropperModal;
