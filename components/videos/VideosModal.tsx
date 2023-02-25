import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Input,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
  Button,
  useToast,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BACKEND_URL } from "../../config/globalEnv";

interface IVideosModal {
  isOpen: boolean;
  onClose: () => void;
  callback: () => void;
}

const VideosModal: React.FC<IVideosModal> = ({ isOpen, onClose, callback }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState<File>();
  const [fileType, setFileType] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast({ position: "top-right" });

  const handleSubmit = async () => {
    if (!title?.length) {
      return toast({ title: "Title is required", status: "error" });
    }
    if (!fileType?.length) {
      return toast({ title: "Description is required", status: "error" });
    }
    if (!description?.length) {
      return toast({ title: "Description is required", status: "error" });
    }
    if (!videoFile) {
      return toast({ title: "Video File is required", status: "error" });
    }

    const form = new FormData();

    form.append("title", title);
    form.append("description", description);
    form.append("file", videoFile);
    form.append("fileType", fileType);

    setIsLoading(true);
    const request = await fetch(BACKEND_URL + "/upload", {
      method: "POST",
      body: form,
    });

    if (request.ok) {
      toast({ title: "Successfully uploaded file", status: "success" });
      callback();
      onClose();
    } else {
      toast({
        title: "There was an error uploading the file",
        status: "error",
      });
    }
    setIsLoading(false);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW={"700px"}>
        <ModalHeader>Add a new video</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6} maxW={"700px"}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>File Type</FormLabel>
            <Select
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
              placeholder="File Type"
            >
              <option value="audios">Audios</option>
              <option value="videos">Videos</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>

            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 p-3 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Brief description for your video.
            </p>
          </FormControl>

          <div className="mt-3">
            <label className="block text-sm font-medium text-gray-700">
              Video File
            </label>
            {!videoFile ? (
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={(e) => {
                          setVideoFile(e.target.files?.[0]);
                        }}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <div>{videoFile?.name}</div>

                <div>
                  <div className="flex w-8 h-8 justify-center cursor-pointer rounded-full items-center bg-red-400 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={() => setVideoFile(undefined)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            isLoading={isLoading}
            onClick={handleSubmit}
            colorScheme="blue"
            mr={3}
          >
            Save
          </Button>
          <Button isLoading={isLoading} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default VideosModal;
